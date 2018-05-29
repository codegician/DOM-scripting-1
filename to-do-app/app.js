function onReady() {
    
    //add to do form 
    const addToDoForm = document.getElementById('addToDoForm');
    
    //new to do text
    const newToDoText = document.getElementById('newToDoText');
    
    //to do list 
    const toDoList = document.getElementById('toDoList');
    addToDoForm.addEventListener('submit', event => {
        event.preventDefault();
        
        console.log("SUBMIT"); 
        
        //get the text 
        let title = newToDoText.value; 
        
        //create a new li
        let newLi = document.createElement('li');
        
        // create a new input 
        let checkbox = document.createElement('input');
        
        //set the input's type to checkbox 
        checkbox.type = "checkbox"; 
        
        // set the title 
        newLi.textContent = title; 
        
        // attach the checkbox to the Li 
        newLi.appendChild(checkbox); 
        
        // attach the li to the ul 
        toDoList.appendChild(newLi);
        
        // empty the input
        newToDoText.value = ''; 
  
        var todoName = document.querySelector('[type="text"]').value;

function addedFeedback(todoName) {
  let liveRegion = document.querySelector('[role="status"]');
  liveRegion.textContent = `${todoName} added.`;
}

// example usage
addedFeedback(todoName);
    }); 
}
window.onload = function onReady() {
};