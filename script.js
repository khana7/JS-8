//task-3
// const getId = (arr) => {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         newArr = [...newArr, arr[i].id]
//     }
//     return newArr
// }
// console.log(getId([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]))

//task-4
// const getTag = (arr) => {
//     let newArr = []
//     for(i = 0; i < arr.length; i++){
//         let str = `<h1>${arr[i]}</h1>`
//         newArr = [...newArr, str]
//     }
//     return newArr
// } 
// console.log(getTag([1,2]))

//task-5
// const isEven = (arr) => {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i].length % 2 === 0){
//             newArr = [...newArr, arr[i]]
//         }
//     }
//     return newArr
// }
// console.log(isEven(['ab','abc','abcd','a','helloo']))

//task-6
// const multiplyByTwo = (arr) => {
//     let newArr = []
// for (i = 0; i < arr.length; i++){
//     if(arr[i] * 2 % 10 === 0){
//         newArr = [...newArr, arr[i] * 2]
//     }
// }
// return newArr
// }
// console.log(multiplyByTwo([1,2,3,7,10,5]))

//task-7
// const isTrue = (arr) => {
//     let newArr = []
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] === true) {
//             newArr = [...newArr, arr[i]]
//         }
//     }
//     return newArr
// }
// console.log(isTrue([false, true, true, false]))

//task-10
// const trueOrFalse = (arr) =>{
//     return arr.reduce((acc,rec) => {
//      return acc && rec
//     },true)
// }
// console.log(trueOrFalse([true,true,true,false]))

//task-11
// const getObj = (arr) => {
//     return arr.reduce ((acc, rec, idx) => {
//         (acc[`field${idx + 1}`] = rec) 
//         return acc
//     }, {})
// }
// console.log(getObj([true, 1, 'wow', 'you are smart, bro']))

//task-12
// const newObj = (obj) => {
//     let result = Object.keys(obj)
//     for (let i = 0; i < result.length; i++) {
//         let value = obj[result[i]]
//         if (typeof value !== "string") {
//             delete obj[result[i]]
//         }
//     }
//     return obj
// }
// console.log(newObj({ name: 'Baha', isAdmin: true }))