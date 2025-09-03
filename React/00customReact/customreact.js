// A custom function that works like ReactDOM.render
function customRender(reactElement, container) {
    // Step 1: Create a real HTML element based on the type of reactElement
    // Example: if type = 'a', it creates <a>
    const domElement = document.createElement(reactElement.type);

    // Step 2: Set the inner text (children) of the element
    // Example: <a>click me to visit google</a>
    domElement.innerHTML = reactElement.children;

    // Step 3: Loop through all properties (props) of reactElement
    // Example: { href: 'https://google.com', target: '_blank' }
    for (let prop in reactElement.props) {
        // Skip "children" because it's already handled above
        if (prop === 'children') continue;

        // Add each prop as an HTML attribute
        // Example: <a href="https://google.com" target="_blank">
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    // Step 4: Attach the newly created element to the container (root div)
    container.appendChild(domElement);
}

// A mock React-like element object
const reactElement = {
    type: 'a',  // Means <a> tag
    props: {
        href: 'https://google.com', // link URL
        target: '_blank' // opens in new tab
    },
    children: 'click me to visit google' // text inside the tag
}

// The root element where we want to render
const mainContainer = document.querySelector('#root');

// Call our custom render function
customRender(reactElement, mainContainer);
