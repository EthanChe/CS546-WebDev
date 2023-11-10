// Ethan Che
// CS546-A
// Lab 9
// 04/04/2022
// I pledge my honor that I have abided by the Stevens Honor System.

let myForm = document.getElementById('myForm');
let numInput = document.getElementById('number_input');
let errorDiv = document.getElementById('error');
let myUl = document.getElementById('attempts');
let frmLabel = document.getElementById('formLabel');


function isPrime(num) { //https://stackoverflow.com/questions/38643817/javascript-prime-number-check
    if (num <= 1) return false;
    if (num === 2) return true;
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }

    return true;
  }


if (myForm) {
    let error = false;
    
    myForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (numInput.value.trim()) {
            let val = numInput.value.trim()
            if (typeof val != 'number') {
                if (typeof val === 'string') {
                    if (val.trim().length == 0) error = true;
                    let temp = Number(val);
                    if (isNaN(temp)) {
                        numInput.value = '';
                        errorDiv.hidden = false;
                        errorDiv.innerHTML = 'You must enter a number value';
                        frmLabel.className = 'error';
                        numInput.focus();
                        numInput.className = 'inputClass';
                        error = true
                    }
                    else {
                        val = temp;
                    }
                }
                else {
                    numInput.value = '';
                    errorDiv.hidden = false;
                    errorDiv.innerHTML = 'You must enter a value';
                    frmLabel.className = 'error';
                    numInput.focus();
                    numInput.className = 'inputClass';
                    error = true
                }
            }
            if (!error) {
                numInput.classList.remove('inputClass');
                errorDiv.hidden = true;
                frmLabel.classList.remove('error');
                let li = document.createElement('li');

                if (isPrime(val)) {
                    li.innerHTML = `${val} is a prime number`
                    li.classList.add('is-prime')
                }
                else {
                    li.innerHTML = `${val} is NOT a prime number`
                    li.classList.add('not-prime')
                }

                myUl.appendChild(li);
                myForm.reset();
                numInput.focus();
                
            }
            else {
                error = false;
            }
 
        } 
        else {
        numInput.value = '';
        errorDiv.hidden = false;
        errorDiv.innerHTML = 'You must enter a value';
        frmLabel.className = 'error';
        numInput.focus();
        numInput.className = 'inputClass';
      }
    });
}