'use strict';
// const userInput = document.getElementById('searchInput');
const submitBtn = document.getElementById('submitBtn');
const  addItems =  document.getElementById('items');
// const clearBTN = document.getElementsByClassName("close");
const myModal = document.getElementById("myModal");
const modal = document.querySelector(".modal");
const closeModel = document.querySelector(".close-model");

// if user button enter with empty value

submitBtn.addEventListener('click',function(){
  const userInput = document.getElementById("searchInput").value;
   if(userInput !==""){
         // add user work list -----
        const item =`<li class="clear">${userInput}<span class="close" onmouseover="myfunction()">&times;</span></li>`;
        const position = "beforeend";
       addItems.insertAdjacentHTML(position, item);
        
     // clearing input after adding items
       document.getElementById("searchInput").value ="";
    } else{
         modal.style.display="block";
        }

});


// hide Model box
const hideModel = function(){
   modal.style.display ="none";
}
myModal.addEventListener('click', hideModel);
closeModel.addEventListener('click',hideModel);

// how to remove list once it done----
function myfunction(){
 const close= document.getElementsByClassName('close');

 for (let i = 0; i < close.length; i++) {
    close[i].addEventListener('click',function(){
      let li = this.parentElement;
      li.style.display = "none";
      
    });
  }
}

// add checked class once work done of user ....
function addChecked(){
  let closebtn= document.getElementsByClassName('clear');
 for (let i =0; i<closebtn.length; i++) {
    closebtn[i].addEventListener('mousedown',function(){
      closebtn[i].classList.toggle('checked');
    });   
  }
}
