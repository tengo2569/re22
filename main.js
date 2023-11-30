
const span = document.querySelector('.span');
const h2 = document.querySelector('h2');
const btn = document.querySelector('button');
const img = document.querySelector('.img1')
const svg = document.querySelector('.img2')


btn.addEventListener('click', function () {
    fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(data => {
            const { id, advice } = data.slip;

            h2.textContent = advice;
            span.textContent = id;
        })


    btn.disabled = true;
    btn.style.cursor = 'not-allowed';
    svg.classList.add("pause")
    img.classList.add("pause1")
    h2.innerHTML = "loading..."



    setTimeout(function () {
        btn.disabled = false;
        btn.style.cursor = 'pointer';
    }, 1000);

})