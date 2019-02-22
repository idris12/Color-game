var numSquares=6;
var colors=  generateRandomColors(numSquares);
var squares=document.querySelectorAll(".squares");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.getElementById("message");
var h1=document.querySelector("h1");
var reset=document.getElementById("reset");
var easy=document.getElementById("easy");
var hard=document.getElementById("hard");
colorDisplay.textContent=pickedColor

easy.addEventListener("click",function(){
    easy.classList.add("selected");
    hard.classList.remove("selected");
    numSquares=3;
    
    colors=  generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;

    for (var i = 0; i < squares.length; i++) {
      if(colors[i]){
       squares[i].style.backgroundColor=colors[i];
      }
      
      else{
        squares[i].style.display="none";

      }
    }
});


hard.addEventListener("click",function(){
    hard.classList.add("selected");
    easy.classList.remove("selected");
    numSquares=6;
    colors=  generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for (var i = 0; i < squares.length; i++) {
       squares[i].style.backgroundColor=colors[i];
       squares[i].style.display="block";
    }
    
      

});

 reset.addEventListener("click",function(){
      colors=  generateRandomColors(numSquares);
      
      pickedColor=pickColor();

      colorDisplay.textContent=pickedColor;

      h1.style.backgroundColor="steelblue";

      reset.textContent="New Colors ";

      messageDisplay.textContent="";

      for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor=colors[i];
      }

});







for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor=colors[i];

     squares[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor;

		if(clickedColor===pickedColor){
			messageDisplay.textContent="Correct!";
			changeColors();
			h1.style.backgroundColor=pickedColor;
			reset.textContent="Play Again? ";
		}

		else{
		this.style.backgroundColor="#232323";
		messageDisplay.textContent="Try Again";
		}
	});
}

function changeColors(){
     for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor=pickedColor;
	}

}


function pickColor(){
var random = colors[Math.floor(Math.random() * colors.length)];
     return random;

 }

 function generateRandomColors(num){
 	var arr = [];

 	for (var i = 0; i < num ; i++) {
 		arr.push(randomColors());
     }

 	return arr;

}

 function randomColors(){
   var r= Math.floor(Math.random()*256);
   var g= Math.floor(Math.random()*256);
   var b= Math.floor(Math.random()*256);

   return "rgb(" + r + ", " + g + ", " + b + ")";
}




