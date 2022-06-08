// get element by id 
const btnUpdate = document.getElementById('btn-main');
const headline = document.getElementById('headline');  

btnUpdate.addEventListener('click', () => {
  headline.style.border = 'solid 2px pink'; 
});
   



// get elements by tag name 
const items = document.getElementsByTagName('li'); 

// using a for loop 
for(let i = 0; i < items.length; i++){
 items[i].style.backgroundColor = 'skyblue';
}

// using forEach 
Array.from(items).forEach(el => el.style.backgroundColor = 'teal');

// .forEach method only works on arrays and while the "collection" looks like an array, it doesn't have all the same properties as arrays.  In order to use .forEach we must first turn the collection into an array.  We can do this with the Array.from() method. 







//get elements by class name 

const highlights = document.getElementsByClassName('highlight'); 

//using a for of loop 
for(let lis of highlights){
 lis.style.backgroundColor = 'pink';
}
 




//querySelector() and querySelectorAll() - this is a nodeList verses a HTMLCollection 
/*  
  Node List: is more flexable than a HTML Collection 
   1) it contains elements nodes and text nodes 
   2) you can iterate over it with for, for of, map() and forEach.  No need to convert
   
  HTML Collections:
   1) Only contains HTML elements 
   2) can't loop over it the same way you can an array.  For example, you have to convert to an array to use a forEach
  
  Main difference:
  1) HTML Collection is a live date structure and NodeList is a static data structure 
  2) When a new element gets appended to the DOM, an HTML Collection will recognize the new element while a NodeList will not
  */


  const btnUpdate1 = document.querySelector('.btn-main1');
  const headline1 = document.querySelector('.headline1');  
  const items1 = document.querySelectorAll('li');
  const highlights1 = document.querySelectorAll('.highlight'); 
  
  btnUpdate1.addEventListener('click', () => {
     headline1.style.border = 'solid 2px green'; 
  });
  
  for(let i = 0; i < items1.length; i++){
    items1[i].style.backgroundColor = 'skyblue';
  }
  
  for(let lis of highlights1){
    lis.style.backgroundColor = 'red';
  }
  
  
  
  
  
  
  
  
  
  
  
                           