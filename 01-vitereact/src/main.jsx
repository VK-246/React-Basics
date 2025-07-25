import React from 'react' 
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}

// this syntax is not accepted by react
// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }


// this is the correct way to create a react element
const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)


//this is a evaluated expression used by {} injection in JSX
const anotherUser = "chai aur react"

// this is how react creates DOM elements
const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google',
    anotherElement,
)

//this is how we render a react element to the DOM
createRoot(document.getElementById('root')).render(
    reactElement
)