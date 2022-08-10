let addBtn = document.querySelector('.addToBtn');
// let addBtn = document.querySelectorAll('.addToBtn2');
let inputFields = document.querySelector('.inputField');
var demovalue;
let select = document.querySelector('#myselection');
clearLists();       //hide all lists

let mainList = {Grocery: [],
                Chores: [],
                School: [],
                Pets: [],
                Work: []
    }

select.addEventListener('change', function(e){
    demovalue = e.currentTarget.value;  //Grocery -> val = Grocery
    document.querySelector('#title-list').innerText = demovalue;
    console.log(demovalue);
    clearLists();
    let toDoContainerName = "toDoContainer" + demovalue;
    console.log(toDoContainerName);
    let selectedList = document.querySelector("#" + toDoContainerName);
    selectedList.style.display = "block";
});

function clearLists(){
    let toDoListAll = document.querySelectorAll('.toDoList');
    for(eachToDoList of toDoListAll){
        eachToDoList.style.display = "none";
    }
}

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
      if (demovalue == 'Grocery') {
          let icon = document.getElementById("icon");
          icon.setAttribute("class", "fa-solid fa-cart-shopping");
        } else if (demovalue == 'Chores') {
          let icon = document.getElementById("icon");
          icon.setAttribute("class", "fa-solid fa-spray-can-sparkles");
        } else if (demovalue == 'School') {
          let icon = document.getElementById("icon");
          icon.setAttribute("class", "fa-solid fa-graduation-cap");
        } else if (demovalue == 'Pets') {
          let icon = document.getElementById("icon");
          icon.setAttribute("class", "fa-solid fa-cat");
       } else if (demovalue == 'Work') {
          let icon = document.getElementById("icon");
          icon.setAttribute("class", "fa-solid fa-briefcase");
        }else {
          icon.removeAttribute("class");
      }
    
      });