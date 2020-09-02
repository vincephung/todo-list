//contains all projects
const projectList = (() =>{
    let list = [];

    const addProject = (newProject) =>{
        list.push(newProject);
    };

    const getList = () => list;

    const getProject = (projectId) =>{
        let returnProject;

        list.forEach(proj =>{
            if(proj.id === projectId){    
                returnProject = proj;
            }
        });
        return returnProject;
    };

    const deleteProject = () =>{

    }

    return{addProject,getList,getProject,deleteProject};

})();

export{projectList};