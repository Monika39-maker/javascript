const addBtn = document.getElementById('add');

const mainEl = document.querySelector('.main')



addBtn.addEventListener("click", () => {
    
    addNewNote()
    
});

function addNewNote() {
    const newDiv = document.createElement('div');
    newDiv.classList.add('container')
    mainEl.innerHTML = `<div class="tools">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash"></i></button>
        </div>
        <div class="text-area hidden" ></div>
        <textarea class="edit-area" cols="30" rows="10"></textarea>`

    mainEl.appendChild(newDiv);
    
    const textarea = mainEl.querySelector('.text-area');
    const editArea = mainEl.querySelector('.edit-area')
    const editBtn = mainEl.querySelector('.edit');
    const removeBtn = mainEl.querySelector('.delete')
    editBtn.addEventListener("click", () => {
        textarea.classList.toggle('hidden');
        editArea.classList.toggle('hidden')
    })
    
    removeBtn.addEventListener("click", () => {
        mainEl.remove()
    })

    editArea.addEventListener("input", (e) => {
        const {value} = e.target;
        textarea.innerHTML = marked(value)
        console.log(value)

    })



}

