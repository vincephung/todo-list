import {taskModal} from './todoItemModalDOM';
import {projectModal} from './todoProjectModalDOM';
import {loadDefaultProject} from './defaultProject';
import {selectProject} from './selectProject';
import {displayProject} from './displayProjectDOM';
import {displayTask} from './displayTaskDOM';
import {projectList} from './listOfProjects'

const taskbutton = document.querySelector(".create-task");
const projectbutton = document.querySelector(".create-project");

//initially load all projects / tasks from local storage
if(localStorage.length !== 0){
    let storage = localStorage;
    for(let key in storage){
        if(storage.hasOwnProperty(key)){ //if item has been set in local storage
            let storageObject = JSON.parse(storage.getItem(key));
            console.log(storageObject);
            if(storageObject.hasOwnProperty('id')){ //if this object has an ID, it is a project
                displayProject(storageObject);
                projectList.addProject(storageObject);

                //initially load all tasks, but hide them all                
                let numberOfTasks = storageObject.items.length;
                for(let i = 0; i < numberOfTasks;i++){
                    displayTask(storageObject.items[i]);
                }
                selectProject.removeOtherTasks();
            }   
        }
    }
}else{
    loadDefaultProject();
}

selectProject.setUpProjects();

taskbutton.addEventListener('click',() =>{
    if(selectProject.checkSelected()){   
        taskModal(selectProject.getSelected());   
    }
});

projectbutton.addEventListener('click',projectModal);




