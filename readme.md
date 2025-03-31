## React- core fundamental library 

Every web react project have must two dependencies--

1. react for core fundamental
2. react-dom for web  dom manupaltion 

## other like for mobile app dvelopment we are using react-native.


## npx - node package eXecuter. --  allow to excute package directly from the npm without installing the create reat app utility  and it take more time to install.   {create-react-app}

## npm - node package manager.  -- it is light weight   {vite }

------------------------------------------------------------------------------------------------------------
## create-react-app  --   (((((folder npx_react_app)

npx create-react-app
npx- {node package eXecuter}

## package.json is main entry file here store all information about our project. 
## src folder - contain all js life or components 
--Rules and Best practices:

1. File name in Uppercase
2. function name in Uppercase
3. import and export both are written in Uppercase.
4. Always use fragment <></> because jsx return only one element so all elements are wrriten inside <></>

## Public folder one index.html file 
  -- js files link with html by dependencies react-scripts 
  in html we not use scrpit tag for link js file. ok

start project cmd line npm run start   (go to package.json file > check scripts > start)

------------------------------------------------------------------------------------------------------------

## vite -react-app             (((((npx_vite_react)


 vite project create by using cmd line npm create vite@lates then type project name choose project type "react"

 then install node module cmd line npm i 

 start file:- npm run dev   (go to package.json file > check scripts > dev)

 --main file package file here store all information about our project


 ## Rules and Best practices:

 1. File name in Uppercase
 2. user .jsx extension it must to use
 3. function name import and export name  always in Uppercase 

## src folder 
index.js is main javascritp file this file are linked with index.html linked by same classical method 
use script tag for link index.js file.



------------------------------------------------------------------------------------------------------------

## Custom react project        ((((((((((((((custon_react)


1. create html file  -> html
2. create script file -> javascript
 
 in html link js file by using <script src="file.js">

3. in js we get root element 

<!-- How react seen html element  -->
create object indside object
type -> represent html tags. which type of tag
props -> tag attributes or tag extra information like a tag have href target attributes 
childer -> text content inner text.

## Now render react element or inject in parent div append
render function take 2 parameter 1st kya inject karu uska name and 2nd is kaha{append} inject kru 
customRender(elementObject, root)

Steps:
1. get root element.
## const mainConatiner = document.querySelector("#root")

2. create react element object form store type{tage name}, props{attributes} in object form, children{text}

## const reactElement = {
        type: 'a',     
        props: {       /
               href: ".https://www.google.com",
              target: "_blank"
        },
        children: "Clicked Me"  

## }


3. create custome render function 

  - take 2 argument 1st element object and 2nd parent div.
  - Inside a function.

## how custom render work.

  - create a new tag  using dom and append value dynamically 
    ## const domElement = document.createElement(createElement.type)   

  - append innerText dynamic 
    ## domElement.innerHtml = createElement.children

   - set attributes 
   ## domElement.setAttribute('href', createElement.props.href)

  ## domElement.setAttribute('target', createElement.props.target)     

  last step appen reactlement inside the main or parent container..




