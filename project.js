function AjoutBtn(){
    const list1= document.getElementById('myInput').value
    const list =document.getElementById('list')
    const AddList = document.createElement('li')
    list.appendChild(AddList)
    AddList.innerHTML= list1

 
}