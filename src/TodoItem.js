
const TodoItem = (data) =>{
    let title = data.title;
    let description = data.description;
    let date = data.date;
    let priority = data.priority;
    let projectId = data.projectId;
    

    const getTitle = () => title;
    const getDescription = () => description;
    const getDate = () => date;
    const getPriority = () => priority;
    const getProjectId = () => projectId;


    return {title,description,date,priority,projectId,getTitle,getDescription,getDate,getPriority,getProjectId};
}

export {TodoItem};