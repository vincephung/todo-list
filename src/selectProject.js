import {projectList} from './listOfProjects'

const selectProject = (() =>{
    const allProjects = document.querySelector(".project-list");
    const projectChildren = allProjects.childNodes;

    const setUpProjects = () => {
        projectChildren.forEach(project =>{
            project.addEventListener('click',e =>{
                deselect();
                e.target.style.border = `1px solid black`;
                e.target.classList.add("selected");
                removeOtherTasks();
                showProjectTasks();
            });
        });
    }

    const deselect = () =>{
        projectChildren.forEach(project =>{
            project.style.border = "";
            project.classList.remove("selected");
            project.classList.contains("not-selected");
        });
    }

    const checkSelected = () =>{
        let value = false;
        projectChildren.forEach(project =>{
            if(project.classList.contains("selected")) { 
                value = true;
            }
        });
            return value;
    }

    const getSelected = () =>{
        let currentProject = "";
        projectChildren.forEach(project =>{
            if(project.classList.contains("selected")) { 
                currentProject = projectList.getProject(project.id);
                
            }
        });
            return currentProject;
    }

    const removeOtherTasks = () =>{
        const taskList = document.querySelector(".task-list");
        let taskChildren = taskList.childNodes;
        let currentProject = getSelected();

        taskChildren.forEach(task => {
            if(!task.classList.contains(currentProject.id)){ 
                //REMOVE tasks with the project that is selected 
                task.style.display = "none";
            };
        });
    };

    //when user clicks project show only the tasks for that individual project
    const showProjectTasks = () =>{
        const taskList = document.querySelector(".task-list");
        let taskChildren = taskList.childNodes;
        let currentProject = getSelected();

        taskChildren.forEach(task => {
            if(task.classList.contains(`${currentProject.id}-task`)){  
                task.style.display = "block";
            };
        });
    }

    return{setUpProjects,removeOtherTasks,checkSelected,getSelected};

})();


export{selectProject};