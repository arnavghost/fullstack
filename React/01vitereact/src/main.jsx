import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

// A simple custom React component (not used below, just for demo)
// This is the same as writing <MyApp /> in JSX
function MyApp(){
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}

// ---------------------------
// EXAMPLE OF A REACT ELEMENT AS A PLAIN OBJECT (commented out)
// ---------------------------
// const ReactElement = {
//     type: 'a', // means we want an <a> tag
//     props: {   // props are attributes of the tag
//         href: 'https://google.com',  // where the link goes
//         target: '_blank'             // open link in a new tab
//     },
//     children: 'Click me to visit google' // the inner text of the <a>
// }
// This is basically how React internally represents JSX like:
// <a href="https://google.com" target="_blank">Click me to visit google</a>


// ---------------------------
// JSX WAY of writing a React element
// ---------------------------
const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)
// This is syntactic sugar for React.createElement()
// React will convert it into an object similar to ReactElement above.


// Just a string variable (not used in render below)
const anotherUser = "chai aur react"


// ---------------------------
// Using React.createElement manually
// ---------------------------
const reactElement = React.createElement(
    'a',  // type of element → <a>
    { href: 'https://google.com', target: '_blank' }, // props (attributes)
    'click me to visit google',  // child (inner text)
    anotherElement                // another child (the JSX <a> above)
)
// This will create something like:
// <a href="https://google.com" target="_blank">
//    click me to visit google
//    <a href="https://google.com" target="_blank">Visit google</a>
// </a>


// ---------------------------
// Rendering into the root div in index.html
// ---------------------------
ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement // rendering the element created manually
)
