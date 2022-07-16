const btnCreate = document.querySelector('.btn-main1');
const btnToggle = document.querySelector('.btn-toggle');

btnCreate.addEventListener('click', () => {
   const input = document.querySelector('.input-main'); 
   const list = document.querySelector('ul'); 


//adding elements to the DOM 

//option 1 
   list.insertAdjacentHTML(
     'afterbegin', //where 
     `<li>${input.value}</li>`//what 
   );
   input.value = "";

//option 2 

//   const item = document.createElement('li');   
//
//   item.textContent = input.value; 
//   input.value = "";
//   list.append(item);// adds to the end of the list 
//   list.prepend(item); //adds to the start of the list
   
});


//removing elements from the DOM 
const btnRemove = document.querySelector('.btn-remove');

btnRemove.addEventListener('click', () => {
  const lastItem = document.querySelector('li:last-child'); //li:last-child targets the last item in a list       
  
  lastItem.remove(); 
});

btnToggle.addEventListener('click', () => {
  const listContainer = document.querySelector('.list-container');
  if(listContainer.style.display === "none"){
    btnToggle.textContent = "Hide List"
    listContainer.removeAttribute('style');
//    listContainer.style.display = 'block';  
    
  }else{
    btnToggle.textContent = "Show List"
    listContainer.style.display = 'none';   
    
  }                      
});

//innerHTML vs textContent 


