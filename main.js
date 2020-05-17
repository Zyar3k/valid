const name = document.querySelector('#name');
const p4name = document.querySelector('p.name');
const lengthValue = 3;
const age = document.querySelector('#age');
const p4age = document.querySelector('p.age');
const textarea = document.querySelector('#textarea');
const p4textarea = document.querySelector('p.textarea');
const select = document.querySelector('#select');
const p4select = document.querySelector('p.select');
const radio = document.querySelector('#radio');
const radio1 = document.querySelector('#radio1');
const p4radio = document.querySelector('p.radio');
const policy = document.querySelector('#policy');
const p4policy = document.querySelector('p.policy');


document.querySelector('#submit').addEventListener('click', (e) => {
  e.preventDefault()

  if (name.value === '') {
    p4name.innerHTML = 'Please add your name';
  } else if (name.value.length <= lengthValue) {
    p4name.innerHTML='Please add correct name';
    p4name.style.color = 'red';
  } else {
    p4name.innerHTML = '';
  }

  if (age.value === '') {
    p4age.innerHTML = 'Please add your age';
  } else if (parseInt(age.value) < 18) {
    p4age.innerHTML = 'you are too young';
    p4age.style.color = 'red';
  } else {
    p4age.innerHTML = '';
  }

  if (textarea.value === '') {
    p4textarea.innerHTML = 'Please type something';
  } else if (textarea.value.length <= lengthValue) {
    p4textarea.innerHTML = 'please type more';
    p4textarea.style.color = 'orange';
  } else if (textarea.value.length <= lengthValue*3) {
    p4textarea.innerHTML = 'and a little bit more please';
  } else {
    textarea.style.color = 'green';
    p4textarea.innerHTML = '';
  }

  if(select.value === ''){
    p4select.innerHTML = 'You have to choose';
  } else {
    p4select.innerHTML = '';
  }

  if (radio.checked !== true && radio1.checked !== true) {
    p4radio.innerHTML='You have to choose';
  } else {
    p4radio.innerHTML='';
  }

  if (policy.checked !== true) {
    p4policy.innerHTML = 'Please accept our policy';
  } else {
    p4policy.innerHTML = '';
  }  
});