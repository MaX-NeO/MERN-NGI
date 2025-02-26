let a = "Mohan" //String
a = 10 // Number
a = false //Boolean
console.log(a)
const b = "Mohan"
// b=10
console.log(b)
//Array
let array1 = [a, b, true, 10, "hello"]
console.log(array1)
console.log(array1[1])
//JS Object
let jsobj = {
    name: "a",
    age: 12,
    isalive: true
}
//JSON Object
let jsonobj = {
    "name": "a",
    "age": 12,
    "isalive": true
}
console.log(jsobj)
console.log(jsonobj)


function register(event) {
    event.preventDefault()
    // alert("submitted")
    let name = document.getElementById('name').value
    let phone = document.getElementById('phone').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value;
    if (password.length === 0) {
        alert("password can't be empty")
    } else {
        console.log(name)
        alert(name, phone, email, password)
    }
}