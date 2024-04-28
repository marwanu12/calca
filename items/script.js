const pi = 3.14;
const error = document.querySelector('#error');
const num = document.querySelector('#num');
const res = document.querySelector('#res');
const check = document.querySelector('#check');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');

btn1.addEventListener("click", () => {
    if(num.value < 0){
        error.style.display = "block"
        error.innerHTML = `<div class="res alert alert-danger" dir="auto"><i class="fa fa-circle-xmark"></i> خطأ: الرجاء عدم وضع عدد سالب</div>`
    }else {
        if(num.value == ""){
            error.style.display = "block"
            error.innerHTML = `<div class="res alert alert-danger" dir="auto"><i class="fa fa-circle-xmark"></i> خطأ: الرجاء كتابة الرقم المطلوب</div>`
        }else {
            error.style.display = "none"
            let rule = 2 * pi * num.value

            if(check.checked){
                let clca = rule
                res.innerHTML = ` <i class="fa fa-square-check"></i> النتيجة: ${clca}`;
            }else {
                let clca = Math.round(rule);
                res.innerHTML = ` <i class="fa fa-square-check"></i> النتيجة: ${clca}`;
            }
        }
    }
})

btn2.addEventListener('click', () => {
    if(num.value < 0){
        error.style.display = "block"
        error.innerHTML = `<div class="res alert alert-danger" dir="auto"><i class="fa fa-circle-xmark"></i> خطأ: الرجاء عدم وضع عدد سالب</div>`
    }else {
        if(num.value == ""){
            error.style.display = "block"
            error.innerHTML = `<div class="res alert alert-danger" dir="auto"><i class="fa fa-circle-xmark"></i> خطأ: الرجاء كتابة الرقم المطلوب</div>`
        }else {
            error.style.display = "none"
            let rule = pi * num.value * num.value
            
            if(check.checked){
                let clca = rule
                res.innerHTML = `<i class="fa fa-square-check"></i> النتيجة: ${clca}`;
            }else {
                let clca = Math.round(rule);
                res.innerHTML = ` <i class="fa fa-square-check"></i> النتيجة: ${clca}`;
            }
        }
    }
})



//------------------------------------------------------

const body = document.querySelector('body');
const mp = document.querySelector('#mp');

mp.addEventListener('click', () => {
    body.classList.toggle('dark')
})