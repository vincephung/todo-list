import {TodoProject} from './TodoProject';
import {displayProject} from './displayProjectDOM';
import {projectList} from './listOfProjects'

//Creates a default project if there is no local storage data saved
const loadDefaultProject = () =>{
    const defaultProject = TodoProject("Default Project",null);

    displayProject(defaultProject);
    const currProj = document.querySelector(`#${defaultProject.getId()}`);
    currProj.classList.add("selected");
    currProj.style.border = `1px solid black`;
    projectList.addProject(defaultProject);
 
}


export{loadDefaultProject};