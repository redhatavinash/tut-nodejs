// console.log(__dirname)

// // Functions

// setInterval(()=>{
// console.log("Hello World")
// },1000)

// Modules

const john='john'
const peter='peter'

// const sayHi=(name)=>{
//     console.log(`Hello there, ${name}`)
// }

const names=require('./4-names')
const sayHi=require('./5-utils')
const data=require('./6-alternative-flavor')
// console.log(data)
// console.log(names)
sayHi(names.john)
sayHi('susan')
sayHi(names.peter)

require('./7-mind-grenade')