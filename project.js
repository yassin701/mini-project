function AjoutBtn(){
    const list1= document.getElementById('myInput').value
    const list =document.getElementById('list')
    const AddList = document.createElement('li')
    list.appendChild(AddList)
    AddList.innerHTML= list1
 
}

function AficheNum(){
    let listElm = document.querySelectorAll("#list li");
 
    let randomIndex = Math.floor(Math.random() * listElm.length);
    let randomName = listElm[randomIndex].textContent;
     

    document.getElementById('randomName').textContent = randomName;
    document.getElementById('modal').style.display = "block";
}


function closeModal(){
    document.getElementById('modal').style.display = "none"

}