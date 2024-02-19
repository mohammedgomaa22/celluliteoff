import 'animate.css';


// -------------------------------------
function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        phone_number: document.getElementById("phone_number").value,
        address: document.getElementById("address").value,
    }
    // -----------
    if (params.name != "" && params.phone_number != "" && params.address != "") {
        alert("تم ارسال طلبك بنجاح وسيتم التواصل معك في اقرب وقت");
        document.getElementById("name").value = "";
        document.getElementById("phone_number").value = "";
        document.getElementById("address").value = "";
        console.log("done");
    } else {
        alert("يجب ادخال جميع البيانات المطلوبة");
        console.log("error");
    }
};

// -------------------------------------

const scriptURL = 'https://script.google.com/macros/s/AKfycbzUe5gL7onvQVo7gIEQGv3TCQ6eHlgAPZLzQ00EUxs7u5KXBdW26ffrqh5t2PhoS-o4/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("تم ارسال طلبك بنجاح وسيتم التواصل معك في اقرب وقت" ))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})