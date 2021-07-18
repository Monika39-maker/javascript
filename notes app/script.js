const addBtn = document.getElementById('add');
const mainEl = document.querySelector('.main');

const notes =  JSON.parse(localStorage.getItem("notes"));

notes.forEach(((note) => {
    if(note) {
        
        addNewNote(note)
        
    }

}))


addBtn.addEventListener("click", () => {
    
    addNewNote();
    
});



function addNewNote(text=" ") {
    console.log(text)
    
    const newDiv = document.createElement('div');
    newDiv.classList.add('container')
    newDiv.innerHTML = `<div class="tools">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash"></i></button>
        </div>
        <div class="text-area ${text ? 'hidden' : ''}" ></div>
    
        <textarea class="edit-area ${text ? '' : 'hidden'}" cols="30" rows="10"></textarea>`
        
    
    
    const textarea = newDiv.querySelector('textarea');
    textarea.innerText = text
    
    
    console.log(textarea.value)
    const editArea = newDiv.querySelector('.edit-area')
    const editBtn = newDiv.querySelector('.edit');
    const removeBtn = newDiv.querySelector('.delete')
    editBtn.addEventListener("click", () => {
        textarea.classList.toggle('hidden');
        editArea.classList.toggle('hidden');

        editArea.addEventListener("input", (e) => {
        const {value} = e.target;
        textarea.innerHTML = marked(value)
        updateLS()
        

    })
        
    })
    
    removeBtn.addEventListener("click", () => {
        newDiv.remove()
        updateLS()
    })

    
    
    mainEl.appendChild(newDiv);

}

function updateLS() {
    const noteEls = document.querySelectorAll('.edit-area');
    const notes = []
    noteEls.forEach((noteEl) => {notes.push(noteEl.value)})
    

    localStorage.setItem("notes", JSON.stringify(notes))
}



