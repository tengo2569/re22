
const span = document.querySelector('.span');
const h2 = document.querySelector('h2');
const btn = document.querySelector('button');
const img = document.querySelector('.img1')
const dice = document.querySelector('.img2')


btn.addEventListener('click', function () {
    btn.disabled = true;
    fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(data => {
              btn.disabled = false;
            const { id, advice } = data.slip;

            h2.textContent = advice;
            span.textContent = id;
        })


    
    btn.style.cursor = "allowed";
    dice.classList.add("pause1")
    img.classList.add("pause1")
    h2.innerHTML = "loading..."
  




})
