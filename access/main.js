
var count = 0

const test = document.querySelector('.btn');

zalypa.addEventListener("click", hyeta);

function hyeta() {
    count++
    let li = document.createElement('div');
    li.innerHTML = '<div class="item"></div>';
    document.querySelector('.wrapper').append(li);
    console.log(count);
}

zalypa.addEventListener("click", bitch);

function bitch() {
    alert("Че ты тычешь сюда дурень ска)))");
}