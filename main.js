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
//- add light and dark mode
//- **Bonus**: Drag and drop to reorder items on the list


const themeIcon = document.querySelector('.themeIcon')
themeIcon.addEventListener('click', changeTheme)
    function changeTheme(e) {
        const body = document.querySelector('body')
        const header = document.querySelector('header')
        const themeIcon = document.querySelector('.themeIcon')
        const addTaskInnerCon = document.querySelector('.addTaskInnerCon')
        const addTaskInput = document.querySelector('.addTaskInput')
        const tasks = document.querySelectorAll('.task')
        const dashboard = document.querySelector('.dashboard')
        const categories = document.querySelector('.categories')
        const taskLeft = document.querySelector('.taskLeft')
        const clear = document.querySelector('.clear')
        const instruction = document.querySelector('.instruction')

        themeIcon.classList.toggle('lightThemeIcon');
        if(themeIcon.classList.contains('lightThemeIcon')) {
            body.classList.add('bodyThemeLight')
            header.classList.add('headerThemeLight')
            addTaskInnerCon.classList.add('addTaskInnerConTheme')
            addTaskInput.classList.add('addTaskInputTheme')
            tasks.forEach(task => task.classList.add('taskThemeLight'))
            dashboard.classList.add('dashboardThemeLight')
            categories.classList.add('categoriesThemeLight')
            taskLeft.classList.add('taskLeftThemeLight')
            clear.classList.add('clearThemeLight')
            instruction.classList.add('instructionTheme')
        }else {
            body.classList.remove('bodyThemeLight')
            header.classList.remove('headerThemeLight')
            addTaskInnerCon.classList.remove('addTaskInnerConTheme')
            addTaskInput.classList.remove('addTaskInputTheme')
            tasks.forEach(task => task.classList.remove('taskThemeLight'))
            dashboard.classList.remove('dashboardThemeLight')
            categories.classList.remove('categoriesThemeLight')
            taskLeft.classList.remove('taskLeftThemeLight')
            clear.classList.remove('clearThemeLight')
            instruction.classList.remove('instructionTheme')
        }
    }

const addTaskCheckbox = document.querySelector('#addTaskCheckbox')
const addTaskInput = document.querySelector('.addTaskInput')
const taskList = document.querySelector('.taskList')
let todoList = []

addTaskCheckbox.addEventListener('click', getTask)
    function getTask() {
        if(this.checked) {
            const taskText = addTaskInput.value
            if(taskText === '') return
            // todoList.push({input: taskText})
            // localStorage.setItem("todoList": )

            if(themeIcon.classList.contains('lightThemeIcon')) {
                taskList.innerHTML += 
                `<div class="task taskThemeLight">
                <input type="checkbox" class="checkbox">
                <p>${taskText}</p>
                <img src="images/icon-cross.svg" class="delete">
                </div>`
            }else {
                taskList.innerHTML += 
                `<div class="task">
                <input type="checkbox" class="checkbox">
                <p>${taskText}</p>
                <img src="images/icon-cross.svg" class="delete">
                </div>`
            }
            this.checked = true
        }
        addTaskInput.value = ''
    }

function removeInputCheck() {
    const tasks = taskList.children
    tasks.length !== 0 ? addTaskCheckbox.checked = false : ''
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

