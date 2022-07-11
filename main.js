// View the optimal layout for the app depending on their device's screen size
//- See hover states for all interactive elements on the page
//- Add new todos to the list
    //take input value
    //generate task of input in task list
//- Mark todos as complete
    //mark completed
    //line through completed task
//- Delete todos from the list
//- Filter by all/active/complete todos
//- Clear all completed todos
//- Toggle light and dark mode
//- **Bonus**: Drag and drop to reorder items on the list

const addTaskCheckbox = document.querySelector('#addTaskCheckbox')
const addTaskInput = document.querySelector('#addTaskInput')
const taskList = document.querySelector('.taskList')

addTaskCheckbox.addEventListener('click', getTask)
    function getTask() {
        if(this.checked) {
            const taskText = addTaskInput.value
            if(taskText === '') return
            taskList.innerHTML += 
            `<div class="task">
            <input type="checkbox" class="checkbox">
            <p>${taskText}</p>
            <img src="images/icon-cross.svg" class="delete">
            </div>`
            this.checked = true
        }
        addTaskInput.value = ''
    }

function removeInputCheck() {
    const tasks = taskList.children
    tasks.lengtha !== 0 ? addTaskCheckbox.checked = false : ''
}
setInterval(removeInputCheck, 500)

window.addEventListener('click', deleteTasks)
    function deleteTasks(e) {
        const deleteIcons = document.querySelectorAll('.delete')
        deleteIcons.forEach(icon => {
            if(e.target !== icon) return
            const task = e.target.parentNode
            task.remove()
        })
    }

window.addEventListener('click', completeTask)
    function completeTask(e) {
        const checkboxes = document.querySelectorAll('.checkbox')
        checkboxes.forEach(box => {
            if(e.target !== box) return
            // console.log(e.target)
            if(e.target.checked) {
                const task = e.target.parentNode
                task.classList.add('complete')
                e.target.checked = true
            }else {
                const task = e.target.parentNode
                task.classList.remove('complete')
                e.target.checked = false
            }
        })
    }

const all = document.querySelector('.all')
all.addEventListener('click', allTasks)
    function allTasks() {
        const tasks = Array.from(document.querySelectorAll('.task'))
        tasks.forEach(task => {
            task.style.display = 'flex'
        })
    }

const completed = document.querySelector('.completed')
completed.addEventListener('click', completedTasks)
    function completedTasks() {
        const tasks = Array.from(document.querySelectorAll('.task'))
        tasks.forEach(task => !task.classList.contains('complete') ? task.style.display = 'none' : task.style.display = 'flex')
    }

const active = document.querySelector('.active')
active.addEventListener('click', activeTasks)
    function activeTasks() {
        const tasks = Array.from(document.querySelectorAll('.task'))
        tasks.forEach(task => task.classList.contains('complete') ? task.style.display = 'none' : task.style.display = 'flex')
    }

const clearCompletedBtn = document.querySelector('.clearCompleted')
clearCompletedBtn.addEventListener('click', clearCompletedTasks)
    function clearCompletedTasks() {
        const completedTasks = document.querySelectorAll('.complete')
        completedTasks.forEach(task => task.remove())
    }