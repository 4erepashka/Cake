let biscuits_wrapper = document.querySelector('.cakes-section-wrapper');
let bento_wrapper = document.querySelector('.cakes-section-wrapper__bento');
let mousse_wrapper = document.querySelector('.cakes-section-wrapper__mousse');
let arrow_next = document.querySelector('.cakes-section-next');
let arrow_back = document.querySelector('.cakes-section-back');
let cake_bi = document.querySelector('.cakes-section__title-bi');
let cake_be = document.querySelector('.cakes-section__title-be');
let cake_mu = document.querySelector('.cakes-section__title-mu');
let biscuits_description_xs = document.querySelector('.cakes-section-wrapper__descr.xs');
let biscuits_description_s = document.querySelector('.cakes-section-wrapper__descr.s');
let biscuits_description_m = document.querySelector('.cakes-section-wrapper__descr.m');
let biscuits_description_l = document.querySelector('.cakes-section-wrapper__descr.l');
let biscuits_description_xl = document.querySelector('.cakes-section-wrapper__descr.xl');
let biscuits_description_heart = document.querySelector('.cakes-section-wrapper__descr.heart');
let bento_description = document.querySelector('.cakes-section-wrapper__bento__descr');
let mousse_description = document.querySelector('.cakes-section-wrapper__mousse__descr');
let biscuits_cakes = document.querySelector('.cakes-section__cake-wrapper');
let biscuits_cakes_xl = document.querySelector('.cakes-section__cake-wrapper_xl');
let  biscuits_cakes_heart = document.querySelector('.cakes-section__cake-wrapper_heart')
let block_index = 0;
let list_options = document.querySelector('.cakes-section__list');
let xs_cakes = ['url(../img/cakeXS/cake_xs_1.png)', 'url(../img/cakeXS/cake_xs_2.png)', 'url(../img/cakeXS/cake_xs_3.png)', 'url(../img/cakeXS/cake_xs_4.png)', 'url(../img/cakeXS/cake_xs_5.png)'];
let s_cakes = ['url(../img/cakeS/01.png)', 'url(../img/cakeS/02.png)', 'url(../img/cakeS/03.png)', 'url(../img/cakeS/04.png)', 'url(../img/cakeS/05.png)'];
let m_cakes = ['url(../img/cakeM/01.png)', 'url(../img/cakeM/02.png)', 'url(../img/cakeM/03.png)', 'url(../img/cakeM/04.png)', 'url(../img/cakeM/02.png)'];
let l_cakes = [];
let xl_cakes = []; 
let heart_cakes = [];


function descriptionHandler(){
    if (getComputedStyle(biscuits_description_s).transform == 'matrix(1, 0, 0, 1, 0, 0)'){
        biscuits_description_s.style.transform = 'translateY(2000px)';
    } else if (getComputedStyle(biscuits_description_m).transform == 'matrix(1, 0, 0, 1, 0, 0)'){
        biscuits_description_m.style.transform = 'translateY(2000px)';
    } else if (getComputedStyle(biscuits_description_l).transform == 'matrix(1, 0, 0, 1, 0, 0)'){
        biscuits_description_l.style.transform = 'translateY(2000px)';
    } else if (getComputedStyle(biscuits_description_xl).transform == 'matrix(1, 0, 0, 1, 0, 0)'){
        biscuits_description_xl.style.transform = 'translateY(2000px)';
    }else if (getComputedStyle(biscuits_description_heart).transform == 'matrix(1, 0, 0, 1, 0, 0)'){
        biscuits_description_heart.style.transform = 'translateY(2000px)';
    }else if (getComputedStyle(biscuits_description_xs).transform == 'matrix(1, 0, 0, 1, 0, 0)'){
        biscuits_description_xs.style.transform = 'translateY(2000px)';
    }
}

list_options.onclick = cakeNextSize;

