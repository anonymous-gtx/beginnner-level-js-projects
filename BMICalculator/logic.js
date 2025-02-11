// const body = document.querySelector('body')
const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');
    const message = document.querySelector('#message')
    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please give a valid height ${height}`
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight ${weight}`
    }
    else {
        const bmi = (weight  / ((height*height)/10000)).toFixed(2)
        result.innerHTML = `<span>Your BMI value is ${bmi}</span>`
        if(bmi < 18.6){
            message.innerHTML = `<span>You are Under Weight.</span>`
        } else if (bmi >=18.6 && bmi <=24.9){
            message.innerHTML = `<span>You are Weight is normal.</span>`
        } else if (bmi > 24.9){
            message.innerHTML = `<span>You are Over Weight</span>`
        }
    }
});