function newTime(){
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();


    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    $('.Coffemashine_controlPanel_time').text(hours + ':' + minutes + ':' + seconds);
}
setInterval(newTime, 1000);
$('.Coffemashine_controlPanel_button').click(function(){
    $('.Coffemashine_controlPanel_screen1').css('display', 'none')
    $('.Coffemashine_controlPanel_screen2').css('display', 'flex')
})
$('#screen2_right').click(function(){
    $('.Coffemashine_controlPanel_screen2').css('display', 'none')
    $('.Coffemashine_controlPanel_screen3').css('display', 'flex')
})
$('#screen3_right').click(function(){
    $('.Coffemashine_controlPanel_screen3').css('display', 'none')
    $('.Coffemashine_controlPanel_screen4').css('display', 'flex')
})
$('#screen4_right').click(function(){
    $('.Coffemashine_controlPanel_screen4').css('display', 'none')
    $('.Coffemashine_controlPanel_screen5').css('display', 'flex')
})
$('#screen5_right').click(function(){
    $('.Coffemashine_controlPanel_screen5').css('display', 'none')
    $('.Coffemashine_controlPanel_screen2').css('display', 'flex')
})
$('#screen2_left').click(function(){
    $('.Coffemashine_controlPanel_screen2').css('display', 'none')
    $('.Coffemashine_controlPanel_screen5').css('display', 'flex')
})
$('#screen3_left').click(function(){
    $('.Coffemashine_controlPanel_screen3').css('display', 'none')
    $('.Coffemashine_controlPanel_screen2').css('display', 'flex')
})
$('#screen4_left').click(function(){
    $('.Coffemashine_controlPanel_screen4').css('display', 'none')
    $('.Coffemashine_controlPanel_screen3').css('display', 'flex')
})
$('#screen5_left').click(function(){
    $('.Coffemashine_controlPanel_screen5').css('display', 'none')
    $('.Coffemashine_controlPanel_screen4').css('display', 'flex')
})
$('.choose_button').click(function(){
    $('.Coffemashine_controlPanel_coffeChoose').css('display', 'none')
    $('.Coffemashine_controlPanel_coffeMaking').css('display', 'flex')
})
$('.Coffemashine_controlPanel_coffeMaking_cupSizeBtn').click(function(){
    $('.Coffemashine_controlPanel_coffeMaking').css('display', 'none')
    $('.Coffemashine_controlPanel_coffeMakingProgress').css('display', 'flex')

})
$('#cupSize50ml').click(function(){
    changeWaterLevel(50);
});
$('#cupSize100ml').click(function(){
    changeWaterLevel(100);
});
$('#cupSize150ml').click(function(){
    changeWaterLevel(150);
});
$('#cupSize200ml').click(function(){
    changeWaterLevel(200);
});
function changeWaterLevel(amount) {
    let coffemashineWater = $('.coffemashineWater');
    let currentHeight = parseInt(coffemashineWater.css('height'));

    if (currentHeight - amount <= 0) {
        let messageAudio = document.getElementById('messageAudio');
        let messageRespondAudio = document.getElementById('messageRespondAudio');

        setTimeout(() => {
            $('#WaterNoneChat_message1').css('display', 'flex');
            messageAudio.play();
        }, 13000);
        setTimeout(() => {
            $('#WaterNoneChat_message2').css('display', 'flex');
            messageAudio.play();
        }, 16000);
        setTimeout(() => {
            $('.WaterNoneChat_message2_respond').css('display', 'flex');
        }, 19000);

        currentHeight = 0;

        $('.WaterNoneChat_message2_respond').click(function(){
            messageRespondAudio.play();
            $('.WaterNoneChat').css('display', 'none');
            $('.coffemashineWater').css('height', '400px');
            currentHeight = 400;

            
            WaterNoneMessage();
        });
    } else {
        currentHeight -= amount; 
    }

    coffemashineWater.css('height', currentHeight + 'px');
}
function WaterNoneMessage() {
    $('.WaterNoneChat_message2_respond').click(function(){
        messageRespondAudio.play();
        $('.WaterNoneChat').css('display', 'none');
        $('.coffemashineWater').css('height', '400px');
        currentHeight = 400;
        WaterNoneMessage();
    });
}
WaterNoneMessage();
function changeCoffeLevel1(Coffeamount1) {
    let coffemashineCoffe1 = $('#Coffemashine_coffeContainer_coffe1');
    let currentHeightCoffe1 = parseInt(coffemashineCoffe1.css('height'));

    if (currentHeightCoffe1 - Coffeamount1 <= 0) {
        alert('Left coffe container is empty!')
        currentHeightCoffe1 = 0;
    }else {
        currentHeightCoffe1 -= Coffeamount1; 
    }

    coffemashineCoffe1.css('height', currentHeightCoffe1 + 'px');
}
function changeCoffeLevel2(Coffeamount2) {
    let coffemashineCoffe2 = $('#Coffemashine_coffeContainer_coffe2');
    let currentHeightCoffe2 = parseInt(coffemashineCoffe2.css('height'));

    if (currentHeightCoffe2 - Coffeamount2 <= 0) {
        alert('Left coffe container is empty!')
        currentHeightCoffe2 = 0;
    }else {
        currentHeightCoffe2 -= Coffeamount2; 
    }

    coffemashineCoffe2.css('height', currentHeightCoffe2 + 'px');
}
$('#cupSize50ml').click(function(){
    changeCoffeLevel2(3)
    $('.cup').css('width', '70px');
    $('.cup').css('margin-left', '15px');
    setTimeout(() => {

        $('.cup').css('display', 'flex');
        changeWaterLevel(0.5)
    }, 1000);

    setTimeout(() => {
        $('.Coffemashine_controlPanel_pourCoffe_coffe').css('height', '170px');

        let pouringSound = document.getElementById('pouringSound');
        pouringSound.play();
    }, 4000);

    setTimeout(() => {
        $('.Coffemashine_controlPanel_pourCoffe_coffe').css('height', '0px');
    }, 8000);

    setTimeout(() => {
        $('.Coffemashine_controlPanel_coffeMakingProgress').css('display', 'none');
        $('.Coffemashine_controlPanel_coffeReady').css('display', 'flex');
    }, 9000);

    setTimeout(() => {
        $('.Coffemashine_controlPanel_coffeReady').css('display', 'none');
        $('.Coffemashine_controlPanel_coffeChoose').css('display', 'flex');
    }, 12000);


});
$('#cupSize100ml').click(function(){
    changeCoffeLevel2(4)
      $('.cup').css('width', '100px');
      $('.cup').css('margin-left', '20px');

      setTimeout(() => {
  
          $('.cup').css('display', 'flex');
          changeWaterLevel(1)
      }, 1000);
  
      setTimeout(() => {
          $('.Coffemashine_controlPanel_pourCoffe_coffe').css('height', '170px');
          let pouringSound = document.getElementById('pouringSound');
          pouringSound.play();
      }, 4000);
  
      setTimeout(() => {
          $('.Coffemashine_controlPanel_pourCoffe_coffe').css('height', '0px');
      }, 8000);
  
      setTimeout(() => {
          $('.Coffemashine_controlPanel_coffeMakingProgress').css('display', 'none');
          $('.Coffemashine_controlPanel_coffeReady').css('display', 'flex');
      }, 9000);
  
      setTimeout(() => {
          $('.Coffemashine_controlPanel_coffeReady').css('display', 'none');
          $('.Coffemashine_controlPanel_coffeChoose').css('display', 'flex');
      }, 12000);
  });
