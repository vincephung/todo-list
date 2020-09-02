
const displayTask = (newTask) =>{
    const taskContainer = document.querySelector('.task-list');

    let newTaskDiv = document.createElement('div');
    newTaskDiv.classList.add("taskDiv");
    newTaskDiv.classList.add(`${newTask.projectId}-task`); 
    taskContainer.appendChild(newTaskDiv);

    let taskTitle = document.createElement('p');
    let taskDate = document.createElement('p');
    let taskDescription = document.createElement('p');
    let taskPriority = document.createElement('p');

    let deleteTask = document.createElement('button');
    deleteTask.innerHTML = "X";
    deleteTask.className = "deleteTaskBtn";

    taskTitle.textContent = `Task: ${newTask.title}`;          
    taskDate.textContent = `Due Date : ${newTask.date}`;
    taskDescription.textContent = `Description : ${newTask.description}`;
    taskPriority.textContent = `Priority : ${newTask.priority}`;

    newTaskDiv.appendChild(taskTitle);
    newTaskDiv.appendChild(taskDate);
    newTaskDiv.appendChild(taskDescription);
    newTaskDiv.appendChild(taskPriority);
    newTaskDiv.appendChild(deleteTask);

    //when delete task button clicked , remove item from project items and update local storage.
    deleteTask.addEventListener('click',e =>{
        let project = JSON.parse(localStorage.getItem(newTask.projectId));
        console.log(project);
        for(let i = 0; i < project.items.length; i++){
            if(newTask.title === project.items[i].title){
                project.items.splice(i,1);
                localStorage.removeItem(project.id);
                localStorage.setItem(project.id,JSON.stringify(project));

                taskContainer.removeChild(newTaskDiv);
            }
        }
        
    });
}

export{displayTask};