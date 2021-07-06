const editBtn= document.getElementById('edit');
const deleteBtn= document.getElementById('delete');
const textArea= document.getElementById('text-area');
const addBtn = document.getElementById('add')

editBtn.addEventListener("click", () => {
    marked(textArea.value)
})