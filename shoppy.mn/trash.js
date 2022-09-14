
// class Psda {
//     constructor(availableAmount, productDetail,  productId,  productImg,  productName, productPrice ){
//         availableAmount = availableAmount;
//         productDetail = productDetail;
//         productId = productId;
//         productImg = productImg;
//         productName = productName;
//         productPrice = productPrice;
//         return {availableAmount, productDetail,  productId,  productImg,  productName, productPrice }
//     }
// }


// let psda1 = new Psda(100, 'Урт оосортой жижиг цүнх',  432442342323,  'https://cdn3.shoppy.mn/spree/images/1307725/product/open-uri20220415-1859205-ouc9lb.',  'TRAVEL KIT PACK M', '99,900 ₮')
// let psda2 = new Psda(100, 'wireless',  423423423764,  'https://cdn3.shoppy.mn/spree/images/1308465/small/open-uri20220418-1906795-n3z550.',  'Чихэвч', '120,000 ₮')
// let psda3 = new Psda(100, 'Скүүтэр - Цахилгаан',  423976964234234,  'https://cdn3.shoppy.mn/spree/images/634439/large/DSC09464.JPG',  'ЦАХИЛГААН СКҮҮТЭР', '1,600,000 ₮')
// let psda4 = new Psda(100, 'Дотоож', 1276967456756,  'https://cdn3.shoppy.mn/spree/images/1311992/large/4990600.jpg',  '3 CULOTTES', '67,860 ₮')
// let psda5 = new Psda(100, 'Кет (Сникерс)',  59679346346,  'https://cdn3.shoppy.mn/spree/images/1311772/large/221K-F12-2945-1.jpg',  'ПҮҮЗ', '109,800 ₮')
// let psda6 = new Psda(100, 'Дэр',  909679864837648,  'https://cdn3.shoppy.mn/spree/images/1310886/large/open-uri20220419-2005718-709vo6.',  'VILDKORN PILLOW', '46,200 ₮')
// let psda7 = new Psda(100, 'Малгай', 60456549679737,  'https://cdn3.shoppy.mn/spree/images/1306695/large/open-uri20220415-1797231-1a7ax6u.',  'GORE-TEX O.D. CAP', '149,000 ₮')
// let psda8 = new Psda(100, 'Чихэвч',  7356796798678,  'https://cdn3.shoppy.mn/spree/images/1308468/large/open-uri20220418-1906795-18s7t1k.',  'УТАСГҮЙ ЧИХЭВЧ', '119,800 ₮')


// localStorage.aguulah = JSON.stringify( [psda1, psda2, psda3, psda4, psda5, psda6, psda7, psda8] )










// let aguulah = JSON.parse(localStorage.aguulah)

// let cart = [
//     {   count: 1 , 
//         productDetail: "Малгай", 
//         productId: "60456549679737" ,
//         productImg: "https://cdn3.shoppy.mn/spree/images/1306695/large/open-uri20220415-1797231-1a7ax6u." ,
//         productName: "GORE-TEX O.D. CAP" ,
//         productPrice: "149,000 ₮" 
//     } ,

//     {   
//         count: "1" ,
//         productDetail: "Чихэвч" ,
//         productId: "7356796798678" ,
//         productImg: "https://cdn3.shoppy.mn/spree/images/1308468/large/open-uri20220418-1906795-18s7t1k." ,
//         productName: "УТАСГҮЙ ЧИХЭВЧ" ,
//         productPrice: "119,800 ₮"  
//     }

// ]

// let changed = []

// aguulah.forEach(
//     (a) => {
//         for(let i = 0; i < cart.length; i++) {
//             if(a.productId == cart[i].productId) {
//                 changed.push({...a,  availableAmount:  +a.availableAmount - +cart[i].count  })
//             }
//         }
//     }
// )


// let i = 0;
// let update = []

// aguulah.forEach(
//     (arg) => {
//         if(i < changed.length) {
//             if(arg.id == changed[i].id) {
//                 update.push(changed[i])
//                 i++
//                 return
//             }
//         }

//         update.push(arg)
//     }
// )

// console.log(update)


let too = 123456789;
let arr = []

for(let i = 0; i < too.toString().length; i++ ) {
    arr.unshift(too.toString()[i])
}

let resultArr = []
let result = ''
for( let i = 0; i < arr.length; i++) {
    result += arr[i]
    resultArr.push(arr[i])
    if(result.replaceAll(/,/g, '').length % 3 == 0) {
        result += ','
        resultArr.push(',')
    }
}

if(resultArr[resultArr.length - 1] === ',') {
    resultArr.pop()
}

resultArr.reverse()

resultArr = resultArr.join('')

console.log(resultArr)