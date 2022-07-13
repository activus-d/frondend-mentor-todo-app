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


let todoList = [] //to store tasks which would later be stored as a value in the localStorage
localStorage.getItem('todoList') !== null ? todoList.push(...(JSON.parse(localStorage.getItem('todoList')))) : '' // needed so as to stop todoList from becoming an empty array upon reload of the pade if local storage is not empty


window.addEventListener('DOMContentLoaded', addSavedUserTasks)
    function addSavedUserTasks(e) {
        if(localStorage.savedTheme === 'sun') { //use saved user theme settings upon window load
            const body = document.querySelector('body')
            const header = document.querySelector('header')
            const themeIcon = document.querySelector('.themeIcon')
            const addTaskInnerCon = document.querySelector('.addTaskInnerCon')
            const taskInput = document.querySelector('.addTaskInput')
            const tasks = document.querySelectorAll('.task')
            const faPen = document.querySelectorAll('.fa-pen-to-square')
            const editInput = document.querySelectorAll('.editInput')
            const editCon = document.querySelectorAll('.editCon')
            const dashboard = document.querySelector('.dashboard')
            const categories = document.querySelector('.categories')
            const taskLeft = document.querySelector('.taskLeft')
            const clear = document.querySelector('.clear')
            const instruction = document.querySelector('.instruction')

            themeIcon.classList.add('lightThemeIcon')
            body.classList.add('bodyThemeLight')
            header.classList.add('headerThemeLight')
            addTaskInnerCon.classList.add('addTaskInnerConTheme')
            taskInput.classList.add('addTaskInputTheme')
            tasks.forEach(task => task.classList.add('taskThemeLight'))
            faPen.forEach(pen => pen.classList.add('fa-pen-to-squareLight'))
            editInput.forEach(input => input.classList.add('editInputThemeLght'))
            editCon.forEach(con => con.classList.add('editConThemLight'))
            dashboard.classList.add('dashboardThemeLight')
            categories.classList.add('categoriesThemeLight')
            taskLeft.classList.add('taskLeftThemeLight')
            clear.classList.add('clearThemeLight')
            instruction.classList.add('instructionTheme')     
        }
        const savedUserTasks = JSON.parse(localStorage.getItem('todoList')) //since tdolist was saved in local storage as a string, convert it back to an array of objs with the JSON.parse method
        // console.log(savedUserTasks)
        savedUserTasks.forEach(savedTask => {
            if(themeIcon.classList.contains('lightThemeIcon')) {
                taskList.innerHTML += 
                `<div class="task taskThemeLight">
                    <input type="checkbox" class="checkbox">
                    <p>${savedTask.input}</p>
                    <i class="fa-solid fa-pen-to-square"></i>
                    <img src="images/icon-cross.svg" class="delete">
                    <div class="editCon">
                        <input type="text" class="editInput" placeholder="edit your task...">
                        <i class="fa-solid fa-check"></i>
                    </div>
            </div>`
            }else {
                taskList.innerHTML += 
                `<div class="task">
                    <input type="checkbox" class="checkbox">
                    <p>${savedTask.input}</p>
                    <i class="fa-solid fa-pen-to-square"></i>
                    <img src="images/icon-cross.svg" class="delete">
                    <div class="editCon">
                        <input type="text" class="editInput" placeholder="edit your task...">
                        <i class="fa-solid fa-check"></i>
                    </div>
                </div>`
            }
        })
    }

const themeIcon = document.querySelector('.themeIcon')
themeIcon.addEventListener('click', changeTheme) 
    function changeTheme(e) {
        const body = document.querySelector('body')
        const header = document.querySelector('header')
        const themeIcon = document.querySelector('.themeIcon')
        const addTaskInnerCon = document.querySelector('.addTaskInnerCon')
        const taskInput = document.querySelector('.addTaskInput')
        const tasks = document.querySelectorAll('.task')
        const faPen = document.querySelectorAll('.fa-pen-to-square')
        const editInput = document.querySelectorAll('.editInput')
        const editCon = document.querySelectorAll('.editCon')
        const dashboard = document.querySelector('.dashboard')
        const categories = document.querySelector('.categories')
        const taskLeft = document.querySelector('.taskLeft')
        const clear = document.querySelector('.clear')
        const instruction = document.querySelector('.instruction')

        themeIcon.classList.toggle('lightThemeIcon')
        if(themeIcon.classList.contains('lightThemeIcon')) {
            body.classList.add('bodyThemeLight')
            header.classList.add('headerThemeLight')
            addTaskInnerCon.classList.add('addTaskInnerConTheme')
            taskInput.classList.add('addTaskInputTheme')
            tasks.forEach(task => task.classList.add('taskThemeLight'))
            faPen.forEach(pen => pen.classList.add('fa-pen-to-squareLight'))
            editInput.forEach(input => input.classList.add('editInputThemeLght'))
            editCon.forEach(con => con.classList.add('editConThemLight'))
            dashboard.classList.add('dashboardThemeLight')
            categories.classList.add('categoriesThemeLight')
            taskLeft.classList.add('taskLeftThemeLight')
            clear.classList.add('clearThemeLight')
            instruction.classList.add('instructionTheme')
            localStorage.setItem("savedTheme", "sun")
        }
        if(!themeIcon.classList.contains('lightThemeIcon') || localStorage.savedTheme === "moon")  {
            body.classList.remove('bodyThemeLight')
            header.classList.remove('headerThemeLight')
            addTaskInnerCon.classList.remove('addTaskInnerConTheme')
            taskInput.classList.remove('addTaskInputTheme')
            tasks.forEach(task => task.classList.remove('taskThemeLight'))
            dashboard.classList.remove('dashboardThemeLight')
            categories.classList.remove('categoriesThemeLight')
            taskLeft.classList.remove('taskLeftThemeLight')
            clear.classList.remove('clearThemeLight')
            instruction.classList.remove('instructionTheme')
            localStorage.setItem("savedTheme", "moon")
        }
    }


