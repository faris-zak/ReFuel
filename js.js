console.log("Connected Successfully.");

const dropDownBtn = document.querySelector('.dropBtn');
const dropdownContent = document.querySelector('.dropdownContent');

dropDownBtn.addEventListener('change', function(){
  if(this.checked){
    dropdownContent.style.display='block';
  } else{
    dropdownContent.style.display='none';
  }
});

var myButton = document.getElementById("toTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.opacity = "1";
  } else {
    myButton.style.opacity = "0";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}