$('#cupSize150ml').click(function(){
    changeCoffeLevel1(4)
    $('.cup').css('width', '130px');
    $('.cup').css('margin-left', '24px');

    setTimeout(() => {

        $('.cup').css('display', 'flex');
        changeWaterLevel(1.5)
    }, 1000);

    setTimeout(() => {
        $('.Coffemashine_controlPanel_pourCoffe_coffe').css('height', '170px');
        let pouringSound = document.getElementById('pouringSound');
        pouringSound.play();
    }, 4000);

    setTimeout(() => {
        $('.Coffemashine_controlPanel_pourCoffe_coffe').css('height', '0px');
    }, 8000);

    setTimeout(() => {
        $('.Coffemashine_controlPanel_coffeMakingProgress').css('display', 'none');
        $('.Coffemashine_controlPanel_coffeReady').css('display', 'flex');
    }, 9000);

    setTimeout(() => {
        $('.Coffemashine_controlPanel_coffeReady').css('display', 'none');
        $('.Coffemashine_controlPanel_coffeChoose').css('display', 'flex');
    }, 12000);
});
$('#cupSize200ml').click(function(){
    changeCoffeLevel1(5)
    $('.cup').css('width', '150px');
    $('.cup').css('margin-left', '30px');

    setTimeout(() => {

        $('.cup').css('display', 'flex');
        changeWaterLevel(2)
    }, 1000);

    setTimeout(() => {
        $('.Coffemashine_controlPanel_pourCoffe_coffe').css('height', '170px');
        let pouringSound = document.getElementById('pouringSound');
        pouringSound.play();
    }, 4000);

    setTimeout(() => {
        $('.Coffemashine_controlPanel_pourCoffe_coffe').css('height', '0px');
    }, 8000);

    setTimeout(() => {
        $('.Coffemashine_controlPanel_coffeMakingProgress').css('display', 'none');
        $('.Coffemashine_controlPanel_coffeReady').css('display', 'flex');
    }, 9000);

    setTimeout(() => {
        $('.Coffemashine_controlPanel_coffeReady').css('display', 'none');
        $('.Coffemashine_controlPanel_coffeChoose').css('display', 'flex');
    }, 12000);
});




