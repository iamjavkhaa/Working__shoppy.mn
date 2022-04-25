let sagsandNemeh;
const uzehBtn = document.querySelector('#uzeh')
let cart;
// let productId = sagsandNemeh.parentElement.parentElement.firstElementChild.value;
let count;
let chosenProductName;
let chosenProductPrice;
const main = document.querySelector('.main');
const displayCartLength = document.querySelector('.displayCartLength')



//         uzeh   function is down HERE   !!!!


function displayCartLengthFunction() {
    
    if(localStorage.cart != undefined && localStorage.cart !== '[]') {
        let cartLengthForDisplay = JSON.parse(localStorage.cart)
        displayCartLength.innerText = cartLengthForDisplay.length
    }
}

document.addEventListener('click' , (a) => {
    if(a.target.id === 'uzeh') {
    let productName = a.target.parentElement.firstElementChild.innerText
    let productDetail = a.target.previousElementSibling.previousElementSibling.innerText
    let productId = a.target.parentElement.parentElement.firstElementChild.value
    let productPrice = a.target.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerText
    let productImg = a.target.parentElement.previousElementSibling.firstElementChild.src.toString()
    let productAguulah = a.target.parentElement.firstElementChild.nextElementSibling.firstElementChild.innerText
    console.log(productDetail)
    
    
    
    console.log(productAguulah)
    
    if(/[^0-9]/.test(productAguulah) === false) {
        document.querySelector('.fixed-parent').style.display = 'flex';
        document.querySelector('.fixed-parent').insertAdjacentHTML('afterbegin' , `
        <div class="fixed-header">
            <a style="color: white" href="./shoppy.html">Shoppy.mn</a>  
            <a style="color: white" href="./cart/cart.html">
                <i onmouseover="showFixedCart()" onmouseleave="hideFixedCart()" class="fa-solid fa-cart-arrow-down">
                    <div id="fixed-cart" class="cart"></div>
                </i>
            </a>
        </div>
        <div class="cont">
            <input type="text" value="${productId}" >
            <div class="left">
                <img src="${productImg}" alt="">
            </div>
    
            <div class="right">
                <div class='flex-end' >
                    <i onclick="cancelUzeh()" class="fa-solid fa-arrow-right-from-bracket"></i>
                </div>
                <h2>${productName}</h2>
                <p>${productDetail}</p>
                <h5>Агуулах: <span>  ${productAguulah} </span> </h5>
                <br>
                <br>
                <p>Онлайн авах үнэ: </p>
                <p class="colorRed" >${productPrice}</p>
                <br>
                <br>
                <button class="sags-buttons" id="add-to-cart" >сагсанд нэмэх
                    <!--    <i class="fa-solid fa-cart-shopping animate-cart"></i>  -->
                    <img src="${productImg}" class="animate-cart">
                </button>
                <a href="./cart/cart.html" > <button  style="margin-left: 10px;" class="sags-buttons" >Сагс</button> </a> 
                <br>
                <br>
                <br>
                <div class="setCount">
                    <div onclick="minusCount()" class="minus">-</div>
                    <div class="count">1</div>
                    <div class="plus">+</div>
                </div>
            </div>
        </div>
        `)
    }






    
    // document.getElementsByClassName('grid-item').style.hoverEffect = 'none'
    }
})

//         uzeh   function is up THERE !!!!



// function uzeh() {
//     // document.querySelector('.fixed-parent').style.display = 'flex';

//     document.querySelector('.fixed-parent').insertAdjacentHTML('afterbegin' , `
//     <div class="fixed-header">
//         Shoppy.mn
//         <i onmouseover="showFixedCart()" onmouseleave="hideFixedCart()" class="fa-solid fa-cart-arrow-down">
//             <div id="fixed-cart" class="cart"></div>
//         </i>
//     </div>
//     <div class="cont">
//         <input type="text" value="9086772064522102" >
//         <div class="left">
//             <img src="https://cdn3.shoppy.mn/spree/images/1307725/product/open-uri20220415-1859205-ouc9lb." alt="">
//         </div>

