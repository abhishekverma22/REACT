// create custom render and learn how to create custome render behind the secne in react.

function customRender(createElement, parentcontainer){      // kisko set karna hai and kisme set karna hai..
  /* section 1 coding style but some problem..

  // create new element 
  const domElement = document.createElement(createElement.type)  // reactElement mein jo type hain.. 
  // create <a></a> tag

  domElement.innerHTML = createElement.children   // here wite text inside a side <a>Clicked Me</a>

  domElement.setAttribute('href', createElement.props.href)       //  setAttributes('attribute name'  value)
  // now look like  <a href="">Clicked Me</a>  

  domElement.setAttribute('target', createElement.props.target)   // <a href="link" target="_blank">Clicked Me</a>

  parentcontainer.appendChild(domElement)

  */

  const domElement = document.createElement(createElement.type);

  domElement.innerHTML = createElement.children;

  for (const prop in reactElement.props) {
      //  if(prop === children) continue;
       domElement.setAttribute(prop, reactElement.props[prop])
  }

  parentcontainer.appendChild(domElement);

}






// create own react type element 
const reactElement = {
  type: 'a',     // tag namae
  props: {       // attributes
    href: "https://www.google.com",
    target: "_blank"
  },
  children: "Clicked Me"   // innerText 

}
// get root 
const mainConatiner = document.querySelector("#root")


customRender(reactElement, mainConatiner)
