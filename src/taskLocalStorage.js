const taskLocalStorage = (() =>{

    const storeData = (task) =>{
        localStorage.setItem(task.getTitle(),JSON.stringify(task));
    }
    
    const deleteTask = (taskName) =>{
        localStorage.removeItem(taskName)
    }

    return{storeData,deleteTask};
})();

export{taskLocalStorage};