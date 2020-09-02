const projectLocalStorage = (() =>{

    const storeData = (project) =>{
        localStorage.setItem(project.getId(),JSON.stringify(project));
       
    }
    
    const deleteProject = (projectId) =>{
        localStorage.removeItem(projectId)
    }

    return{storeData,deleteProject};
})();

export{projectLocalStorage};