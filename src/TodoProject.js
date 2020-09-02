//todo project object

const TodoProject = (projectName,taskItems) =>{

    let name = projectName;
    let items;
    let id = name.replace(/\s/g, '-');

    if(taskItems !== null){
        items = [...taskItems];
    }else{
        items = [];
    }

    const getName = () => name;
    const getItems = () => items;
    const getId = () => id;

    const addItem = (item) =>{
        items.push(item);
    }

    return {getName,getItems,getId,addItem,name,items,id}
}


export {TodoProject};