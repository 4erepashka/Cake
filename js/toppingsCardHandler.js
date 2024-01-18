let imgs_01 = ['url(../img/toppings/bi/01.png)', 'url(../img/toppings/bi/02.png)', 'url(../img/toppings/bi/03.png)', 'url(../img/toppings/bi/04.png)', 'url(../img/toppings/bi/05.png)', 'url(../img/toppings/bi/06.png)', 'url(../img/toppings/bi/07.png)', 'url(../img/toppings/bi/08.png)', 'url(../img/toppings/bi/09.png)']
let card_description_01 = ['морковный', 'карамель-банан', 'ягодная молочная девочка', 'сникерс', 'тропический баунти', 'нутелла', 'вишня-шоколад', 'манговое наслаждение', 'красный бархат']
let imgs_02 = ['url(../img/toppings/be/01.png)', 'url(../img/toppings/be/02.png)', 'url(../img/toppings/be/03.png)', 'url(../img/toppings/be/04.png)', 'url(../img/toppings/be/05.png)']
let card_description_02 = ['красный бархат с клубникой', 'пряный с карамелью',  'сникерс', 'банановый брауни',  'мак-тропики']
let card_options_01 = document.querySelector('.toppings-section__cards_01').querySelector('.card').querySelector('.options').children;
let card_options_02 = document.querySelector('.toppings-section__cards_02').querySelector('.card').querySelector('.options').children;
card_options_01[0].style.backgroundColor = '#fff';  
card_options_02[0].style.backgroundColor = '#fff';  

function getElem(card_number){
    let card_wrapper_name = 'toppings-section__cards_' + card_number;
    let card_wrapper = document.querySelector(`.${card_wrapper_name}`);2
    let back_btn = card_wrapper.querySelector('.card').querySelector('.back');
    back_btn.style.display = 'none';
    return card_wrapper;
}


let current_index_img_01 = 0;
let current_index_img_02 = 0;
let card_1 = getElem('01');
let card_2 = getElem('02'); 
card_1.addEventListener('click', cardHandler);
card_2.addEventListener('click', cardHandler);



function cardHandler(event){
    let current_card = event.currentTarget;
    let current_btn = event.target.closest('svg');
    if (!current_btn) {
        return;
    }else if (current_btn){
        if (current_btn.className.baseVal == 'forward'){
            if (current_card.className.match(/\d+/g)[0] == '01'){
                current_index_img_01++;
                nextCard(current_index_img_01, current_btn, current_card);
            }else if (current_card.className.match(/\d+/g)[0] == '02'){
                current_index_img_02++;
                nextCard(current_index_img_02, current_btn, current_card);
            }
        }else if (current_btn.className.baseVal == 'back'){
            if (current_card.className.match(/\d+/g)[0] == '01'){
                current_index_img_01--;
                prevCard(current_index_img_01, current_btn, current_card);
            }else if (current_card.className.match(/\d+/g)[0] == '02'){
                current_index_img_02--;
                prevCard(current_index_img_02, current_btn, current_card);
            }
        }
    }
}

