"use strict"
const unreadBlock = document.querySelectorAll('.unread-item');
const unreadMark = document.querySelectorAll('.unread');
const counter = unreadBlock.length;

document.getElementById("counter").innerHTML = counter;

document.getElementById('btn').onclick = function() {
    
    for(let i = 0; i < unreadBlock.length; i++) {
        unreadBlock[i].classList.remove('unread-item');
        unreadMark[i].classList.remove('unread');
    }
    let counter = 0;
    document.getElementById("counter").innerHTML = counter;
}

