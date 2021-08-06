'use strict';
const submitBtn = document.getElementById('submitBtn');
const  addItems =  document.getElementById('items');
const myModal = document.getElementById("myModal");
const modal = document.querySelector(".modal");
const close= document.getElementsByClassName('close');
const closebtn= document.getElementsByClassName('clear');
const userInput = document.querySelector("#searchInput");

class WorkList{
   #allIems =[];
   
   constructor(){
    this._getLocalStorage();
    submitBtn.addEventListener('click',this._getUserInput.bind(this));
    myModal.addEventListener('click', this._removeError);
    addItems.addEventListener('click',this._addChecked.bind(this));
  }
  _getUserInput(){

    let id= (Date.now() + '').slice(-10);
    let userItem = userInput.value;
    // console.log(userItem);
    if(userItem!==''){
         let data={id ,userItem};
         this.#allIems.push(data);
         this._showItem(data);
         this._setLocalStorage(data);
      }else{
        this._showError();
    }
       userInput.value = "";
  }
  _showItem(data){ 
    console.log(data);
       const item =`<li class="clear item" style="margin-bottom: 10px;">${data.userItem}<span class="close" id="${data.id}">&times;</span></li>`;
        const position = "beforeend";
        addItems.insertAdjacentHTML(position,item);
  }
  _showError(){
    modal.style.display="block";
  }
  _removeError(){
    modal.style.display="none";
  }
  _addChecked(e){

    // marking item as checked or done
    const removeItem = e.target.closest(".item");
    removeItem.classList.toggle('checked');

    // removing item from list
      const removeBtn = e.target.classList.contains("close");
      if(!removeBtn) return;
      removeItem.style.display ="none";
      localStorage.removeItem('items');
  }
  _setLocalStorage(){
     localStorage.setItem("items", JSON.stringify(this.#allIems));
  }
  _getLocalStorage(){
   const getItem =  JSON.parse(localStorage.getItem("items"));
     if(!getItem)return;
    this.#allIems = getItem;
    this.#allIems.forEach(item => {
      this._showItem(item);
    });
  }


}

const work = new WorkList();
