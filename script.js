let addBtn = document.querySelector('.addToBtn');
let inputFields = document.querySelector('.inputField');
let demovalue;
let select = document.querySelector('#myselection');
let hideIt = document.querySelector('.hide');
clearLists();       //hide all lists

// OBJECT that stores each todo item to each item list
let mainList = {Grocery: [],
                Chores: [],
                School: [],
                Pets: [],
                Work: []
    }

select.addEventListener('change', function(e){
    demovalue = e.currentTarget.value;  //Grocery -> val = Grocery
    document.querySelector('#title-list').innerText = demovalue;
    clearLists();
    let toDoContainerName = "toDoContainer" + demovalue;
    let selectedList = document.querySelector("#" + toDoContainerName);
    selectedList.style.display = "block";
    hideIt.style.display = "block";
});

function clearLists(){
    let toDoListAll = document.querySelectorAll('.toDoList');
    hideIt.style.display = "none";
    for(eachToDoList of toDoListAll){
        eachToDoList.style.display = "none";
    }
};


// mainList.groceryList.push(newitem)

addBtn.addEventListener('click', function(){
    demovalue = select.value;
    console.log(demovalue);
    let toDoContainer = document.querySelector('#toDoContainer'+demovalue);
    let newItem = document.createElement('p');
    newItem.classList.add('paragraph-styling');
    newItem.innerText = inputFields.value;      //item we are adding ex: item1
    mainList[demovalue].push(newItem.innerText)
    console.log(mainList);
    toDoContainer.appendChild(newItem);
    inputFields.value = "";

    // DELETE ITEMS FROM LIST
    newItem.addEventListener('click', function(){
        let itemIndex = mainList[demovalue].indexOf(newItem.value);
        newItem.style.textDecoration = "line-through";
        mainList[demovalue].splice(itemIndex, 1);
        console.log(mainList[demovalue]);
        console.log("After deleting: " + mainList[demovalue]);

        setTimeout(() => {
            toDoContainer.removeChild(newItem);
        }, 1000);

    });
});

// CYCLE THROUGH ICONS
select.addEventListener('change', function(e){
  demovalue = e.currentTarget.value;
      let icon = document.getElementById("icon");
      if (demovalue == 'Grocery') {
          icon.setAttribute("class", "fa-solid fa-cart-shopping");
        } else if (demovalue == 'Chores') {
          icon.setAttribute("class", "fa-solid fa-spray-can-sparkles");
        } else if (demovalue == 'School') {
          icon.setAttribute("class", "fa-solid fa-graduation-cap");
        } else if (demovalue == 'Pets') {
          icon.setAttribute("class", "fa-solid fa-cat");
       } else if (demovalue == 'Work') {
          icon.setAttribute("class", "fa-solid fa-briefcase");
        }else {
          icon.removeAttribute("class");
      }

});
 