//         <div class="right">
//             <i onclick="cancelUzeh()" class="fa-solid fa-arrow-right-from-bracket"></i>
//             <h2>TRAVEL KIT PACK M999999</h2>
//             <p>Урт оосортой жижиг цүнх</p>
//             <br>
//             <br>
//             <p>Онлайн авах үнэ</p>
//             <p>99,000 ₮</p>
//             <br>
//             <br>
//             <button id="add-to-cart" >сагсанд нэмэх</button>
//             <button>худалдан авах</button>
//             <div class="setCount">
//                 <div onclick="minusCount()" class="minus">-</div>
//                 <div class="count">1</div>
//                 <div onclick="addCount()" class="plus">+</div>
//             </div>
//         </div>
//     </div>
//     `)
// }
function cancelUzeh() {
    document.querySelector('.fixed-parent').replaceChildren('')
    document.querySelector('.fixed-parent').style.display = 'none'
}


// --------------------------------------------------------------------------------------------


if(localStorage.cart === undefined || localStorage.cart === '[]') {
    cart = []
} else {
    cart = JSON.parse(localStorage.cart) 
}






//             addToCart function is down here  __>

document.addEventListener('click', (par) => {
    if(par.target.id === 'add-to-cart') {
        let ifAlreadyAdded = '';
        sagsandNemeh = document.querySelector('#add-to-cart')
        count = document.querySelector('.count')
        let productId = sagsandNemeh.parentElement.parentElement.firstElementChild.value;


        cart.forEach((arg) => {
            if(arg.productId == productId) {
                ifAlreadyAdded = 'already added'
            } 
        })
        
        if(ifAlreadyAdded === '') {
            let chosenProductImgSrc;
            chosenProductImgSrc = par.target.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild.src.toString()
            chosenProductPrice = par.target.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText;
            console.log(par.target.parentElement.firstElementChild.nextElementSibling)
            chosenProductName = par.target.parentElement.firstElementChild.nextElementSibling.innerText;
            let productDetail = par.target.parentElement.firstElementChild.nextElementSibling.nextElementSibling.innerText
            cart.push({productId: productId, count: count.innerText, productName: chosenProductName, productPrice: chosenProductPrice, productImg: chosenProductImgSrc, productDetail: productDetail})
        
        } 

        localStorage.cart = JSON.stringify(cart)
        ifAlreadyAdded = '';

        document.querySelector('.animate-cart').style.animation =  'added .7s ease';

        setTimeout(() => location.href = "./cart/cart.html" , 700)

        
    }
})

//             addToCart function is up here  -->


// function addCount() {
//     let too = parseInt(document.queryeSlector('.count').innerText)

//     too += 1;
//     document.querySelector('.count').innerText = too; 
// }






//          plus function is down here  !!!!
let psda;

document.addEventListener('click', (arg) => {
    if(arg.target.className === 'plus') {
        let too = parseInt(document.querySelector('.count').innerText)
        psda = arg.target

        if( too < arg.target.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.lastElementChild.innerText) {
            too += 1;
            document.querySelector('.count').innerText = too; 
        }
        console.log(psda)
    }
})


function minusCount() {
    let too = parseInt(document.querySelector('.count').innerText)
    if(too > 1) {
        too -= 1;
    }
    document.querySelector('.count').innerText = too; 
}




function showCart() {
    document.querySelector('.cart').style.display = 'flex';

    let howManyInCart = 0
    let niitDun = 0


    howManyInCart = JSON.parse(localStorage.cart).length;


    if(localStorage.cart !== undefined && localStorage.cart !== '[]' ) {


        // +('46,200 ₮'.replaceAll( /[^0-9]/gi, ''))

        let result = 0;

        JSON.parse(localStorage.cart).forEach(
            (arg) => {
                result = result += (+(arg.productPrice.replaceAll( /[^0-9]/gi, '')) * +arg.count)

                //  123,4234,5423,,,,,,,  comma nemdeg function is down here
                // ------------------------------------------------------------------------------
                let too = result.toString();
                let arr = []

                for(let i = 0; i < too.toString().length; i++ ) {
                    arr.unshift(too.toString()[i])
                }

                let resultArr = []
                let resultShine = ''
                for( let i = 0; i < arr.length; i++) {
                    resultShine += arr[i]
                    resultArr.push(arr[i])
                    if(resultShine.toString().replaceAll(/,/g, '').length % 3 == 0) {
                        resultShine += ','
                        resultArr.push(',')
                    }
                }

                if(resultArr[resultArr.length - 1] === ',') {
                    resultArr.pop()
                }

                resultArr.reverse()
                resultArr = resultArr.join('')

                // ------------------------------------------------------------------------------
                //  123,4234,5423,,,,,,,  comma nemdeg function is up here

                niitDun = resultArr + ' ₮'
            }
        )
    } 
    else {
        howManyInCart = 0
    }


    document.querySelector('.cart').insertAdjacentHTML('afterbegin' , 
        `
            <div class="hover-cart-footer" > 
                <h4>Нийт бараа: <span class="hover-cart-howMany" > ${howManyInCart} </span> </h4>
                <h5 class="hover-cart-h5" >Нийт дүн: <span class="hover-cart-niitDun" > ${niitDun} </span> </h5>
            </div>
        `
    )


    if(localStorage.cart != undefined) {
        JSON.parse(localStorage.cart).forEach(
            (arg) => {
                console.log(arg)
                document.querySelector('.cart').insertAdjacentHTML('afterbegin' , `
                    <div class="hover-cart-parent" > 
                        <div class="singleProduct"> 
                            <div class="singleProductLeft">
                                <img src="${arg.productImg}" alt="">
                            </div>

                            <div class="singleProductMain">
                                <h6>${arg.productName}</h6>
                                <div class="singleProductMainPCont">
                                    <p>${arg.productPrice}</p>
                                    <p>тоо ширхэг:  ${arg.count}</p>
                                </div>
                            </div>

                            <div class="singleProductLeft">

                            </div>
                        </div>
                    </div>
                `)
            }
        )
    }
}



