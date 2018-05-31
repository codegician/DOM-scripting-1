//add to do form 
const addToDoForm = document.getElementById('addToDoForm'); 

//new to do text 
const newToDoText = document.getElementById('newToDoText'); 

//to do list 
const toDoList = document.getElementById('toDoList'); 
addToDoForm.addEventListener('submit', event => { 
    event.preventDefault(); 
    console.log("click"); 
    
    //get the text 
    let title = newToDoText.value; 

    //create a new li 
    let newLi = document.createElement('li'); 
    
    //delete button
    let deleteButton = document.createElement('button');

    // create a new input 
    let checkbox = document.createElement('input'); 

    //set the input's type to checkbox 
    checkbox.type = "checkbox"; 

    // set the title 
    newLi.textContent = title; 

    deleteButton.textContent = "delete";
    deleteButton.onmouseup = function () {
        delete newLi; 
    }

    
    // attach the checkbox to the Li 
    newLi.appendChild(checkbox); 

    newLi.appendChild(deleteButton);


    // attach the li to the ul 
    toDoList.appendChild(newLi); 

    // empty the input 
    newToDoText.value = ''; 
    
});
