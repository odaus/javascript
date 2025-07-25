// let student1 = {
//     firstName : "Farhiya",
//     lastName : "Ali",
//     age : 30,
// }

// let student2 = {
//    firstName : "Mohamed",
//    lastName : "Bilal",
//    age : 20,
// }

// console.log(`the age is ${student1.age}`) // embed variable into string

// let person = new Object()
// person.firstName = "Ali"
// person.age = 20

// person.talk = function(){
//     console.log("this person is talking")
// }

// person.talk()

// let person = {}
// console.log(person)
// person["firstName"] = "Ahmed"
// console.log(person)

// let person = {
//     firstName : "Maryan",
//     age : 20,
// }

// let {firstName} = person // deconstructing
// console.log(firstName)

let person = {
    firstName : "Maryam",
    surname : "Burhan",
    age : 20,
    isMarried : false
}

for (let prop in person){
    console.log(person[prop])
}
