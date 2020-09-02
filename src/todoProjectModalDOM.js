import{addProject} from './addProjectFromModal';
import{displayProject} from './displayProjectDOM';
import {selectProject} from './selectProject';

const container = document.querySelector(".project-section");

const projectModal = () =>{
    let modal = document.createElement('div');
    let modalContent = document.createElement('div');
    modal.className = "projectModal";
    modalContent.className = "projectModalContent";
    container.appendChild(modal);
    modal.appendChild(modalContent);

    modal.style.display = "block"; // make modal appear on screen

    let modalTitle = document.createElement('h1');
    modalTitle.textContent = "Create a new project";
    modalContent.appendChild(modalTitle);

    let projectName = document.createElement('input');
    projectName.setAttribute("type","text");
    projectName.setAttribute("name","projectName");
    projectName.setAttribute("id","projectName");
    projectName.setAttribute("placeholder","Project Name:");
    modalContent.appendChild(projectName);

    let closeOptions = document.createElement('div');
    closeOptions.className = "closeOptions";
    modalContent.appendChild(closeOptions);

    let submitModal = document.createElement('button');
    let cancelModal = document.createElement('button');
    submitModal.className = "submitModalBTN";
    cancelModal.className = "cancelModalBTN";
    submitModal.setAttribute("type","button");
    cancelModal.setAttribute("type","button");
    submitModal.innerHTML = "Submit";
    cancelModal.innerHTML = "Cancel";
    closeOptions.appendChild(submitModal);
    closeOptions.appendChild(cancelModal)

     let submitButton = document.querySelector('.submitModalBTN');
     submitButton.addEventListener('click',()=>{
         displayProject(addProject());
         selectProject.setUpProjects(); // after you create a project, make it clickable
         modal.style.display = "none"; 
         modal.removeChild(modalContent);
     });

     let closeButton = document.querySelector('.cancelModalBTN');
     closeButton.addEventListener('click',()=>{
         modal.style.display = "none";
         modal.removeChild(modalContent);
     });

        
}


export{projectModal};