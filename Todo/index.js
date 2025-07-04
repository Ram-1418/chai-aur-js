function addTask(){
    const taskInput=document.getElementById("taskInput")
    const taskText=taskInput.value.trim()

    if (taskText==="") {
        alert('please enter a task')
        return
    }
    const taskList=document.getElementById("taskList")

    const li=document.createElement("li")
    li.textContent=taskText

    li.addEventListener("click",()=>{
        li.classList.toggle("completed")
    })

    li.addEventListener("contextmenu",(e)=>{
        e.preventDefault();
        taskList.removeChild(li)
    })

    taskList.appendChild(li)
    taskInput.value=""
}