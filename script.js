const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}


clipboardEl.addEventListener('click', () => {
    try {
        navigator.clipboard.writeText(resultEl.innerHTML);
        alert('Password Copied');
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
})

generateEl.addEventListener('click', () => {
    generatePassword(randomFunc.lower(), randomFunc.upper(), randomFunc.number(), randomFunc.symbol(), lengthEl.value)
    
})

function generatePassword(lower, upper, number, symbol, length) {

    let letters="";
    if(uppercaseEl.checked)
    {
        letters+=upper;
    }
    if(lowercaseEl.checked)
    {
        letters+=lower;
    }
    if(numbersEl.checked)
    {
        letters+=number;
    }
    if(symbolsEl.checked)
    {
        letters+=symbol;
    }

    let randomPassword="";
    for(let i=0;i<length;i++)
    {
        randomPassword+=letters[Math.floor(Math.random()*letters.length)];
    }
    
    resultEl.innerHTML = randomPassword;  
}

function getRandomLower() {
    return "abcdefghijklmnopqrstuvwxyz";
}

function getRandomUpper() {
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}

function getRandomNumber() {
    return "0123456789";
}

function getRandomSymbol() {
    return "!@#$%^&*()";
}


// random password generate krna hai lenght ka

