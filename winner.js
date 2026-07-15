const body = document.body

// console.log(location.search);
const params = new URLSearchParams(location.search)
// console.log(params);

if (!params.has('user') || !params.has('comp')) {
    // console.error('НЕМАЄ 1 АБО 2 ПАРАМЕТРІВ');
    // window.location.href = `./index.html`

    // setTimeout(()=>{
    //     window.location.href = `./index.html`
    // },2000)
    
    body.innerHTML = `<h1>ГРА ЗАПУСКАЄТЬСЯ ТІЛЬКИ З ГОЛОВНОЇ СТОРІНКИ</h1>
    <a href="./index.html">ПЕРЕЙТИ НА ГОЛОВНУ</a>
    `
    body.style.textAlign = 'center'
    body.style.display = 'block'
}

const user = params.get('user')
console.log(user);

const comp = params.get('comp')
console.log(comp);

const choiseToImageMap = {
    0: { src: "./images/0.png", alt: "ROCK" },
    1: { src: "./images/1.png", alt: "PAPER" },
    2: { src: "./images/2.png", alt: "SCISSORS" },
} 
console.log(choiseToImageMap);

const userImg = document.querySelector('.your-pick img')

console.log(userImg);
userImg.src = choiseToImageMap[user].src
userImg.alt = choiseToImageMap[user].alt

const compImg = document.querySelector('.computer-pick img')

compImg.src = choiseToImageMap[comp].src
compImg.alt = choiseToImageMap[comp].alt

const playAgain = document.querySelector('button.play-again')
console.log(playAgain);
playAgain.addEventListener('click', ()=>{
    window.location.href = `./index.html`
})

const winningCombos = {
    '0':{beats:'2',losesTo:'1'},
    '1':{beats:'0',losesTo:'2'},
    '2':{beats:'1',losesTo:'0'},
}

const winner = ''

const youWonText = document.querySelector('.you-win')
const computerWonText = document.querySelector('.computer-wins')
// console.log(youWonText,computerWonText);

const checkWinner = ()=>{
    if (user === comp) {
        // youWonText.textContent = 'НІЧИЯ'
        // computerWonText.textContent = 'НІЧИЯ'
        youWonText.textContent = computerWonText.textContent = 'НІЧИЯ'
        body.style.backgroundColor = 'rgba(255, 0, 0, 0.6)'
        return
    }
    const isUserWinner = winningCombos[user].beats === comp
    console.log(isUserWinner);
    if (isUserWinner) {
        youWonText.textContent = 'ТИ ВИГРАВ'
        body.classList.add('you-win')
    } else {
        computerWonText.textContent = 'ВИГРАВ КОМП\'ЮТЕР'
        body.classList.add('computer-wins')
    }
}
checkWinner()

//рахунок!!!