let cart;
const main = document.querySelector('main');
// const howManyInCart = document.querySelector('#howManyInCart')
// const niitDun = document.querySelector('.niit-dun')




//    buy hesgees garah tovch

function deleteFixedParent() {
    document.querySelector('.fixed-parent').remove()
}



///  howManySync  n  niit dung & niit baraanii hemjeeg update hiine
function howManySync() {

    if(localStorage.cart !== undefined && localStorage.cart !== '[]' ) {
        const howManyInCart = document.querySelector('#howManyInCart')
        const niitDun = document.querySelector('.niit-dun')


        howManyInCart.innerText = JSON.parse(localStorage.cart).length;

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

                niitDun.innerText = resultArr + ' ₮'
            }
        )
    } 
    else {
        howManyInCart.innerText = 0
        // niitDun.innerText = 0
    }
}


function ifCartEmpty() {
    if(localStorage.cart === undefined || localStorage.cart === '[]') {
        main.replaceChildren('')
        main.insertAdjacentHTML('afterbegin', `
            <img style="width: 400px; height: 200px; margin-top: 169px;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpo65oxvrHRHp7nt-NIqHStL4G3nQ1qYPbUP81__WkpluiYwX3I3W_jmlJN6Uv4WYpYDw&usqp=CAU">
            <p style="text-align: center; font-size: 30px; margin-top: 40px; " > Таны сагс хоосон байна </p>
        `)
        main.style.boxShadow = 'none'
    }  
}


function productSync() {      

    if(localStorage.cart != undefined && localStorage.cart != '[]' ) {
        cart = JSON.parse(localStorage.cart);
    } else if(localStorage.cart === undefined || localStorage.cart === '[]') {
        cart = undefined;
    }

    if(cart) {
        let buyBtn = document.createElement('div');
        buyBtn.className = 'buy';
        buyBtn.innerText = 'Худалдан авах';

        cart.forEach( 
            (arg) => {
                let product = document.createElement('div');
                product.className = 'product';

                product.insertAdjacentHTML('afterbegin', 
                    `
                    <div class="product-img">
                        <img src="${arg.productImg}" alt="">
                    </div>
        
                    <div class="product-info">
                        <div class="product-info-in">
                            <h3>${arg.productName}</h3>
                            <p style="font-size: 15px; " >${arg.productDetail}</p>  
                            <p>Сонгосон тоо ширхэг: ${arg.count}</p>
                            <p class="colorRed" >${arg.productPrice}</p>
                        </div>
        
                        <div class="product-info-2">
                            <div class="remove-from-cart">Сагсаас хасах</div>
                            <input style="display: none" type="text" value="${arg.productId}">
                        </div>
                    </div>
                    `
                )

                main.appendChild(product)
            } 
        ) 

        


        buyBtn.insertAdjacentHTML('afterbegin' , `

            <div class="total"> Нийт дүн:___ <span class="niit-dun" >0</span>  </div>
        `)


        main.appendChild(buyBtn)


    } 
    howManySync()

    ifCartEmpty()
}





//            product сагсаас хасах function is down HERE
document.addEventListener('click', (a) => {
    if(a.target.className === 'remove-from-cart') {
        a.target.parentElement.parentElement.parentElement.remove()
        let selectedProductId = a.target.nextElementSibling.value;
        let cart = JSON.parse(localStorage.cart); 
        let cartUpdate = [];
        
        cart.forEach((par) => {
            if(selectedProductId != par.productId) {
                cartUpdate.push(par)
            }
            
            localStorage.cart = JSON.stringify(cartUpdate)
            console.log(cartUpdate)
            howManySync()
        })

        howManySync()
        ifCartEmpty()
    }
})







// //               Худалдан авах  start

// document.addEventListener('click' , 
//     (arg) => {
//         if(arg.target.className === 'buy') {
//             let aguulah = JSON.parse(localStorage.aguulah)
//             let cart = JSON.parse(localStorage.cart)

//             // ------------------------------------------------------------------------------------------------------
//             let changed = []
            
//             aguulah.forEach(
//                 (a) => {
//                     for(let i = 0; i < cart.length; i++) {
//                         if(a.productId == cart[i].productId) {
//                             changed.push({...a,  availableAmount:  +a.availableAmount - +cart[i].count  })
//                         }
//                     }
//                 }
//             )
            
            
//             let i = 0;
//             let update = []
            
//             aguulah.forEach(
//                 (arg) => {
//                     if(i < changed.length) {
//                         if(arg.productId == changed[i].productId) {
//                             update.push(changed[i])
//                             i++
//                             return
//                         }
//                     }
            
//                     update.push(arg)
//                 }
//             )
            
//             console.log(update)

//             localStorage.aguulah = JSON.stringify(update)

//             // ------------------------------------------------------------------------------------------------------










            
//             localStorage.removeItem('cart')
//             productSync()
//             howManySync()
//         }
//     }
// )

//               Худалдан авах  end






// if(localStorage.cart === undefined || localStorage.cart === '[]') {
//     main.insertAdjacentHTML('afterbegin', `
//         <img style="width: 400px; height: 200px; margin-top: 169px;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpo65oxvrHRHp7nt-NIqHStL4G3nQ1qYPbUP81__WkpluiYwX3I3W_jmlJN6Uv4WYpYDw&usqp=CAU">
//         <p style="text-align: center; font-size: 30px; margin-top: 40px; " > Таны сагс хоосон байна </p>
//     `)
//     main.style.boxShadow = 'none'
// }




