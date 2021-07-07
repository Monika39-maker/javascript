const editBtn= document.getElementById('edit');

const textArea= document.getElementById('text-area');
const addBtn = document.getElementById('add');
const editArea = document.getElementById('edit-area');
const mainEl = document.getElementById('main')

// editBtn.addEventListener("input", (e) => {
//     textArea.classList.toggle('hidden');
//     editArea.classList.toggle('hidden')
    
// })

addBtn.addEventListener("click", () => {
    
    addNewNote()
    
});

function addNewNote() {
    const newDiv = document.createElement('div');
    newDiv.classList.add('container')
    mainEl.innerHTML = `<div class="tools">
            <button id="edit"><i class="fas fa-edit"></i></button>
            <button id="delete" class="delete"><i class="fas fa-trash"></i></button>
        </div>
        <div class="text hidden" id="edit-area"></div>
        <textarea name="" id="text-area" cols="30" rows="10"></textarea>`

    mainEl.appendChild(newDiv);
    const deleteBtn = newDiv.querySelector('.delete');
    deleteBtn.addEventListener("click", () => {
        alert("alert")
        
    })
}