function showFixedCart() {
    document.querySelector('#fixed-cart').style.display = 'flex';
    JSON.parse(localStorage.cart).forEach(
        (arg) => {
            console.log(arg)
            document.querySelector('#fixed-cart').insertAdjacentHTML('afterbegin' , `
                <div class="singleProduct"> 
                    <div class="singleProductLeft">
                        <img src="${arg.productImg}" alt="">
                    </div>

                    <div class="singleProductMain">
                        <h6>${arg.productName}</h6>
                        <div class="singleProductMainPCont">
                            <p>${arg.productPrice}</p>
                            <p>тоо ширхэг:  ${arg.count}</p>
                        </div>
                    </div>

                    <div class="singleProductLeft">
                        <i class="fa-solid fa-x"></i>
                    </div>
                </div>
            `)
        }
    )
}

function hideCart() {
    document.querySelector('.cart').replaceChildren('')
    document.querySelector('.cart').style.display = 'none'
}


function hideFixedCart() {
    document.querySelector('#fixed-cart').replaceChildren('')
    document.querySelector('#fixed-cart').style.display = 'none'
}


// let psda1 = new Psda(88, 'Урт оосортой жижиг цүнх',  432442342323,  'https://cdn3.shoppy.mn/spree/images/1307725/product/open-uri20220415-1859205-ouc9lb.',  'TRAVEL KIT PACK M', '99,900 ₮')
// let psda2 = new Psda(12, 'wireless',  423423423764,  'https://cdn3.shoppy.mn/spree/images/1308465/small/open-uri20220418-1906795-n3z550.',  'Чихэвч', '120,000 ₮')
// let psda3 = new Psda(43, 'Скүүтэр - Цахилгаан',  423976964234234,  'https://cdn3.shoppy.mn/spree/images/634439/large/DSC09464.JPG',  'ЦАХИЛГААН СКҮҮТЭР', '1,600,000 ₮')
// let psda4 = new Psda(1, 'Дотоож', 1276967456756,  'https://cdn3.shoppy.mn/spree/images/1311992/large/4990600.jpg',  '3 CULOTTES', '67,860 ₮')
// let psda5 = new Psda(10, 'Кет (Сникерс)',  59679346346,  'https://cdn3.shoppy.mn/spree/images/1311772/large/221K-F12-2945-1.jpg',  'ПҮҮЗ', '109,800 ₮')
// let psda6 = new Psda(43, 'Дэр',  909679864837648,  'https://cdn3.shoppy.mn/spree/images/1310886/large/open-uri20220419-2005718-709vo6.',  'VILDKORN PILLOW', '46,200 ₮')
// let psda7 = new Psda(234, 'Малгай', 60456549679737,  'https://cdn3.shoppy.mn/spree/images/1306695/large/open-uri20220415-1797231-1a7ax6u.',  'GORE-TEX O.D. CAP', '149,000 ₮')
// let psda8 = new Psda(8, 'Чихэвч',  7356796798678,  'https://cdn3.shoppy.mn/spree/images/1308468/large/open-uri20220418-1906795-18s7t1k.',  'УТАСГҮЙ ЧИХЭВЧ', '119,800 ₮')

class Psda {
    constructor(availableAmount, productDetail,  productId,  productImg,  productName, productPrice ){
        availableAmount = availableAmount;
        productDetail = productDetail;
        productId = productId;
        productImg = productImg;
        productName = productName;
        productPrice = productPrice;
        return {availableAmount, productDetail,  productId,  productImg,  productName, productPrice }
    }
}