function nextCard(curr_index, current_btn, current_card){
    let back_btn = current_card.querySelector('.card').querySelector('.back');
    let card_description = current_card.querySelector('.card').querySelector('.descr');
    back_btn.style.display = 'block';
    let current_array = getCurrentArrayImages(current_card);
    let current_img_wrapper = current_card.querySelector('.card').querySelector('.img');
    let current_array_desscription = getCurrentArrayDescription(current_card);
    let current_options_array = current_card.querySelector('.card').querySelector('.options').children;
    for (item of current_options_array){
        if (item == current_options_array[curr_index]){
            item.style.backgroundColor = '#ffff';
        }else{
            item.style.backgroundColor = '';
        }
    }
    current_options_array[curr_index].style.backgroundColor = "ffff";

    current_img_wrapper.style.backgroundImage = current_array[curr_index];
    card_description.innerText = current_array_desscription[curr_index];
    let last_card_index;
    if  (current_array == imgs_01){
        last_card_index = 8;
    }else if (current_array == imgs_02){
        last_card_index = 4;
    }

    if (current_card.getBoundingClientRect().width == 444){
        if (current_array_desscription[curr_index] == 'красный бархат с клубникой' || current_array_desscription[curr_index] == 'ягодная молочная девочка'  || current_array_desscription[curr_index] == 'пряный с карамелью' || current_array_desscription[curr_index] == 'банановый брауни' ){
            card_description.style.marginBottom = '30px';
            card_description.style.marginTop = '100px';
        }else{
            card_description.style.marginBottom = '60px';
            card_description.style.marginTop = '118px';
        }
    }else{
        if (current_array_desscription[curr_index] == 'красный бархат с клубникой' || current_array_desscription[curr_index] == 'ягодная молочная девочка'  || current_array_desscription[curr_index] == 'манговое наслаждение'  || current_array_desscription[curr_index] == 'пряный с карамелью' || current_array_desscription[curr_index] == 'банановый брауни' ){
            card_description.style.marginBottom = '25px';
            card_description.style.marginTop = '80px';
        }else{
            card_description.style.marginBottom = '50px';
            card_description.style.marginTop = '100px';
        }
    }

    if (curr_index === last_card_index){
        current_btn.style.display = 'none';
    }
    
}

function prevCard(curr_index, current_btn, current_card){
    let forward_btn = current_card.querySelector('.card').querySelector('.forward');
    let card_description = current_card.querySelector('.card').querySelector('.descr');
    let current_array = getCurrentArrayImages(current_card);
    let current_img_wrapper = current_card.querySelector('.card').querySelector('.img');
    let current_array_desscription = getCurrentArrayDescription(current_card);
    let current_options_array = current_card.querySelector('.card').querySelector('.options').children;
    for (item of current_options_array){
        if (item == current_options_array[curr_index]){
            item.style.backgroundColor = '#ffff';
        }else{
            item.style.backgroundColor = '';
        }
    }
    forward_btn.style.display = 'block';
    current_img_wrapper.style.backgroundImage = current_array[curr_index];
    card_description.innerText = current_array_desscription[curr_index];
    if (curr_index === 0){
        current_btn.style.display = 'none';
    }

    if (current_card.getBoundingClientRect().width == 444){
        if (current_array_desscription[curr_index] == 'красный бархат с клубникой' || current_array_desscription[curr_index] == 'ягодная молочная девочка'   || current_array_desscription[curr_index] == 'пряный с карамелью' || current_array_desscription[curr_index] == 'банановый брауни' ){
            card_description.style.marginBottom = '30px';
            card_description.style.marginTop = '100px';
        }else{
            card_description.style.marginBottom = '60px';
            card_description.style.marginTop = '118px';
        }
    }else{
        if (current_array_desscription[curr_index] == 'красный бархат с клубникой' || current_array_desscription[curr_index] == 'ягодная молочная девочка'  || current_array_desscription[curr_index] == 'манговое наслаждение'|| current_array_desscription[curr_index] == 'пряный с карамелью' || current_array_desscription[curr_index] == 'банановый брауни' ){
            card_description.style.marginBottom = '25px';
            card_description.style.marginTop = '80px';
        }else{
            card_description.style.marginBottom = '50px';
            card_description.style.marginTop = '100px';
        }
    }

}

function getCurrentArrayDescription(current_card){
    let current_array;
    if (current_card.className.match(/\d+/g)[0] == '01'){
        current_array = card_description_01;
    }else if (current_card.className.match(/\d+/g)[0] == '02'){
        current_array = card_description_02;
    }
    return current_array;
}


function getCurrentArrayImages(current_card){
    let current_array;
    if (current_card.className.match(/\d+/g)[0] == '01'){
        current_array = imgs_01;
    }else if (current_card.className.match(/\d+/g)[0] == '02'){
        current_array = imgs_02;
    }
    return current_array;
}


