const form = document.querySelector("#task-form")
const input = document.querySelector("#task-input")
const list = document.querySelector("#task-list")
const buttonCompleter = document.querySelector("#clear-completed-tasks-button")



function ajoutTache(e){

    e.preventDefault();


    const newTask = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    newTask.appendChild(checkbox);

    const text = document.createElement("p")
    text.className = 'text';
    text.innerHTML = input.value
    newTask.appendChild(text);


    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i>supprimer la tache</i>';
    deleteButton.className = "button-delete";

    newTask.appendChild(deleteButton);


    list.appendChild(newTask);

    input.value = '';

}

form.addEventListener('submit', ajoutTache);


list.addEventListener('click', function(event) {
    console.log(event.target.parentElement);
    if (event.target.parentElement.classList.contains("button-delete")) {
      event.target.parentElement.parentElement.remove();
    }
});

list.addEventListener('change', function(e){
    if(e.target.classList.contains('checkbox')){

        const task = e.target.parentElement;
        if(e.target.checked){
            task.classList.add('completer')
        }
        else{
            task.classList.remove('completer')
        }

    }
})

buttonCompleter.addEventListener('click', function() {
    const completeTasks = list.querySelectorAll('.completer');
    completeTasks.forEach(function(task) {
      task.remove();
    });
  });






