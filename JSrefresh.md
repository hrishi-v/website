JSON.stringify(JSObject) -- converts JS Objects into JSON strings, allowing for compatibility with various languages

JSON.parse(JSON) -- converts JSON strings back to JS Objects (NOTE: It does not convert functions, so it is like a CPP struct)

localStorage.setItem('identifier', 'value') -- this only supports strings, identifier, followed by the value

To get around the limitation of only supporting strings, we can use localStorage.setItem('identifier', JSON.stringify(JSObject))

localStorage.getItem('identifier')

localStorage.removeItem('identifier') -- throws an error, avoid this with an if loop to check for null

document.body.innerHTML = 'hello'; replaces the content of the body with hello

-- the document object models the webpage (the DOM)

The DOM combines JS and HTML, giving JS full control of the webpage

The HTML element is converted to a JS Object when referred to as such

Methods: methods are function stored inside an object

document.querySelector() is one of these such things, allowing use to take anything from HTML and put it inside our JS

If we added innerHTML to this, like so: document.querySelector('button').innerHTML --  it would return the text inside the first button on the HTML webpage

We can specify which button by assigning the button a class in HTML, then starting our querySelector input with a period, which searches for classes

We are able to take the input from a input box in HTML by using '.value' and use it in our JS code :O

${variable} -- inserts the variable into a string