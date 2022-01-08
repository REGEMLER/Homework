const map = document.getElementById(`map`);
const hint = document.getElementById(`hint`);

const treasure = {
    x:Math.floor(Math.random() * (map.clientWidth - 100)) + 50,
    y:Math.floor(Math.random() * (map.clientHeight - 100)) + 50
}

console.log(treasure);

function attempt (event){
    let gold = Math.sqrt((treasure.x - event.offsetX)**2 + (treasure.y - event.offsetY)**2);
    if(gold<50){
        hint.textContent = `Вы нашли золото!`;
    }
     else if(gold<100){
        hint.textContent = `Золото где-то рядом!`;
     }
     else if(gold<200){
        hint.textContent = `Тепло!`;
     } else {
        hint.textContent = `Холодно!`;
     }
}

map.addEventListener(`click`, attempt);