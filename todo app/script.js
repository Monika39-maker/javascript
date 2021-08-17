const form = document.querySelector('#form');
const input = document.getElementById('to-do-text');
const ulEl = document.querySelector('ul')




var toDos = JSON.parse(localStorage.getItem('toDos'));
toDos.forEach((toDo) => {
    
    createToDoList(toDo)
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    createToDoList()

})

function createToDoList(toDo) {
        
        toDoText = input.value
  
        if (toDo) {
            toDoText = toDo.text

        }
    
    
    
    if (toDoText) {
        const newToDo =  document.createElement('li');
    
        
        newToDo.addEventListener("click", () => {
            newToDo.classList.toggle('cross')
            updateLS()
        })

        newToDo.innerText = toDoText
        
        ulEl.appendChild(newToDo)
        updateLS()
        input.value = " "
        if ( toDo && toDo.completed) {
            newToDo.classList.add('cross')
        }
        newToDo.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            newToDo.remove()
            updateLS()
        })
    }
    
    
}


    
function updateLS() {
    const listEls = document.querySelectorAll('li')
    const toDos = []
    listEls.forEach((listEl) => {
        toDos.push({
             text: listEl.innerText,
             completed: listEl.classList.contains('cross')
             })

            
            
        localStorage.setItem("toDos", JSON.stringify(toDos));
    });    
}

