function customRender(reactElement,conatiner){

// //     const domElement = document.createElement(reactElement.type)
// //     domElement.innerHTML = reactElement.children
// //     domElement.setAttribute('href',reactElement.props.href)
// //     domElement.setAttribute('target',reactElement)

// //     conatiner.appendChild(domElement)
        
// // }
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    conatiner.appendChild(domElement)
}
// function render(reactElement, container) {
//     const domElement = document.createElement(reactElement.type);
//     domElement.innerHTML = reactElement.children;

//     for (const prop in reactElement.props) {
//         if (prop === 'children') continue;
//         domElement.setAttribute(prop, reactElement.props[prop]);
//     }

//     container.appendChild(domElement);
// }



const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}


const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)
