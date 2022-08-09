let addBtn = document.querySelector('.addToBtn');
let inputField = document.querySelector('.inputField');
var demovalue;


$(document).ready(function(){
    $('#myselection').on('change', function(){
        demovalue = $(this).val();  //Grocery
        $("div.myDiv").hide();
        $("#show"+demovalue).show(); 
    });
});


addBtn.addEventListener('click', function(){
    let toDoContainer = document.querySelector('#toDoContainer'+demovalue);
    let newItem = document.createElement('p');
    newItem.classList.add('paragraph-styling');
    //Take text value from inputField
    newItem.innerText = inputField.value;
    //Add the newItem to the container list
    toDoContainer.appendChild(newItem);
    //Remove item that was in the input field
    inputField.value = "";

    //Detect when item is clicked
    newItem.addEventListener('click', function(){
        newItem.style.textDecoration = "line-through";
        setTimeout(() => {
            toDoContainer.removeChild(newItem);
        }, 1000);
    });

})