const addTaskCheckbox = document.querySelector('#addTaskCheckbox')
const addTaskInput = document.querySelector('.addTaskInput')
const taskList = document.querySelector('.taskList')

addTaskCheckbox.addEventListener('click', getTask)
    function getTask() {
        if(this.checked) {
            const taskText = addTaskInput.value
            if(taskText === '') return
            if(themeIcon.classList.contains('lightThemeIcon')) {
                taskList.innerHTML += 
                `<div class="task taskThemeLight">
                    <input type="checkbox" class="checkbox">
                    <p>${taskText}</p>
                    <i class="fa-solid fa-pen-to-square"></i>
                    <img src="images/icon-cross.svg" class="delete">
                    <div class="editCon">
                        <input type="text" class="editInput" placeholder="edit your task...">
                        <i class="fa-solid fa-check"></i>
                    </div>
                </div>`
                todoList.push({input: taskText}) //object created with input property key as key and inputed value as property value
                localStorage.setItem("todoList", JSON.stringify(todoList)) //local storage only accepts strings for keys and values thus converts array of objects(todoList) to string wit the JSON.stringify method
            }else {
                taskList.innerHTML += 
                `<div class="task">
                    <input type="checkbox" class="checkbox">
                    <p>${taskText}</p>
                    <i class="fa-solid fa-pen-to-square"></i>
                    <img src="images/icon-cross.svg" class="delete">
                    <div class="editCon">
                        <input type="text" class="editInput" placeholder="edit your task...">
                        <i class="fa-solid fa-check"></i>
                    </div>
                </div>`
                todoList.push({input: taskText}) //object created with input property key as key and inputed value as property value
                localStorage.setItem("todoList", JSON.stringify(todoList)) //local storage only accepts strings for keys and values thus converts array of objects(todoList) to string wit the JSON.stringify method
            }
            this.checked = true
        }
        addTaskInput.value = ''
    }


taskList.addEventListener('click', editTask)
    function editTask(e) {
        const editIcon = document.querySelectorAll('.fa-pen-to-square')
        editIcon.forEach(icon => {
            if(e.target !== icon) return
            const task = e.target.parentNode
            task.classList.toggle('edit')   
            const editInput = task.querySelector('.editInput')
            const editCon = task.querySelector('.editCon')
            editCon.classList.toggle('editConThemLight')
            editInput.classList.toggle('editInputThemeLght')
            console.log(editCon)   
        })
    }

taskList.addEventListener('click', submitEdit)
    function submitEdit(e) {
        const checkIcons = document.querySelectorAll('.fa-check')
        checkIcons.forEach(icon => {
            if(e.target !== icon) return
            const editParentCon = icon.parentNode
            const taskElement = editParentCon.parentNode
            const editInputText = (editParentCon.querySelector('input')).value
            if(editInputText === null || editInputText === '') {
                taskElement.classList.remove('edit')
                return
            }
            let taskContent = (taskElement.querySelector('p')).innerHTML
            const savedUserTasks = JSON.parse(localStorage.getItem('todoList')) //since todolist was saved in local storage as a string, convert it back to an array of objs with the JSON.parse method
            indexOfSavedtask = savedUserTasks.forEach((task, index, array) => {
                if(task.input === taskContent) {
                    task.input = editInputText
                    // console.log(editInputText)
                    localStorage.setItem("todoList", JSON.stringify(array));
                    (taskElement.querySelector('p')).innerHTML = editInputText
                }
            })
            taskElement.classList.remove('edit')
        })
    }

function removeInputCheck() {
    addTaskCheckbox.checked = false
}
setInterval(removeInputCheck, 500)

window.addEventListener('click', deleteTasks)
    function deleteTasks(e) {
        const deleteIcons = document.querySelectorAll('.delete')
        deleteIcons.forEach(icon => {
            if(e.target !== icon) return
            const task = e.target.parentNode
            const taskContent = (task.querySelector('p')).textContent
            const savedUserTasks = JSON.parse(localStorage.getItem("todoList"))
            savedUserTasks.forEach((savedTask, index, arr) => { //needed so as delete data of the task to be removed from tasklist from local storage
                if(taskContent === savedTask.input) {
                    arr.splice(index, 1) 
                    localStorage.setItem("todoList", JSON.stringify(arr))
                }
            })
            console.log(savedUserTasks)
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


//delete from localStorage
    //get the test content of the task to be deleted
    //get the stored item in the local storage and convert to its original form
    //find the item that contains the text and select it
    //remove the item from the collection
    //return the modified object back to the localStorage. Do not forget to convert to string before returning
const clearCompletedBtn = document.querySelector('.clearCompleted')
clearCompletedBtn.addEventListener('click', clearCompletedTasks)
    function clearCompletedTasks() {
        const completedTasks = document.querySelectorAll('.complete')
        console.log(completedTasks)
        completedTasks.forEach(task => {
            const taskContent = (task.querySelector('p')).textContent
            console.log(taskContent)
            const savedUserTasks = JSON.parse(localStorage.getItem("todoList"))
            savedUserTasks.forEach((savedTask, index, arr) => { //needed to removed all cleared task from local storage
                if(taskContent === savedTask.input) {
                    arr.splice(index, 1)
                    localStorage.setItem("todoList", JSON.stringify(arr))
                }
            })
            task.remove()
        })
    }
