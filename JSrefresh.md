# JSON and localStorage

## JSON and localStorage are functions contained within JavaScript itself, used for compatibility and saving values through different instances of the same webpage respectively.

JSON.stringify(JSObject) -- converts JS Objects into JSON strings, allowing for compatibility with various languages

JSON.parse(JSON) -- converts JSON strings back to JS Objects (NOTE: It does not convert functions, so it is like a CPP struct)

localStorage.setItem('identifier', 'value') -- this only supports strings, identifier, followed by the value

To get around the limitation of only supporting strings, we can use localStorage.setItem('identifier', JSON.stringify(JSObject))

localStorage.getItem('identifier')

localStorage.removeItem('identifier') -- throws an error, avoid this with an if loop to check for null

# DOM (Document Object Model)

## As the name suggests, this models the HTML elements as JavaScript Objects, allowing our HTML and JS to interact.

document.body.innerHTML = 'hello'; replaces the content of the body with hello

-- the document object models the webpage (the DOM)

**The DOM combines JS and HTML**, giving JS full control of the webpage

The HTML element is converted to a JS Object when referred to as such

**Methods: methods are function stored inside an object**

document.querySelector() is a method, allowing use to take anything from HTML and put it inside our JS

If we added innerHTML to this, like so: document.querySelector('button').innerHTML --  it would return the text inside the first button on the HTML webpage

We can specify which button by assigning the button a class in HTML, then starting our querySelector input with a period, which searches for classes

We are able to take the input from a input box in HTML by using '.value' and use it in our JS code :O

${variable} -- inserts the variable into a string

Use Number() to convert the strings, **which are always what is returned by the DOM**, to integers
Use String() to do similar in reverse

Finally, the last object built into JS is the window object -- this refers to the browser itself, whereas the document object we learnt about earlier, refers to the webpage

window.console.log is the same as console.log
window.alert

We can avoid typing window, as JS will automatically add it in front of things such as console.log and alert.




# Event Listeners

onclick - as the name suggests
onkeydown - as the name suggests
onscroll - as the name suggests
onmouseenter - hovering over
onmouseleave - stop hovering over

# JavaScript Quirks

If a string **only** contains a number, when subtracting, multiplying or dividing it, JS will auto-convert it to a number.
However, as + is multi-functional with string concatenation, it will add them as strings as shown below:

console.log('25' * 3) = outputs 75

console.log('25' + 10) = outputs 2510

To prevent this issue from arising, we should remember to **always convert our strings before using math operations.**


