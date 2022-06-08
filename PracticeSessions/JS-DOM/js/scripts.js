// 1: Set the text of the <h1> element
//mine 
//const myH1 = document.querySelector('.container h1')
//myH1.innerHTML = "Hello World"

//his
const myH1 = document.querySelector('h1')
myH1.textContent = "My Activities List"

// 2: Set the color of the <h1> to a different color
//mine aconst myH1 = document.querySelector('.container h1')
myH1.innerHTML = "Hello World"
myH1.style.color = "Blue"

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
//mine and his were the same 
const parag = document.querySelector('.desc');
parag.innerHTML = `<h2>This is a paragraph header</h2> This is the rest of my paragraph`

// 4: Set the class of the <ul> to 'list'
//mine and his were the same 
const setUl = document.querySelector('ul')
setUl.className = "list"


// 5: Create a new list item and add it to the <ul>
//mine 
//setUl.insertAdjacentHTML('afterbegin',`<li><input> Will work</li>`);

//his
const item = document.createElement('li')
item.innerHTML = "<input> Eat Ice cream"
setUl.appendChild(item)


// 6: Change all <input> elements from text fields to checkboxes
//mine and his are the same 
const checkBoxes = document.getElementsByTagName("input")

for(let i=0; i<checkBoxes.length; i++){
  checkBoxes[i].type = "checkbox" 
}


// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>
//his and mine are the same 
const deleteBtn = document.createElement('button')
deleteBtn.textContent = "Delete"

const extraDiv = document.querySelector('.extra')
extraDiv.appendChild(deleteBtn)




// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
//mine
//deleteBtn.addEventListener('click', () => {
//    extraDiv.style.display = 'none'                     
//});

//his  --- he had to use "container" as his selector since he is removing the child element 
const container = document.querySelector('.container')
deleteBtn.addEventListener('click', () => {
     container.removeChild(extraDiv)                      
});









