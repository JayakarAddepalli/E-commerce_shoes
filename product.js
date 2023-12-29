let mainimg = document.getElementsByClassName('main_img')[0];

let mainimg_s = document.getElementsByClassName('main_img_s')[0];

let main_img_screen = document.getElementsByClassName('main_img_screen')[0];

let s_block = document.getElementById('s_block');

let item_num = document.getElementById('item_num');
let minus = document.getElementsByClassName('minus')[0];
let plus = document.getElementsByClassName('plus')[0];

let sec1 = document.getElementById('section1');
let sec2 = document.getElementById('section2');

let imgele1 = document.getElementById('imgele1');
let imgele2 = document.getElementById('imgele2');
let imgele3 = document.getElementById('imgele3');
let imgele4 = document.getElementById('imgele4');

let imgele1_1 = document.getElementById('imgele1_1');
let imgele2_2 = document.getElementById('imgele2_2');
let imgele3_3 = document.getElementById('imgele3_3');
let imgele4_4 = document.getElementById('imgele4_4');

let btn_1 = document.getElementsByClassName('btn_1')[0];
let btn_2 = document.getElementsByClassName('btn_2')[0];

let btn_1_s = document.getElementsByClassName('btn_1_s')[0];
let btn_2_s = document.getElementsByClassName('btn_2_s')[0];



let sup = document.getElementsByTagName('sup')[0];
let ADDCART = document.getElementById('button1');

let addlistbox = document.getElementById('addlistbox');

let main_image = document.getElementById('main_image');

let handburger = document.getElementById('handburger');
let handburgeritems = document.getElementById('handburgeritems');
let handburgercross = document.getElementById('handburgercross');

handburger.addEventListener('click',()=>{
    handburgeritems.style.display = 'block';
})

handburgercross.addEventListener('click',()=>{
    handburgeritems.style.display = 'none';
})

let inc = 0;
let dec = 0;

plus.addEventListener('click',()=>{
    if(item_num.textContent < 9){
        inc = Number(item_num.textContent) + 1; 
        item_num.textContent = inc;
    }
})

minus.addEventListener('click',()=>{
    if(item_num.textContent > 0){
        dec = item_num.textContent - 1;
        item_num.textContent = dec;
    }
    
})

ADDCART.addEventListener('click',()=>{
    if(item_num.textContent != 0){
        sup.textContent = item_num.textContent;
    }
    else if(item_num.textContent == 0){
        alert('Quantity of the item is zero, you must have to select the quantity of the item.')
    }
    
})

main_image.addEventListener('click',(event)=>{
    event.preventDefault();
    sec2.style.cssText = 'display: flex; flex-direction:column; justify-content:space-evenly; align-items:center;'
    sec2.style.display = 'block';
})

s_block.addEventListener('click',()=>{
    sec2.style.display = 'none';
})

mainimg_s.addEventListener('click',(event)=>{
    event.preventDefault();
})

btn_1.addEventListener('click',()=>{
    
    if(mainimg_s.src == 'https://github.com/JayakarAddepalli/E-commerce_shoes/blob/main/images/image-product-4.jpg'){
        mainimg_s.src = 'https://github.com/JayakarAddepalli/E-commerce_shoes/blob/main/images/image-product-3.jpg';
        imgele3_3.style.border = 'solid 2px rgb(255, 149, 0)';
        imgele1_1.style.border = 'none';
        imgele2_2.style.border = 'none';
        imgele4_4.style.border = 'none';
        imgele1_1.style.opacity ='1';
        imgele3_3.style.opacity = "0.5";
        imgele2_2.style.opacity = "1";
        imgele4_4.style.opacity = "1";
    }
    else if(mainimg_s.src == 'https://github.com/JayakarAddepalli/E-commerce_shoes/blob/main/images/image-product-3.jpg'){
        mainimg_s.src = 'https://github.com/JayakarAddepalli/E-commerce_shoes/blob/main/images/image-product-2.jpg';
        imgele2_2.style.border = 'solid 2px rgb(255, 149, 0)';
        imgele1_1.style.border = 'none';
        imgele3_3.style.border = 'none';
        imgele4_4.style.border = 'none';
        imgele1_1.style.opacity ='1';
        imgele2_2.style.opacity = "0.5";
        imgele3_3.style.opacity = "1";
        imgele4_4.style.opacity = "1";
    }
    else if(mainimg_s.src == 'https://github.com/JayakarAddepalli/E-commerce_shoes/blob/main/images/image-product-2.jpg'){
        mainimg_s.src = 'https://github.com/JayakarAddepalli/E-commerce_shoes/blob/main/images/image-product-1.jpg';
        imgele1_1.style.border = 'solid 2px rgb(255, 149, 0)';
        imgele2_2.style.border = 'none';
        imgele3_3.style.border = 'none';
        imgele4_4.style.border = 'none';
        imgele2_2.style.opacity ='1';
        imgele1_1.style.opacity = "0.5";
        imgele3_3.style.opacity = "1";
        imgele4_4.style.opacity = "1";
    }
})

