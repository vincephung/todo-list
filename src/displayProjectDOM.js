
const displayProject = (newProject) =>{
    const projectContainer = document.querySelector('.project-list');

    let newProjectDiv = document.createElement('div');
    newProjectDiv.classList.add("projectDiv");
    projectContainer.appendChild(newProjectDiv);

    let deleteProjectBtn = document.createElement('button');
    deleteProjectBtn.innerHTML = "X";
    deleteProjectBtn.className = "deleteProjectBtn";

    newProjectDiv.id = `${newProject.id}`;   // JSON does not store functions so can't use .get function
    newProjectDiv.classList.add("not-selected");
    newProjectDiv.textContent = `${newProject.name}`;

    newProjectDiv.appendChild(deleteProjectBtn);

    deleteProjectBtn.addEventListener('click',e =>{
        let project = JSON.parse(localStorage.getItem(newProject.id));
        localStorage.removeItem(project.id);
        projectContainer.removeChild(newProjectDiv);
        
    });

}

export{displayProject};