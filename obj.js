const mySym = Symbol("Key1")

const JsUser= {
    name:"Riesh",
    age : 18,
    [mySym]: "myKey1", 
    location:"Tasgaon",
    email:"ritesh@ghj.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]

}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email="ritesh@ghj.com"
Object.freeze(JsUser)
JsUser.email = "bdnfndjn@djd.com"
console.log(JsUser.email)