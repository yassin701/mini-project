///////////////////partie ajouter//////////////////////////
function AjoutBtn(){
 const input = document.getElementById('myInput')
  const name = input.value.trim()
 const list1 = document.getElementById('list')
 const list = document.createElement('li')

  if(name === ""){
    alert ("please entre your name !")
    return;
  }
   
   list.textContent = name
   list1.appendChild(list)
   input.value = "";
}


////////////////////////// partie affichage ///////////////////////////
function AficheNum() {
    const list2 = document.querySelectorAll('#list li') 
    const num = document.getElementById('randomName')

    if(list2.length === 0){
        alert('The list is empty!!')
        return;
    }

    const randomIndex = Math.floor(Math.random()* list2.length)
    const randomName = list2[randomIndex].textContent

    num.textContent = randomName
    document.getElementById('modal').style.display = "block"
}

///////////////close modal/////////////////////

function closeModal(){
    document.getElementById('modal').style.display = "none"
}