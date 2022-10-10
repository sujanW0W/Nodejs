//Event Emitter

const EventEmitter = require('events')

const customEmitter = new EventEmitter(); //an instance of EventEmitter

//two method  - on and emit
//on - listens for an event
//emit - emit and event

//when event gets emit, the on method listens to the event.

customEmitter.on( 'response', (name, id) => {
    console.log(`Event occured and listened from ${name}  with id = ${id}.`)
})

customEmitter.on('response', () => {
    console.log('Some other logics')
})


customEmitter.emit('response', "sujan", 37)

//the event should be listened before it gets emitted. So it emit is placed before the listener, the listener cant listen to it.
//There can be multiple event listener for the exact same event. The listener gets executed in the order it is placed. So, there can be multiple listeners for a specific event, all the listeners gets executed in the order it is written. So, Order does matter.
//The parameters of the event can be listened or can not.
