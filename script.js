(function(){
  
    let main = document.querySelector('.main');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.clear');
    let equal = document.querySelector('.equal');
    

    buttons.forEach(function(button){
      button.addEventListener('click', function(e){
        let value = e.target.dataset.num;
        main.value += value;
      })
    });
    
    equal.addEventListener('click', function(e){
      if(main.value === ''){
        main.value = 'Please Enter a Value';
      } else {
        let answer = eval(main.value);
        main.value = answer;
      }
    })
    
    clear.addEventListener('click', function(e){
      main.value = '';
    })

  })();





// let counter=1;

// while(counter <= 10){
//     document.write('aman <br>');
//     counter++;
// }



// function clickMe(){
//     var num = document.getElementById('demo').value;
// var num = prompt('Enter a Day');
//     let day;
//     switch (parseInt(num)) {
//         case 0:
//             day = "Sunday";
//             break;
//         case 1:
//             day = "Monday";
//             break;
//         case 2:
//             day = "Tuesday";
//             break;
//         case 3:
//             day = "Wednesday";
//             break;
//         case 4:
//             day = "Thursday";
//             break;
//         case 5:
//             day = "Friday";
//             break;
//         case 6:
//             day = "Saturday";
//             break;
//         default:
//             day = "You Enter Wrong Day";
//             break;
//     }
//     document.getElementById("demo").innerHTML = "Today is " + day;
// }

// const date = new Date();
//     console.log("current Time", date);
 

