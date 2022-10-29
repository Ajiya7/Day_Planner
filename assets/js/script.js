var textareacolor = document.querySelectorAll("textarea");

// TO DISPLAY THE CURRENT DATE
var day = moment().format("dddd, Do MMMM YYYY");
$("#currentDay").text(day); 

// TO STORE THE CURRENT HOUR OF THE DAY IN THE HOUR VARAIBLE
var hour = moment().hour();

// TO CHANGE THE COLOR OFTHE TECTAREA SEPENDIDNG ON THE TIME  OF THE DAY
for (let i = 0; i < textareacolor.length; i++) {
    var time = textareacolor[i].dataset.time 
    var htime = parseInt(time)
    if (hour > htime) {
        textareacolor[i].classList.add('past')
    } else if (hour == htime) {
        textareacolor[i].classList.add('present')
    } else {
        textareacolor[i].classList.add('future');
    }
}

// TO store the text inputed by the user to local storage and be displayed after being refreshed when the button has been clicked
$(".saveBtn").click(function (event) {
    event.preventDefault();
    let hourClicked = $(this).parent('section').children('textarea').data('time')
    let notesSaved = $(this).parent('section').children('textarea').val()
    localStorage.setItem('hour' + hourClicked, notesSaved)
})