///////////////////partie ajouter//////////////////////////
function AjoutBtn(){
const input = document.getElementById('myInput')
const name = input.value.trim()
const list1 = document.getElementById('list')
const list = document.createElement('li')

if (name === ""){
    alert ('please enter your name!')
    return;
}
      
list.textContent =name
list1.appendChild(list)
input.value = "";
 
}

////////////////////////// partie affichage ///////////////////////////
function AficheNum() {
const list2 = document.querySelectorAll('#list li')
const num = document.getElementById('randomName')

  if(list2.length === 0){
    alert ("The list is empty !!")
    return;
  }
 
 const randomIndex =Math.floor(Math.random()* list2.length)
 const randomList = list2[randomIndex].textContent
 num.textContent= randomList
 document.getElementById('modal').style.display = "block"
 list2[randomIndex].remove();

}

///////////////close modal/////////////////////

function closeModal(){
    document.getElementById('modal').style.display = "none"
}