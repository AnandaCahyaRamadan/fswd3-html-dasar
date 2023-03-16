let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

if(window.localStorage.getItem("todos") == undefined){
    var todos = [];
    window.localStorage.setItem("todos", JSON.stringify(todos));
}
var todosEX = window.localStorage.getItem("todos");
var todos = JSON.parse(todosEX);


//add btn disabled
input.addEventListener('keyup' , () => {
    if (input.value.trim() !== 0){
        addBtn.classList.add('active');
    }
    else{
        addBtn.classList.remove('active')
    }
})

//add new task
addBtn.addEventListener('click', () => {
    if (input.value.trim() != 0){
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p>${input.value}</p>
        <div class="item-btn">
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-xmark"></i>
        </div>
        `
        todos.push(input.value);
        window.localStorage.setItem("todos", JSON.stringify(todos));
        tasks.appendChild(newItem);
        input.value = "";
    }
    else{
        alert('Jangan dikosongi')
    }
})

//remove iten
tasks.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-xmark')){
        e.target.parentElement.parentElement.remove();
        let index = todos.indexOf(name);
        todos.splice(index, 1);
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }
})
//coret item
tasks.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-pen-to-square')){
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
})
