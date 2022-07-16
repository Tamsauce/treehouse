const btnCreate = document.getElementById('btn-main');
const btnToggle = document.querySelector('.btn-toggle');
const taskList = document.querySelector('.list-container ul');
const listItems = taskList.children; 

function attachRemoveBtn(li){
  let remove = document.createElement('button');
  remove.className = 'remove';
  remove.textContent = 'Remove';
  li.appendChild(remove);
  
}

for(let i = 0; i <listItems.length; i++){
  attachRemoveBtn(listItems[i])
}


////tagName always returns UPPERCASE! 
//taskList.addEventListener('mouseover', (event) => {
//	if(event.target.tagName === 'LI'){
//		event.target.textContent = event.target.textContent.toUpperCase();
//	}
//})


taskList.addEventListener('click', (event) => {
	if(event.target.tagName === 'BUTTON'){
		const btn = event.target
    const li = btn.parentNode;
    li.remove()
	}
})

btnToggle.addEventListener('click', () => {
  const listContainer = document.querySelector('.list-container');
  if (listContainer.style.display === 'none') { 
    btnToggle.textContent = 'Hide List';
    listContainer.removeAttribute('style');
  } else {
    btnToggle.textContent = 'Show List';                        
    listContainer.style.display = 'none';
  }                         
});

btnCreate.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0]; 
  const input = document.querySelector('.input-main');
  let li = document.createElement('li');
  li.textContent = input.value; 
  attachRemoveBtn(li)
  ul.appendChild(li);
  input.value = '';
});



