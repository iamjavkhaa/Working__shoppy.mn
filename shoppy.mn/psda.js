// let aguulah = [
//     {name: 'javhaa' , id: 134290 , amount: 1000} ,
//     {name: 'tselmuun' , id: 879427 , amount: 1000} ,
//     {name: 'mandah' , id: 98899 ,   amount: 1000} ,
//     {name: 'hulan' , id: 11119 ,   amount: 1000}
// ]

// let cart = [
//     {id: 134290, count: '1'} ,
//     {id: 879427, count: '1'} 
// ]

// let changed = []

// aguulah.forEach(
//     (a) => {
//         for(let i = 0; i < cart.length; i++) {
//             if(a.id == cart[i].id) {
//                 changed.push({...a,  amount:  +a.amount - +cart[i].count  })
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