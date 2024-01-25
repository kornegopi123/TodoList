let totalTasks = 0;
//Adding item to the new list/existing list 
function addItem() {
    const input = document.getElementById('input');
    const list = document.getElementById('list');
    if (input.value.trim() !== '') 
    {
        //For every list item we need to increase totaltasks count by 1
        totalTasks++;       
        const listItem = document.createElement('li');
        listItem.innerHTML = `<input type="checkbox" onchange="toggleCheckBox(this)"> <span> ${input.value} </span> <button onclick="deleteTodoItem(this)" id="delete">Delete</button>`;
        list.appendChild(listItem);
        updateTotalValue();
        input.value = '';
    }
}
//Function for delete item from the list
function deleteTodoItem(button) {
    const listItem2 = button.parentNode;
    listItem2.parentNode.removeChild(listItem2);
    totalTasks--;
    updateTotalValue();
}

//changing checkboc value from select to deselect or vice-versa
function toggleCheckBox(checkbox) {
    const check = checkbox.nextElementSibling;
    check.classList.toggle('checked');
}

//updating value for totaltasks into document.innertext like console.log method in console
function updateTotalValue() {
    document.getElementById('totalTasks').innerText = totalTasks;
}
