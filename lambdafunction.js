'use strict';

console.log('Loading function');

    exports.handler = (event, context, callback) => {
    //callback(null,"Got itt")
    //console.log('Received event:', JSON.stringify(event, null, 2));
    console.log('value1 =', event.key1);
    //console.log('value2 =', event.key2);
    //console.log('value3 =', event.key3);
    if(event.key1=="HEY")
        {
            callback(null, "HELLO");
        }
    else if(event.key1=="HOW ARE YOU DOING?")
        {
            callback(null, "I am doing good");
        }
    else if(event.key1=="YOU ARE AWESOME")
        {
            callback(null, "Thank you, I know that!");
        }
        else
        {
            callback(null,"Sorry couldnt understand. Wait for smarter version. Try 'Hey'");
        }
}