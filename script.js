var isEmpty = true;

function addTask(){
    const taskContainer = document.getElementById("listContainer");
    let task = document.createElement("div");
    let name = document.getElementById("taskName").value;
    name = name.trim();
    if(name == "")
    {
        alert("Cannot add empty task");
    }
    else
    {
        console.log(taskContainer.innerHTML);
        if(isEmpty)
        {
            taskContainer.innerHTML = "";
            isEmpty = false;
        }
        task.className = "task";
        task.innerHTML = "<h4> " + name + "</h4><input type=checkbox onchange=removeTask(this)>";
        taskContainer.append(task);
    }
}

function removeTask(element)
{
    let parent = element.parentNode;
    setTimeout(() => {
        parent.remove();
    }, 1000);
    parent.style.opacity = 0;
}