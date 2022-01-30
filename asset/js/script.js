
 
 var today = moment().format('dddd MMMM do YYYY');
 $("#currentDay").text(today);

 var hour = "";

for (i=0; i<10; i++) {

    $(".container").append($(`<div id="row-0${i+1}" class="row time"><div id="time-0${i+1}" class="col-md-1 col-sm-1 col-2 hour"></div><textarea id="text-0${i+1}" class="col-md-10 col-sm-8 col-8"></textarea><button class="col-md-1 col-sm-1 col-sm-1 col-2 saveBtn"><i class="far fa-save"></i></button></div>`))
    
};

for (var index = 8; index < 17; index++) {
    if (index < 12) {
        $('.row').children('.hour').eq(index - 8).text(`${index} AM`)                   
    } else if (index === 12) {
        $('.row').children('.hour').eq(index - 8).text(`${index} PM`)
    } else {
        $('.row').children('.hour').eq(index - 8).text(`${index - 12} PM`)
    }
}

if (index == moment().format('H')) {                                                
    $('time-0${i+1}').eq(index - 8).addClass('present')
} else if (index < moment().format('H')) {
    $('time-0${i+1}').eq(index - 8).addClass('past')
} else {
    $('time-0${i+1}').eq(index - 8).addClass('future')
}