function cakeNextSize(event){
    if (!event.target.closest === 'ul' ){
        return;
    }
    biscuits_cakes.style.display = 'block';
    [].forEach.call(list_options.children, (cake) => {
        cake.style.backgroundColor = 'rgb(213,237,255, .2) ';
        
    })
    descriptionHandler();
    biscuits_cakes_xl.style.display = 'none';
    biscuits_cakes_heart.style.display = 'none';
    switch(event.target.id){
        case 'xs':
            [].forEach.call(biscuits_cakes.children, (cake, index) => {
                cake.style.backgroundImage = xs_cakes[index];
                
            })
            biscuits_description_xs.style.transform = 'translateY(0)';
            event.target.style.backgroundColor = 'rgb(213,237,255, 1) ';
            break;
        case 's': 
            [].forEach.call(biscuits_cakes.children, (cake, index) => {
                cake.style.backgroundImage = s_cakes[index];
            });
            biscuits_description_s.style.transform = 'translateY(0)';
            event.target.style.backgroundColor = 'rgb(213,237,255, 1) ';
            break;
        case 'm': 
            [].forEach.call(biscuits_cakes.children, (cake, index) => {
                cake.style.backgroundImage = m_cakes[index];
            });
            biscuits_description_m.style.transform = 'translateY(0)';
            event.target.style.backgroundColor = 'rgb(213,237,255, 1) ';
            break;
        case 'l':
            biscuits_cakes.style.display = 'none';
            biscuits_description_l.style.transform = 'translateY(0)';
            event.target.style.backgroundColor = 'rgb(213,237,255, 1) ';
            break;
        case 'xl':
            biscuits_cakes.style.display = 'none';
            biscuits_cakes_xl.style.display = 'block';
            biscuits_cakes_xl.style.transform = 'translateY(0)';

            biscuits_description_xl.style.transform = 'translateY(0)';
            event.target.style.backgroundColor = 'rgb(213,237,255, 1) ';
            break;
        case 'heart':
            biscuits_cakes.style.display = 'none';
            biscuits_cakes_heart.style.display = 'block';
            biscuits_cakes_heart.style.transform = 'translateY(0)';

            biscuits_description_heart.style.transform = 'translateY(0)';
            event.target.style.backgroundColor = 'rgb(213,237,255, 1) ';
            break;

    }
}
arrow_next.onclick  = function(event) {
    block_index++;
    arrow_back.style.display = 'block';
    descriptionHandler();
    if (block_index == 1) {
        cake_bi.style.transform = 'translateX(2000px)';
        cake_be.style.transform = 'translateX(0)';
        biscuits_wrapper.style.transform = 'translateX(-2000px)';
        bento_wrapper.style.transform = 'translateX(0)';
        biscuits_description_xs.style.transform = 'translateY(-2000px)';
        bento_description.style.transform = 'translateY(0)';
    }else if (block_index == 2){
        cake_be.style.transform = 'translateX(2000px)';
        arrow_next.style.display = 'none';
        cake_mu.style.transform =  'translateX(0)';
        bento_wrapper.style.transform = 'translateX(-2000px)';
        mousse_wrapper.style.transform = 'translateX(0)';
        bento_description.style.transform  = 'translateY(-2000px)';
        mousse_description.style.transform = 'translateY(0)';
    }
}

arrow_back.onclick =  function(event) {
    block_index--;
    arrow_next.style.display = 'block';
    descriptionHandler();
    if (block_index == 1) {
        cake_mu.style.transform = 'translateX(2000px)';
        cake_be.style.transform = 'translateX(0)';
        mousse_wrapper.style.transform ='translateX(2000px)';
        bento_wrapper.style.transform = 'translateX(0)';
        biscuits_description_xs.style.transform = 'translateY(2000px)';
        bento_description.style.transform = 'translateY(0)';

    }else if (block_index == 0){
        cake_be.style.transform = 'translateX(2000px)';
        cake_bi.style.transform =  'translateX(0)';
        arrow_back.style.display = 'none';
        bento_wrapper.style.transform = 'translateX(2000px)';
        biscuits_wrapper.style.transform = 'translate(0)';
        bento_description.style.transform = 'translateY(2000px)';
        biscuits_description_xs.style.transform = 'translateY(0)';
    }
}