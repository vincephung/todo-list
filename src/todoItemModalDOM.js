import{addItem} from './addItemFromModal';
import{displayTask} from './displayTaskDOM';

const container = document.querySelector(".task-section");

//creates new modal when create new task is clicked
const taskModal = (selectedProject) =>{
        let modal = document.createElement('div');
        let modalContent = document.createElement('div');
        modal.className = "taskModal";
        modalContent.className = "modalContent";
        container.appendChild(modal);
        modal.appendChild(modalContent);

        modal.style.display = "block"; // make modal appear on screen

        let modalTitle = document.createElement('h1');
        modalTitle.textContent = "Create a new task";
        modalContent.appendChild(modalTitle);

        let form = document.createElement('form');
        form.className = "taskForm";
        modalContent.appendChild(form);

        let taskName = document.createElement('input');
        taskName.setAttribute("type","text");
        taskName.setAttribute("name","taskName");
        taskName.setAttribute("id","taskName");
        taskName.setAttribute("placeholder","Task Name:");
        taskName.className = "formItem";
        form.appendChild(taskName);

        let taskDescription = document.createElement('textarea');
        taskDescription.setAttribute("type","text");
        taskDescription.setAttribute("name","taskDescription ");
        taskDescription.setAttribute("id","taskDescription");
        taskDescription.setAttribute("placeholder","Task Description:");
        taskDescription.className = "formItem";
        form.appendChild(taskDescription);

        let taskDate = document.createElement('input');
        taskDate.setAttribute("type","date");
        taskDate.setAttribute("name","taskDate");
        taskDate.setAttribute("id","taskDate");
        taskDate.setAttribute("placeholder","Task Date:");
        taskDate.setAttribute("value","yyyy-dd-mm");
        taskDate.className = "formItem";
        form.appendChild(taskDate);

        let taskPriority = document.createElement('select');
        taskPriority.setAttribute("name","taskPriority");
        taskPriority.setAttribute("id","taskPriority");
        taskPriority.className = "formItem";
        form.appendChild(taskPriority);

        let lowPriority = document.createElement('option');
        let mediumPriority = document.createElement('option');
        let highPriority = document.createElement('option');
        let topPriority = document.createElement('option');
        lowPriority.innerHTML = "Low";
        mediumPriority.innerHTML = "Medium";
        highPriority.innerHTML = "High";
        topPriority.innerHTML = "Top";
        taskPriority.appendChild(lowPriority);
        taskPriority.appendChild(mediumPriority);
        taskPriority.appendChild(highPriority);
        taskPriority.appendChild(topPriority);

        let closeOptions = document.createElement('div');
        closeOptions.className = "closeOptions";
        form.appendChild(closeOptions);

        let submitModal = document.createElement('button');
        let cancelModal = document.createElement('button');
        submitModal.className = "submitModalBTN";
        cancelModal.className = "cancelModalBTN";
        submitModal.setAttribute("type","button");
        cancelModal.setAttribute("type","button");
        submitModal.innerHTML = "Submit";
        cancelModal.innerHTML = "Cancel";
        closeOptions.appendChild(submitModal);
        closeOptions.appendChild(cancelModal);

        let submitButton = document.querySelector('.submitModalBTN');
        submitButton.addEventListener('click',()=>{
            displayTask(addItem(selectedProject));
            modal.style.display = "none"; 
            modal.removeChild(modalContent);
        });

        let closeButton = document.querySelector('.cancelModalBTN');
        closeButton.addEventListener('click',()=>{
            modal.style.display = "none";
            modal.removeChild(modalContent);
        });

}

export{taskModal};