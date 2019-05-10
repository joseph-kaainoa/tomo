/*******************************
* File: index.js
* Author: joseph-kaainoa
* Last Modified: 2019-05-09
* Purpose: drives index page
*******************************/
//const Tomogachi = require('./tomo');
import Tomogachi from './tomo.js';


(function () {
    "use strict";

    // declare pet
    const myPet = new Tomogachi('Pikachu', 'cat');

    /*
        Bind event handlers
    */
    document.getElementById('actionFeed').addEventListener('click', () => {
        alert(myPet.feed());
    });
    document.getElementById('actionExercise').addEventListener('click', () => {
        myPet.exercise();
    });
    document.getElementById('actionLook').addEventListener('click', () => {
        alert(myPet.showType());
    });
    document.getElementById('actionTalk').addEventListener('click', () => {
        alert(myPet.talk());
    });
    document.getElementById('actionStatus').addEventListener('click', () => {
        alert(`Power Level: ${myPet.powerLevel}\r\nFood Level: ${myPet.foodLevel}`);
    });
    document.getElementById('actionSay').addEventListener('click', () => {
        //alert(myPet.actionSay());
    });


})();