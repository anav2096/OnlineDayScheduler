
 
 var today = moment().format('dddd MMMM do YYYY');
 $("#currentDay").text(today);

 var hour = "";

 console.log(moment().format('H')); 

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

function updateColor(){
    var hour = new Date().getHours();
    for (var i= 8 ; i<=18; i++){
      console.log(hour,i)
      if(hour==i ) {
       $('textarea').addClass("present")
      }else  if(hour<i ){
       
        $('textarea').addClass("past")

      }else if (hour>i){
       $('textarea').addClass("future")
    }
  }}
  setInterval(function(){
    updateColor()
  },1000)



