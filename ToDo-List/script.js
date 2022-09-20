let oldTasks = undefined
let newTask = undefined
let newTasks = undefined
let taskCount = 0
let taskNumberToRemove
document.querySelector("#addToList").addEventListener("click", () => {
    if (((document.querySelector("#topic").value) === '') || ((document.querySelector("#description").value) === '')) {
        window.alert("Please Enter a TOPIC and Description for it.\nBoth Sections are important")
    }
    else {
        taskCount++
        oldTasks = document.querySelector("body > div > div.toDoList > table > tbody").innerHTML
        newTask = `\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class="topicBox bl0">${taskCount}.</td>\n\t\t\t\t\t\t<td class="topicBox">${document.querySelector("#topic").value}</td>\n\t\t\t\t\t\t<td class="descriptionBox br0">${document.querySelector("#description").value}</td>\n\t\t\t\t\t</tr>`
        document.querySelector("body > div > div.toDoList > table > tbody").innerHTML = oldTasks + newTask
    }
})
document.getElementById("removeAllTasks").addEventListener("click", () => {
    document.querySelector("body > div > div.toDoList > table > tbody").innerHTML = ''
    taskCount = 0
})
