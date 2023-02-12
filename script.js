'use strict';

const passResult = document.getElementById('passResult')
const copyPass = document.getElementById('copyPass')
const passLengthNumber = document.getElementById('passLength--number')
const rangeInput = document.getElementById('rangeInput')
const upper = document.getElementById('upper')
const lower = document.getElementById('lower')
const number = document.getElementById('number')
const symbol = document.getElementById('symbol')
const generate = document.getElementById('generate')


function rangeValue() {
  const rangeVal = rangeInput.value
  passLengthNumber.innerText = rangeVal
}

window.addEventListener('DOMContentLoaded', rangeValue)

rangeInput.addEventListener("mousemove", rangeValue)

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLocaleLowerCase();
const numbers = '123456789'
const symbols = '~! @#$%^&*()_-+={[}]|;<,>.?/'



generate.addEventListener('click', () => {

  const rangeValue = rangeInput.value
  const isUpperChecked = upper.checked
  const isLowerChecked = lower.checked
  const isNumberChecked = number.checked
  const isSymbolChecked = symbol.checked

  calcPassStrength(rangeValue)

  passResult.innerText = generetaPassword(rangeValue, isUpperChecked, isLowerChecked, isNumberChecked, isSymbolChecked)
})

const calcStrength = document.getElementById('stregth-calc')
const tooWeak = document.getElementById('too-weak')
const weak = document.getElementById('weak')
const medium = document.getElementById('medium')
const strong = document.getElementById('strong')

function calcPassStrength(value) {

  tooWeak.classList.remove('border-tooWeak', 'bg-tooWeak');
  weak.classList.remove('border-tooWeak', 'bg-tooWeak');
  medium.classList.remove('border-medium', 'bg-medium');
  strong.classList.remove('border-strong', 'bg-strong');

  if (value <= 5) {
    calcStrength.innerText = 'Too Weak'
    tooWeak.classList.add('border-tooWeak', 'bg-tooWeak')
  }
  if (value > 5 && value < 10) {
    calcStrength.innerText = 'Weak'
    weak.classList.add('border-tooWeak', 'bg-tooWeak')
  }
  if (value >= 10 && value <= 14) {
    calcStrength.innerText = 'Medium'
    medium.classList.add('border-medium', 'bg-medium')
  }
  if (value > 14) {
    calcStrength.innerText = 'Strong'
    strong.classList.add('border-strong', 'bg-strong')
  }

}

function generetaPassword(rangeValue, isUpperChecked, isLowerChecked, isNumberChecked, isSymbolChecked) {
  let password = '';
  let character = '';

  if (isUpperChecked) character += upperCase;
  if (isLowerChecked) character += lowerCase;
  if (isNumberChecked) character += numbers;
  if (isSymbolChecked) character += symbols;

  if (character.length === 0) {
    // If no character sets are selected, default to lowerCase
    character = lowerCase;
  }

  for (let i = 0; i < rangeValue; i++) {
    password += character.charAt(Math.floor(Math.random() * character.length));
  }

  return password
}

copyPass.addEventListener("click", () => {
  window.navigator.clipboard.writeText(passResult.innerHTML);
});