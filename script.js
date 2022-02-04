let flag=document.querySelector("#my-form").addEventListener("submit", function(event){
    event.preventDefault();
});
function AppendTasks(){

    let flag=true;
    const task=document.querySelector("#name").value;
    if(task!=""){
        let row=document.querySelector("#tasks-list").insertRow(1);
        row.insertCell(0).innerHTML=task;
        row.insertCell(1).innerHTML="<input type=\"submit\" value=\"Remove\" onclick=\"deleteTasks(this)\" id=\"complete\">";
        document.querySelector("#task-err").textContent="";
    }
    else{
        document.querySelector("#task-err").textContent="Please enter task";
        flag= false;
    }
    return flag;
}
function deleteTasks(elem){
    var row = elem.parentNode.parentNode; 
    row.parentNode.removeChild(row);
}