// JavaScript for Relaxr Website
$(document).ready(function(){

//when readmore is clicked, the word read more disappears and the content is shown with the slidedown method and an option for collapsing the information appears as read less.
$('.readmore').click(function(event){
  $('#show-this-on-click').slideDown();
  $('.readmore').hide();
  $('.readless').show();
  event.preventDefault();
});

//same as the readmore but in reverse.
$('.readless').click(function(event){
  $('#show-this-on-click').slideUp();
  $('.hide').hide();
  $('.readmore').show();
  event.preventDefault();
});

//shows additional information by clicking learn more and hides the word learn more
$('.learnmore').click(function(event){
  $('#learnmoretext').slideDown();
  $('.learnmore').hide();
  event.preventDefault();
});

//prevents the default operation of the sidebar and the sign up now button.
$('#sidebar, .button').click(function(event){
  event.preventDefault();
});

}); //closing document.ready function
