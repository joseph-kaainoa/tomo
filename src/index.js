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
    const pet = new Tomogachi('Pikachu', 'cat');

    /*
        Bind event handlers
    */
    document.getElementById('actionFeed').addEventListener('click', () => {
        alert(pet.feed());
    });
    document.getElementById('actionExercise').addEventListener('click', () => {
        pet.exercise();
    });
    document.getElementById('actionLook').addEventListener('click', () => {
        alert(pet.showType());
    });
    document.getElementById('actionTalk').addEventListener('click', () => {
        alert(pet.talk());
    });
    document.getElementById('actionStatus').addEventListener('click', () => {
        alert(`Power Level: ${pet.powerLevel}\r\nFood Level: ${pet.foodLevel}`);
    });
    document.getElementById('actionSay').addEventListener('click', () => {
        //alert(pet.actionSay());
    });


})();