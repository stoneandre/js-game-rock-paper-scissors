const btns = document.querySelectorAll('button')
btns.forEach((btn, i) => {
    btn.addEventListener('click',() => {
        // console.log(btn.textContent);
        // console.log(i);
        const userChoise = i
        const computerChoise = Math.floor(Math.random()*3)
        console.log(computerChoise);
        window.location.href = `./winner.html?user=${userChoise}&comp=${computerChoise}`
    })

}) 
// console.log(location);
// console.log(location.href);
