'use strict';
// const userInput = document.getElementById('searchInput');
const submitBtn = document.getElementById('submitBtn');
const  addItems =  document.getElementById('items');
// const clearBTN = document.getElementsByClassName("close");


submitBtn.addEventListener('click', function(){
     const userInput = document.getElementById("searchInput").value;
    
    if(userInput!==""){
         
    const item =`<li class="clear">${userInput}<span class="close" onmouseover="myfunction()">&times;</span></li>`;
        const position = "beforeend";
        // console.log(userInput);
    addItems.insertAdjacentHTML(position, item);
     // clearing input after adding items
    document.getElementById("searchInput").value ="";
  }
  // else{
  //     alert("You must write something!");
  // }
});

function myfunction(){
 const close= document.getElementsByClassName('close');

 for (let i = 0; i < close.length; i++) {
    close[i].addEventListener('click',function(){
      let li = this.parentElement;
      li.style.display = "none";
    });
  }
}
// add check class ....
function addChecked(){
  let closebtn= document.getElementsByClassName('clear');
 for (let i =0; i<closebtn.length; i++) {
    closebtn[i].addEventListener('mousedown',function(){
      closebtn[i].classList.toggle('checked');
    });   
  }
}

// remove check class----

 //  let closebtn= document.getElementsByClassName('clear');
 // for (let i =0; i<closebtn.length; i++) {
 //    closebtn[i].addEventListener('click',function(){
 //      closebtn[i].classList.remove('checked');
 //    });   
 //  }



// target.classList.toggle('checked');
// const list = document.querySelector('ul');
//  list