// let newArr = [{name: 'javhaa'}].map((arg) => {
//     return {...arg, name: 'tselmuun'} 
// } )


//  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------




//               Худалдан авах  start



document.addEventListener('click', 
    (arg) => {
        if(arg.target.className === 'buy') {
            document.querySelector('body').insertAdjacentHTML('afterbegin' , 
                `
                <div class="fixed-parent">

                <i class="fa-solid fa-door-open" onclick="deleteFixedParent()"  ></i>
        
        
                <div class="fixed-address">
        
                    <div class="row">
                        <div class="row-left">
                            Street Address:
                        </div>
                        <div class="row-right">
                            <input type="text" placeholder="Street Address">
                        </div>
                    </div>
        
                    <div class="row">
                        <div class="row-left">
                            City:
                        </div>
                        <div class="row-right">
                            <input type="text" placeholder="City">
                        </div>
                    </div>
        
                    <div class="row">
                        <div class="row-left">
                            Country:
                        </div>
                        <div class="row-right">
                            <input type="text" placeholder="Country">
                        </div>
                    </div>
        
                    <div class="row">
                        <div class="row-left">
                            State:
                        </div>
                        <div class="row-right">
                            <input type="text" placeholder="State">
                        </div>
                    </div>
        
                    <div class="row">
                        <div class="row-left">
                            Zip Code:
                        </div>
                        <div class="row-right">
                            <input type="text" placeholder="Zip Code">
                        </div>
                    </div>
        
        
                    <div onclick="startPayment()" class="urgeljluuleh">
                        Үргэлжлүүрэх
                    </div>
        
                </div>
            </div>
                `
            )


        }
    }
)




function startPayment() {
    document.querySelector('.fixed-address').remove();
    document.querySelector('.fixed-parent').insertAdjacentHTML('afterbegin' , 
        `
        <div class="fixed-payment">
           
           
            <div class="payment-row payment-row-header">
                Payment Details
            </div>

            <div class="payment-row">
                Card Number
                <input type="text" placeholder="Valid Card Number" >
            </div>

            <div class="payment-row has-two-children">
                <div class="payment-row-left">
                    Expiration Date
                    <input type="text" placeholder="MM/YY" >
                </div>

                <div class="payment-row-right">
                    CV Code
                    <input type="text" placeholder="CVC" >
                </div>
            </div>

            <div class="payment-row">
                Coupon Code
                <input type="text" placeholder="Coupon Code" >
            </div>


            <div onclick="completePayment()" class="payment-end">
                Complete Payment
            </div>

        </div>
        `
    )
}



function completePayment() {
    document.querySelector('.fa-door-open').remove();
    document.querySelector('.fixed-payment').remove();
    document.querySelector('.fixed-parent').insertAdjacentHTML('afterbegin', 
        `
        <div class="fixed-payment-completed">
            

            <i class="fa-solid fa-circle-check"></i>

            <div class="order-success">
                Order Completed Successfully!
            </div>

            <div onclick="returnFunction()" class="return">
                Return
            </div>


        </div>
        `
    )
}


function returnFunction() {
    document.querySelector('.fixed-parent').remove();

    
    let aguulah = JSON.parse(localStorage.aguulah)
    let cart = JSON.parse(localStorage.cart)

    // ------------------------------------------------------------------------------------------------------
    let changed = []
    
    aguulah.forEach(
        (a) => {
            for(let i = 0; i < cart.length; i++) {
                if(a.productId == cart[i].productId) {
                    changed.push({...a,  availableAmount:  +a.availableAmount - +cart[i].count  })
                }
            }
        }
    )
    
    
    let i = 0;
    let update = []
    
    aguulah.forEach(
        (arg) => {
            if(i < changed.length) {
                if(arg.productId == changed[i].productId) {
                    update.push(changed[i])
                    i++
                    return
                }
            }
    
            update.push(arg)
        }
    )
    
    console.log(update)

    localStorage.aguulah = JSON.stringify(update)
}


















// document.addEventListener('click' , 
//     (arg) => {
//         if(arg.target.className === 'buy') {
//             let aguulah = JSON.parse(localStorage.aguulah)
//             let cart = JSON.parse(localStorage.cart)

//             // ------------------------------------------------------------------------------------------------------
//             let changed = []
            
//             aguulah.forEach(
//                 (a) => {
//                     for(let i = 0; i < cart.length; i++) {
//                         if(a.productId == cart[i].productId) {
//                             changed.push({...a,  availableAmount:  +a.availableAmount - +cart[i].count  })
//                         }
//                     }
//                 }
//             )
            
            
//             let i = 0;
//             let update = []
            
//             aguulah.forEach(
//                 (arg) => {
//                     if(i < changed.length) {
//                         if(arg.productId == changed[i].productId) {
//                             update.push(changed[i])
//                             i++
//                             return
//                         }
//                     }
            
//                     update.push(arg)
//                 }
//             )
            
//             console.log(update)

//             localStorage.aguulah = JSON.stringify(update)

//             // ------------------------------------------------------------------------------------------------------










            
//             localStorage.removeItem('cart')
//             productSync()
//             howManySync()
//         }
//     }
// )



productSync()