let psda1 = new Psda(99, 'Урт оосортой жижиг цүнх',  432442342323,  'https://cdn3.shoppy.mn/spree/images/1307725/product/open-uri20220415-1859205-ouc9lb.',  'TRAVEL KIT PACK M', "99,900 ₮")
let psda2 = new Psda(12, 'wireless',  423423423764,  'https://cdn3.shoppy.mn/spree/images/1308465/small/open-uri20220418-1906795-n3z550.',  'Чихэвч', "120,000 ₮" )
let psda3 = new Psda(43, 'Скүүтэр - Цахилгаан',  423976964234234,  'https://cdn3.shoppy.mn/spree/images/634439/large/DSC09464.JPG',  'ЦАХИЛГААН СКҮҮТЭР', "1,600,000 ₮")
let psda4 = new Psda(1, 'Дотоож', 1276967456756,  'https://cdn3.shoppy.mn/spree/images/1311992/large/4990600.jpg',  '3 CULOTTES', '67,860 ₮')
let psda5 = new Psda(10, 'Кет (Сникерс)',  59679346346,  'https://cdn3.shoppy.mn/spree/images/1311772/large/221K-F12-2945-1.jpg',  'ПҮҮЗ', '109,800 ₮')
let psda6 = new Psda(43, 'Дэр',  909679864837648,  'https://cdn3.shoppy.mn/spree/images/1310886/large/open-uri20220419-2005718-709vo6.',  'VILDKORN PILLOW', '46,200 ₮' )
let psda7 = new Psda(234, 'Малгай', 60456549679737,  'https://cdn3.shoppy.mn/spree/images/1306695/large/open-uri20220415-1797231-1a7ax6u.',  'GORE-TEX O.D. CAP', '149,000 ₮')
let psda8 = new Psda(8, 'Чихэвч',  7356796798678,  'https://cdn3.shoppy.mn/spree/images/1308468/large/open-uri20220418-1906795-18s7t1k.',  'УТАСГҮЙ ЧИХЭВЧ', '119,800 ₮' )

// localStorage.aguulah = JSON.stringify( [psda1, psda2, psda3, psda4, psda5, psda6, psda7, psda8] )


// new Psda(100, 'psda', 1111111, "god damn zurag", 'novshiin ner', '$ 9900' )


// availableAmount: 88
// productDetail: "Урт оосортой жижиг цүнх"
// productId: 340923840923
// productImg: "https://cdn3.shoppy.mn/spree/images/1307725/product/open-uri20220415-1859205-ouc9lb."
// productName: "TRAVEL KIT PACK M"
// productPrice: "99,900 ₮"






function productSync() {
    
    if(localStorage.aguulah !== undefined) {
        let aguulah = JSON.parse(localStorage.aguulah);

        


        aguulah.forEach(
            (arg) => {
                if(arg.availableAmount > 0) {
                    main.insertAdjacentHTML('afterbegin' , `
                    <div class="grid-item">
                        <input type="text" value="${arg.productId}" >
                        
                        <div class="product-image">
                            <img src="${arg.productImg}" alt="">
                        </div>
                        
                        <div class="product-info">
                            <h3>${arg.productName}</h3>
                            <h6 class="aguulah" >Агуулах:  <span class="aguulah-span" >${arg.availableAmount}</span>  </h6>
                            <p class="font-small" >${arg.productDetail}</p>
                            <p class="colorRed" >${arg.productPrice}</p>
                            <button class="uzeh" id="uzeh" >Үзэх</button>
                        </div>
                    </div>
                    `)
                } else {
                    main.insertAdjacentHTML('afterbegin' , `
                    <div class="grid-item">
                        <input type="text" value="${arg.productId}" >
                        
                        <div class="product-image">
                            <img src="${arg.productImg}" alt="">
                        </div>
                        
                        <div class="product-info">
                            <h3>${arg.productName}</h3>
                            <h6 style="color: red" class="aguulah" >Агуулах:  <span style="font-size: large" class="aguulah-span" > Бараа дууссан ! </span>  </h6>
                            <p class="font-small" >${arg.productDetail}</p>
                            <p class="colorRed" >${arg.productPrice}</p>
                            <button class="uzeh" id="uzeh" >Үзэх</button>
                        </div>
                    </div>
                    `)
                }
            }
        )
    
    
    }
}

productSync();
displayCartLengthFunction()