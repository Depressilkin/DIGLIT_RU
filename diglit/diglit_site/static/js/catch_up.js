let count = 0
let timing= 50
let stepLeft= 0
let stepForward =0
function moveHead(){
     if (count >5){
     $('h1').text('WIN')
     return false
    };
     $('h1').offset({top: stepForward, left:stepLeft })
     if ((stepForward<500)&&(stepLeft==0)){
         stepForward++
     };
     if ((stepForward==500) && (stepLeft<500)){
         stepForward=500
         stepLeft++
     }
     if ((stepForward>0) && (stepLeft==500)){
         stepLeft=500
         stepForward--
     };

     if ((stepForward==0) && (stepLeft>0)){
         stepForward=0
         stepLeft--
     };

    };

    let interval = setInterval(moveHead,timing)
    if (moveHead == false){
     clearInterval(interval)
    }
    $('#head').click(function (){
     count+=1
     timing-=10
     interval = setInterval(moveHead,timing)
    });
