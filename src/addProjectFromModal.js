import{TodoProject} from './TodoProject';
import{projectList} from './listOfProjects';
import{projectLocalStorage} from './projectLocalStorage';

const addProject = () =>{

    const title = document.querySelector("#projectName");
    let newProject = TodoProject(title.value,null);
    projectList.addProject(newProject);
    projectLocalStorage.storeData(newProject);
    
    return newProject;

}

export{addProject};