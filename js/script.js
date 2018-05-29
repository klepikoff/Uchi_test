'use strict';
(function () {
    function randomInteger(min, max) {
        var rand = min + Math.random() * (max + 1 - min);
        rand = Math.floor(rand);
        return rand;
      }

    var firstRandom = randomInteger(6, 9);
    var secondRandom = randomInteger(11, 14) - firstRandom;

    var sumRandom = firstRandom + secondRandom;
    
    var equationFirst = document.querySelector('.equation__first');
    equationFirst.innerHTML = firstRandom;
    var equationSecond = document.querySelector('.equation__second');
    equationSecond.innerHTML = secondRandom;

    var equationAnswer = document.querySelector('.equation__answer');

    var ctx = document.getElementById('canvas').getContext('2d');
    var img = new Image();
    var step = 39.5;
    var dX = 30 + step * firstRandom;
        
    img.onload = function(){
        ctx.drawImage(img, 0, 100);
        ctx.strokeStyle='red';
        ctx.beginPath();
        ctx.moveTo(36,120);           
        ctx.bezierCurveTo(36, 120, dX / 2, 30 - firstRandom, dX, 120);
 
        ctx.stroke();
    };

    img.src = 'img/sprite.png';
    
    var firstInput = document.querySelector('.first__input');
    var secondInput = document.querySelector('.second__input');
    firstInput.setAttribute('style', 'left: ' + (50 + step * firstRandom ) / 2 + 'px');
   
    firstInput.addEventListener('keyup', function() {
        if(firstInput.value != firstRandom){
            firstInput.setAttribute('style', 'color: red; left: ' + (20 + dX) / 2 + 'px');
            equationFirst.setAttribute('style', 'background: orange');
                        
        } else {
            firstInput.setAttribute('disabled', 'disabled');
            firstInput.setAttribute('style', 'left: ' + (20 + dX) / 2 + 'px');  
            equationFirst.setAttribute('style', 'background: none');
            

            ctx.beginPath();
            ctx.moveTo(dX, 120);           
            ctx.bezierCurveTo(dX, 120, dX + step * secondRandom / 2, 50 - secondRandom, dX + step * secondRandom, 120);
            ctx.stroke();

            secondInput.removeAttribute('hidden');
            secondInput.setAttribute('style',  'left: ' + (dX + step * secondRandom / 2 ) + 'px');
        }


    console.log(firstInput.value);
    console.log(firstRandom);

    });

    secondInput.addEventListener('keyup', function() {
        if(secondInput.value != secondRandom){
          secondInput.setAttribute('style', 'color: red; left: ' + (dX + step * secondRandom / 2 ) + 'px');
         equationSecond.setAttribute('style', 'background: orange');
        } else {
          secondInput.setAttribute('disabled', 'disabled');
          secondInput.setAttribute('style', 'left: ' + (dX + step * secondRandom / 2 ) + 'px');  
         equationSecond.setAttribute('style', 'background: none');
         equationAnswer.removeAttribute('disabled', 'disabled');
         equationAnswer.removeAttribute('value', 'value');
        }
    });

    equationAnswer.addEventListener('keyup', function() {
         if(equationAnswer.value != sumRandom){
         equationAnswer.setAttribute('style', 'color: red');
         } else {
          equationAnswer.setAttribute('style', 'color: black; border: none; margin: 2px;');
         equationAnswer.setAttribute('disabled', 'disabled');
         }
    });
})();
