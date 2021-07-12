const addBtn = document.getElementById('add');
const mainEl = document.querySelector('.main');

localStorage.getItem(JSON.parse("notes"))


addBtn.addEventListener("click", () => {
    addNewNote();
    
});

addNewNote()

function addNewNote() {
    
    const newDiv = document.createElement('div');
    newDiv.classList.add('container')
    newDiv.innerHTML = `<div class="tools">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash"></i></button>
        </div>
        <div class="text-area hidden" ></div>
        <textarea class="edit-area" cols="30" rows="10"></textarea>`

    mainEl.appendChild(newDiv);
    
    const textarea = newDiv.querySelector('.text-area');
    const editArea = newDiv.querySelector('.edit-area')
    const editBtn = newDiv.querySelector('.edit');
    const removeBtn = newDiv.querySelector('.delete')
    editBtn.addEventListener("click", () => {
        textarea.classList.toggle('hidden');
        editArea.classList.toggle('hidden');
        
    })
    
    removeBtn.addEventListener("click", () => {
        newDiv.remove()
    })

    editArea.addEventListener("input", (e) => {
        const {value} = e.target;
        textarea.innerHTML = marked(value)
        

    })
    
    const noteEls = document.querySelectorAll('.edit-area');
    const notes = []
    noteEls.forEach((noteEl) => {notes.push(noteEl.value)})
    console.log(notes)

    localStorage.setItem("notes", JSON.stringify(notes))

}