btn_2.addEventListener('click',()=>{

    if(mainimg_s.src == 'https://github.com/JayakarAddepalli/E-commerce_shoes/blob/main/images/image-product-1.jpg'){
        mainimg_s.src = 'https://github.com/JayakarAddepalli/E-commerce_shoes/blob/main/images/image-product-2.jpg';
        imgele2_2.style.border = 'solid 2px rgb(255, 149, 0)';
        imgele1_1.style.border = 'none';
        imgele3_3.style.border = 'none';
        imgele4_4.style.border = 'none';
        imgele1_1.style.opacity ='1';
        imgele2_2.style.opacity = "0.5";
        imgele3_3.style.opacity = "1";
        imgele4_4.style.opacity = "1";
    }
    else if(mainimg_s.src == 'https://github.com/JayakarAddepalli/E-commerce_shoes/blob/main/images/image-product-2.jpg'){
        mainimg_s.src = 'https://github.com/JayakarAddepalli/E-commerce_shoes/blob/main/images/image-product-3.jpg';
        imgele3_3.style.border = 'solid 2px rgb(255, 149, 0)';
        imgele2_2.style.border = 'none';
        imgele1_1.style.border = 'none';
        imgele4_4.style.border = 'none';
        imgele1_1.style.opacity = "1";
        imgele2_2.style.opacity = "1";
        imgele3_3.style.opacity = "0.5";
        imgele4_4.style.opacity = "1";
    }
    else if(mainimg_s.src == 'https://github.com/JayakarAddepalli/E-commerce_shoes/blob/main/images/image-product-3.jpg'){
        mainimg_s.src = 'https://github.com/JayakarAddepalli/E-commerce_shoes/blob/main/images/image-product-4.jpg';
        imgele4_4.style.border = 'solid 2px rgb(255, 149, 0)';
        imgele2_2.style.border = 'none';
        imgele3_3.style.border = 'none';
        imgele1_1.style.border = 'none';
        imgele1_1.style.opacity = "1";
        imgele2_2.style.opacity = "1";
        imgele3_3.style.opacity = "1";
        imgele4_4.style.opacity = "0.5";
    }
})


btn_1_s.addEventListener('click',()=>{
    
    if(main_img_screen.src == 'https://github.com/JayakarAddepalli/E-commerce_shoes/blob/main/images/image-product-4.jpg'){
        main_img_screen.src = 'https://github.com/JayakarAddepalli/E-commerce_shoes/blob/main/images/image-product-3.jpg';
        
    }
    else if(main_img_screen.src == 'https://github.com/JayakarAddepalli/E-commerce_shoes/blob/main/images/image-product-3.jpg'){
        main_img_screen.src = 'https://github.com/JayakarAddepalli/E-commerce_shoes/blob/main/images/image-product-2.jpg';
        
    }
    else if(main_img_screen.src == 'https://github.com/JayakarAddepalli/E-commerce_shoes/blob/main/images/image-product-2.jpg'){
        main_img_screen.src = 'https://github.com/JayakarAddepalli/E-commerce_shoes/blob/main/images/image-product-1.jpg';
        
    }
})

btn_2_s.addEventListener('click',()=>{

    if(main_img_screen.src == 'https://github.com/JayakarAddepalli/E-commerce_shoes/blob/main/images/image-product-1.jpg'){
        main_img_screen.src = 'https://github.com/JayakarAddepalli/E-commerce_shoes/blob/main/images/image-product-2.jpg';
        
    }
    else if(main_img_screen.src == 'https://github.com/JayakarAddepalli/E-commerce_shoes/blob/main/images/image-product-2.jpg'){
        main_img_screen.src = 'https://github.com/JayakarAddepalli/E-commerce_shoes/blob/main/images/image-product-3.jpg';
        
    }
    else if(main_img_screen.src == 'https://github.com/JayakarAddepalli/E-commerce_shoes/blob/main/images/image-product-3.jpg'){
        main_img_screen.src = 'https://github.com/JayakarAddepalli/E-commerce_shoes/blob/main/images/image-product-4.jpg';
        
    }
})

