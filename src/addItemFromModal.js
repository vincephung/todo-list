import{TodoItem} from './TodoItem';

const addItem = (selectedProject) =>{

    const title = document.querySelector("#taskName");
    const description = document.querySelector("#taskDescription");
    const date = document.querySelector("#taskDate");
    const priority = document.querySelector("#taskPriority");
    
    const project = selectedProject;
    let projectId;

    const data = {
        title: title.value,
        description: description.value,
        date: date.value,
        priority: priority.value,
        projectId: project.id     
    }

    let newTask = TodoItem(data);

    //add to local storage
    selectedProject.items.push(newTask);
    localStorage.removeItem(selectedProject.id);
    localStorage.setItem(selectedProject.id,JSON.stringify(selectedProject));

    return newTask;

}

export{addItem};