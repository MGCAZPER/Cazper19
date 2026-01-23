// 1) using Tag Name

// Syntax:documents.getELements TagName(‘tag_name’)
document.getElementsByTagName('h1');


// 2) using Element ID

// Syntax:document.getElementById(‘id_name’)
document.getElementById('topic');
// Select the element by its id attribute set to header


// 3) using class of the element

// Syntax:document.getElementsByClassName(‘class_name’)
document.getElementsByClassName('headdings');
    // Select all elements with class attribute set to para


// 4) Using Css Selector

// Syntax:document.querySelector(‘css_selector’)
document.querySelector('h2');
// Select only the first element with id specified selector


// Syntax:document.querySelectorAll(‘css_selector’)
document.querySelectorAll('.headdings');
// Select all elements with class specified selector