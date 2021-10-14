var events = require("events")
var utils = require('util')

// var myEmitter = new events.EventEmitter();

// myEmitter.on('some event', (msg) => {
//     console.log(msg)
// })

// myEmitter.emit('some event', 'hello world')
var person = function (name){
    this.name = name
}

utils.inherits(person, events.EventEmitter)

var rahul = new person('Rahul');
var sagar = new person('Sagar');

var people = [rahul, sagar];

people.forEach((user) => {
    user.on('speak', (mssg) => {
        console.log(`${user.name} said : ${mssg}`)
    })
})

rahul.emit('speak', 'How are you?')
sagar.emit('speak', "I'm good, what about you?")
rahul.emit('speak', "i'm also good")