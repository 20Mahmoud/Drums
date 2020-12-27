for (var i = 0; i<document.querySelectorAll(".drum").length;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click", function()
{
	 makeSound(this.innerHTML);
  buttonAnimation(this.innerHTML);

});	
};
document.addEventListener("keypress",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});
function makeSound (key)
{
	switch(key){
        case "w": 	
        var drum = new Audio('sounds/crash.mp3');
	drum.play();
    break;
     case "a": var drum2 = new Audio('sounds/tom-2.mp3');
     drum2.play();
     break;
     case "s" : var drum3 = new Audio ('sounds/tom-3.mp3');
     drum3.play();
     break;
          case "d" : var drum3 = new Audio ('sounds/tom-4.mp3');
     drum3.play();
     break;
          case "j" : var drum3 = new Audio ('sounds/tom-1.mp3');
     drum3.play();
     break;
          case "k" : var drum3 = new Audio ('sounds/kick-bass.mp3');
     drum3.play();
     break;
          case "l" : var drum3 = new Audio ('sounds/snare.mp3');
     drum3.play();
     break;
    }};

    function buttonAnimation (CurrentKey){
  var ActiveButton = document.querySelector("." + CurrentKey);
   ActiveButton.classList.add("pressed");
setTimeout(function() {
  ActiveButton.classList.remove("pressed");
}, 100);
    };
