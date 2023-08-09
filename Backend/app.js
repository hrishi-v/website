const passport = require("passport"); 
const LocalStrategy = require("passport-local").Strategy;
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require('mysql');
const crypto = require('crypto');
const session = require("express-session"); 
const MySQLStore = require("express-mysql-session")(session); 
const ejs = require("ejs");


const app = express();  


app.use(session({
    key: "session_cookie_name", 
    secret: "session_cookie_secret", 
    store: new MySQLStore({
        host: '127.0.0.1', 
        port: '3306',
        user: 'root', 
        database: 'cookie_user', 
        password: 'password'
    }), 
    resave: false, 
    saveUninitialized: false,
    cookie: {
        maxAge: 1000*60*60*24, 
    }
}))

app.use(passport.initialize()); 
app.use(passport.session()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})); 
app.use(express.static("Public"));
app.set("view engine", "ejs"); 


const connection = mysql.createConnection({
    host: '127.0.0.1', 
    port: '3306',
    user: 'root', 
    database: 'user_data', 
    password: 'password', 
    multipleStatements: true
}); 

connection.connect((error) => {
    if (error) {
        console.log(error);
        return; 
    }
    console.log("Connection established successfully");
});

// Set up passport.js for authentication

const customFields = {
    usernameField: 'email', 
    passwordField: 'password',
}

const verifyCallback=(email, password, done)=> {
    console.log("in callback"); 
    connection.query('SELECT * FROM users WHERE email = ?', [email], function(error, results, fields) {
        if (error) { 
            return done(error); 
        } else if (results.length==0) {
            return done(null, false);
        } else {
            const isValid = validPassword(password, results[0].hash, results[0].salt); 
            user = {id:results[0].id, email: results[0].email, hash:results[0].hash, salt: results[0].salt};
            if (isValid) {
                return done(null, user); 
            } else {
                return done(null, false); 
            }
        
        }
    })
}

const strategy = new LocalStrategy(customFields, verifyCallback); 
passport.use(strategy);

passport.serializeUser((user, done) => {
    console.log("inside Serialize");
    done(null, user.id);
}); 

passport.deserializeUser((userId, done) => {
    console.log("deserializeUser" + userId);
    connection.query("SELECT * FROM users where id = ?", [userId], function(error, results) {
        done(null, results[0]);
    }); 
});

function validPassword(password, hash, salt) {
    var hashVerify=crypto.pbkdf2Sync(password, salt, 10000, 60, 'sha512').toString('hex'); 
    return hash === hashVerify; 
}

function genPassword(password) {
    var salt = crypto.randomBytes(32).toString('hex'); 
    var genhash = crypto.pbkdf2Sync(password, salt, 10000, 60, 'sha512').toString('hex'); 
    return {salt:salt, hash:genhash}; 
}

function isAuth(req, res, next) {
    if (req.isAuthenticated()) {
        next(); 
    } else {
        res.redirect('/notAuthorized'); 
    }
}

function isAdmin(req, res, next) {
    if (req.isAuthenticated() && req.user.isAdmin == 1) {
        next(); 
    } else {
        res.redirect('/notAuthorizedAdmin'); 
    }
}

function userExists(req, res, next) {
    connection.query('SELECT * from users where email = ? ', [req.body.email], function(error, results, fields) {
       if (error) {
        console.log("Error"); 
       } else if (results.length > 0) {
        res.redirect('/userAlreadyExists')
       } else {
        next(); 
    }
    })
}


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html"); 
})

app.get('/login', (req, res, next) => {
    res.render('login')
});

// app.get("/logout", function(req, res) {
//     req.logout(); 
//     res.redirect('/protected-route');
// })

app.get('/logout', function(req, res, next){
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/protectedRoute');
    });
  });

app.get("/login-success", function(req, res) {
    res.send('<p>Successfully logged in</p>');
})

app.get("/login-failure", function(req, res) {
    res.send('<p>Wrong password</p>');
})

app.get("/register", function(req, res) {
    res.render('register'); 
})

app.post("/register", userExists, function(req, res) {
    console.log("Inside post request"); 
    console.log(req.body.password); 
    const saltHash = genPassword(req.body.password); 
    console.log(saltHash); 
    const salt = saltHash.salt; 
    const hash = saltHash.hash;


    connection.query("Insert into users(email, hash, salt, isAdmin) values(?, ?, ?, 0)", [req.body.email, hash, salt], function(error, results, fields) {
        if (error) {
            console.log("Error");
        } else {
            console.log("Successfully Entered"); 
        }
    });
    console.log("redirect to login"); 
    res.redirect('/login');
}); 

app.post('/login', passport.authenticate('local', {failureRedirect: '/login-failure', successRedirect: '/login-success'})); 

app.get('/protectedRoute', isAuth, function(req, res) {
    res.json({ message: "Hello from server!" });
})

app.get('/admin-route', isAdmin, function(req, res) {
    res.send("<h1>Admin</h1>");
})

app.get('/notAuthorized', function(req, res) {
    res.send("<h1>Not Authorized</h1>");
})

app.get('/notAuthorizedAdmin', isAdmin, function(req, res) {
    res.send("<h1>Not Authorized Admin</h1>");
})

app.get('/userAlreadyExists', function(req, res) {
    res.send("<h1>user Already Exists</h1>");
})

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});
  

app.listen(process.env.PORT || 3001, function() {
    console.log("Server is running on port 3001");
  });
