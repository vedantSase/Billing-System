require('dotenv').config();
// storing environment variables
const scriptURL = process.env.dburl ; 

const form = document.forms['contact-form']
const submit = document.getElementById("submit");
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})


function add()
{
  let Male = Number(document.getElementById("Male").value);
  let Female = Number(document.getElementById("Female").value);
  let Childern = Number(document.getElementById("Childern").value);
  let Total_Guest = Male + Female + Childern ;
  document.getElementById("Total_Guest").value = String(Total_Guest);
}

let suffix = " ₹";
function Bill()
{
  let rate = Number(document.getElementById("Rate").value);
  let days = Number(document.getElementById("Days").value);
  let ExtraCharge = Number(document.getElementById("Extra-Charges").value);
  let Bill = (rate * days) + ExtraCharge ;
  document.getElementById("bill").innerText = String(Bill+suffix);
  document.getElementById("Totalbill").value = String(Bill+suffix);

  document.getElementById("rateResult").innerText = String(rate);
  // document.getElementById("dayRate").value= String(rate);
  document.getElementById("resultDay").innerText= String(rate*days);
  document.getElementById("eCharges").innerText= String(ExtraCharge);
}

document.getElementById('invoice-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const date = document.getElementById('date').value;
    if (date) {
        fetch('https://script.google.com/macros/s/AKfycbyyuAmJRwW6Q1iWMshdQ0HtKHAQGaC8ZM59-J3pRlKVee4ehdSjvS499RTaR1G3PYx_6Q/exec', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ date: date })
        }).then(response => {
            if (response.ok) {
                alert('Date successfully sent to Google Sheets');
            } else {
                alert('There was a problem sending the date to Google Sheets');
            }
        }).catch(error => {
            console.error('Error:', error);
        });
    }
});