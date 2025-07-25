
function customRender(reactElement,container){
/*
    const domElement =  document.createElement(reactElement.type) //create the dom element
    domElement.innerHTML = reactElement.children; //set text of dom element
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target);
    container.appendChild(domElement); //append the dom element to the container
*/

    //better way to render react element
    //How react works internally
    const domElement = document.createElement(reactElement.type); // create the dom element
    // set attributes from props
    for (const prop in reactElement.props) {
       if(prop === 'children') continue; // skip children prop
       domElement.setAttribute(prop, reactElement.props[prop]);
    }
    // set text content
    domElement.textContent = reactElement.children;
    container.appendChild(domElement); // append the dom element to the container
}

const reactElement = {
    //props passed
    type: "a",
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google',  
}

const mainContainer = document.querySelector("#root");

customRender(reactElement,mainContainer);