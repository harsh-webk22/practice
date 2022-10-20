let plusBtn = document.querySelector(".plus");
let modal = document.querySelector(".modal-cont");
let mainBox = document.querySelector(".main-box")  
let textarea = document.querySelector(".textarea");
let priorityColors = document.querySelectorAll(".priority-color");
let priorityColorsBox = document.querySelectorAll(".priority-color-box");
let selectedColor = "color4";
let lockClass = "fa-lock";
let unlockClass = "fa-lock-open";
let colors = ["color1","color2","color3","color4", ];
let ticketsArr = [];
console.log(priorityColors)

priorityColors.forEach((colorElem, idx)=>{
    colorElem.addEventListener("click", (e)=>{
        priorityColors.forEach((arr, idx)=>{
            arr.classList.remove("border");
        });
        colorElem.classList.add("border");
        selectedColor = colorElem.classList[1];
    })
})

plusBtn.addEventListener('click', (e)=>{    
    modal.style.display = "flex";
})


modal.addEventListener("keydown", (e)=>{
    let key = e.key;
    if(key=="Shift"){
        createTicket(textarea.value, selectedColor, "#Tfk0182");
        modal.style.display="none";
        textarea.value = "";
    }
})

function createTicket(task, color, id){
    let ticketCont = document.createElement('div');
    ticketCont.innerHTML = `<div class="ticket-cont">
    <div class="ticket-color ${color}"></div>
    <div class="ticket-id"> ${id}</div>
    <div class="taskarea">
        ${task}
    </div>
    <div class="icon">
    <i class="fa-solid fa-lock"></i>
    </div>
    </div>`

    mainBox.appendChild(ticketCont);
    handleTicket(ticketCont);
    handleColor(ticketCont);
    if(id) ticketsArr.push({task, color, id});
}

function handleColor(ticket){
    let colorDiv = ticket.querySelector(".ticket-color");
    colorDiv.addEventListener("click", (e)=>{
        let currentColor = colorDiv.classList[1];
        let currentColoridx = colors.findIndex((elem)=>{
            return currentColor === elem;
        });
        currentColoridx++;
        let newColorIdx = currentColoridx%colors.length;
        let newColor = colors[newColorIdx];
        colorDiv.classList.remove(currentColor);
        colorDiv.classList.add(newColor)
    })
}

function handleTicket(ticket){
    let ticketLockCont = ticket.querySelector(".icon");
    let taskCont  = ticket.querySelector(".taskarea");
    let ticketLock = ticketLockCont.children[0];

    ticketLock.addEventListener("click", (e)=>{
        if(ticketLock.classList.contains(lockClass)){
            ticketLock.classList.remove(lockClass);
            ticketLock.classList.add(unlockClass);
            taskCont.setAttribute("contenteditable", "true");
        } else{
            ticketLock.classList.remove(unlockClass);
            ticketLock.classList.add(lockClass);
            taskCont.setAttribute("contenteditable", "false");
        }
    })

}

priorityColorsBox.forEach((elem)=>{
    elem.addEventListener("click", (e)=>{
        let currentColorSelected = elem.classList[1];
        let filterTickets = ticketsArr.filter((obj, idx)=>{
            return currentColorSelected === obj.color;
        })

        let allTickets = document.querySelectorAll(".ticket-cont");
        allTickets.forEach((ticket)=>{
            ticket.remove();
        });

        filterTickets.forEach((element)=>{
            createTicket(element.task, element.color)