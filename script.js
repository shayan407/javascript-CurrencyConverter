let currency1 = document.getElementById('currency1');
let currency2 = document.getElementById('currency2');
let amount1 = document.getElementById('amount1');
let amount2 = document.getElementById('amount2');
let rate = document.getElementById('rate');
let button = document.getElementById('swap');

function calculate(){
    let currencyCode1 = currency1.value.toUpperCase();
    let currencyCode2 = currency2.value.toUpperCase();
    // console.log(currencyCode1,currencyCode2);
    let api = fetch(`https://v6.exchangerate-api.com/v6/5b9007fa88fddf531676a132/pair/${currencyCode1}/${currencyCode2}`)
    .then(res => res.json())
    .then(data => {
        let conversionRate = data.conversion_rate.toFixed(2);
        rate.innerText = `1 ${currencyCode1} = ${conversionRate} ${currencyCode2}`;
        amount2.value = (amount1.value * conversionRate).toFixed(2);
    })
}

button.addEventListener('click', () => {
    let temp = currency1.value;
    currency1.value = currency2.value;
    currency2.value = temp;
    calculate();
})

currency1.addEventListener('change', calculate);
amount1.addEventListener('input', calculate);
currency1.addEventListener('change', calculate);
amount2.addEventListener('input', calculate);

calculate();
