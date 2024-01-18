"use strict"

document.addEventListener('DOMContentLoaded', formHand);

function formHand(){
    const form = document.getElementById('form');
    let toppings =  toppingsHandler();
    form.addEventListener('submit', formSend);
    async function formSend(e){
        e.preventDefault();
        let error = validateForm(form);
        let formData = new FormData(form);
        toppings.forEach((item) => formData.append("toppings", item))
        if (error === 0){
            fetch('handler.php', {
                method: 'POST',
                body: formData,
            })
            .then((response) => {
                form.elements.name.value = '';
                form.elements.phone.value = '';
                form.elements.tg.value = '';
                form.elements.message.value = '';
                alert('Спасибо за заказ! Я обязательно свяжусь с вами :)')
                
            })
            .catch((error) => {
            })
        }else{
            alert('Пожалуйста, заполните все поля корректно');
        }
    } 
    
   
}

function validateForm(){
    let fields = document.querySelectorAll('.validated');
    let error = 0;
    for (let field of fields){
        removeErrForm(field);
        if (field.classList.contains('_phone')) {
            if (!phoneCheck(field.value) ) {
                addErrForm(field);
                error++;
            }
        }else if (!field.value) {
            addErrForm(field);
            error++;
        }
    }
    return error;
}


function nameCheck(field){
    return /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u.test(field);
}

function phoneCheck(field){
    return  /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(field);
}
function addErrForm(field){
    field.classList.add('_error');
}

function removeErrForm(field){
    field.classList.remove('_error');
}



function toppingsHandler(){ 
    let topings = document.querySelectorAll('.toppings__box');
    let data__toppings = [];
    for (let item of topings){
        item.addEventListener('click', function(){
           
            if (window.getComputedStyle(item).backgroundColor == 'rgba(188, 175, 243, 0.46)'){ 
                item.style.backgroundColor = 'rgba(188, 175, 243, 1)';
                data__toppings.push(item.textContent);
            }
            else{ 
                item.style.backgroundColor = 'rgba(188, 175, 243, 0.46)'
                data__toppings = data__toppings.filter((value) => value !== item.textContent)
            }
        });
    }
    return data__toppings;
}
