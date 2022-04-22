let cart;
const main = document.querySelector('main');
// const howManyInCart = document.querySelector('#howManyInCart')
// const niitDun = document.querySelector('.niit-dun')



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







//               Худалдан авах  start

document.addEventListener('click' , 
    (arg) => {
        if(arg.target.className === 'buy') {
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

            // ------------------------------------------------------------------------------------------------------










            
            localStorage.removeItem('cart')
            productSync()
            howManySync()
        }
    }
)

//               Худалдан авах  end



productSync()



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