imgele1.addEventListener('click',(event)=>{
    event.preventDefault()
    mainimg.src = './images/image-product-1.jpg';
    imgele1.style.border = 'solid 1px rgb(255, 149, 0)';
    imgele2.style.border = 'none';
    imgele3.style.border = 'none';
    imgele4.style.border = 'none';
    imgele1.style.opacity = '0.5';
    imgele2.style.opacity = "1";
    imgele3.style.opacity = "1";
    imgele4.style.opacity = "1";

})

imgele2.addEventListener('click',(event)=>{
    event.preventDefault()
    mainimg.src = './images/image-product-2.jpg';
    imgele2.style.border = 'solid 2px rgb(255, 149, 0)';
    imgele1.style.border = 'none';
    imgele3.style.border = 'none';
    imgele4.style.border = 'none';
    imgele1.style.opacity ='1';
    imgele2.style.opacity = "0.5";
    imgele3.style.opacity = "1";
    imgele4.style.opacity = "1";
})

imgele3.addEventListener('click',(event)=>{
    event.preventDefault()
    mainimg.src = './images/image-product-3.jpg';
    imgele3.style.border = 'solid 2px rgb(255, 149, 0)';
    imgele2.style.border = 'none';
    imgele1.style.border = 'none';
    imgele4.style.border = 'none';
    imgele1.style.opacity = "1";
    imgele2.style.opacity = "1";
    imgele3.style.opacity = "0.5";
    imgele4.style.opacity = "1";
})

imgele4.addEventListener('click',(event)=>{
    event.preventDefault()
    mainimg.src = './images/image-product-4.jpg'
    imgele4.style.border = 'solid 2px rgb(255, 149, 0)';
    imgele2.style.border = 'none';
    imgele3.style.border = 'none';
    imgele1.style.border = 'none';
    imgele1.style.opacity = "1";
    imgele2.style.opacity = "1";
    imgele3.style.opacity = "1";
    imgele4.style.opacity = "0.5";
})




imgele1_1.addEventListener('click',(event)=>{
    event.preventDefault()
    mainimg_s.src = './images/image-product-1.jpg';
    imgele1_1.style.border = 'solid 1px rgb(255, 149, 0)';
    imgele2_2.style.border = 'none';
    imgele3_3.style.border = 'none';
    imgele4_4.style.border = 'none';
    imgele1_1.style.opacity = '0.5';
    imgele2_2.style.opacity = "1";
    imgele3_3.style.opacity = "1";
    imgele4_4.style.opacity = "1";

})

imgele2_2.addEventListener('click',(event)=>{
    event.preventDefault()
    mainimg_s.src = './images/image-product-2.jpg';
    imgele2_2.style.border = 'solid 2px rgb(255, 149, 0)';
    imgele1_1.style.border = 'none';
    imgele3_3.style.border = 'none';
    imgele4_4.style.border = 'none';
    imgele1_1.style.opacity ='1';
    imgele2_2.style.opacity = "0.5";
    imgele3_3.style.opacity = "1";
    imgele4_4.style.opacity = "1";
})

imgele3_3.addEventListener('click',(event)=>{
    event.preventDefault()
    mainimg_s.src = './images/image-product-3.jpg';
    imgele3_3.style.border = 'solid 2px rgb(255, 149, 0)';
    imgele2_2.style.border = 'none';
    imgele1_1.style.border = 'none';
    imgele4_4.style.border = 'none';
    imgele1_1.style.opacity = "1";
    imgele2_2.style.opacity = "1";
    imgele3_3.style.opacity = "0.5";
    imgele4_4.style.opacity = "1";
})

imgele4_4.addEventListener('click',(event)=>{
    event.preventDefault()
    mainimg_s.src = './images/image-product-4.jpg'
    imgele4_4.style.border = 'solid 2px rgb(255, 149, 0)';
    imgele2_2.style.border = 'none';
    imgele3_3.style.border = 'none';
    imgele1_1.style.border = 'none';
    imgele1_1.style.opacity = "1";
    imgele2_2.style.opacity = "1";
    imgele3_3.style.opacity = "1";
    imgele4_4.style.opacity = "0.5";
})

