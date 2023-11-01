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