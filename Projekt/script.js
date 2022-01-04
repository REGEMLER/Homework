const map = document.getElementById(`map`);
const hint = document.getElementById(`hint`);

const treasure = {
    x:Math.floor(Math.random() * (map.clientWidth - 100)) + 50,
    y:Math.floor(Math.random() * (map.clientHeight - 100)) + 50
}

console.log(treasure);

treasure.addEventListener('click', function () {
    alert(`Treasure is here`);
}); 