var p1button = document.getElementById("p1");
var p2button = document.getElementById("p2");
var reset = document.getElementById("reset");
var p1Display= document.getElementById("p1Display");
var p2Display=document.getElementById("p2Display");
var input=document.querySelector("input");
var winningscoredisplay=document.querySelector("p span");
p1Score=0;
p2Score=0;
var gameover=false;
var winningscore=5;
p1button.addEventListener("click",function(){
	if(!gameover){
		p1Score++;
		if(p1Score==winningscore){
			p1Display.classList.add("winner");
			gameover=true;
		}
		p1Display.textContent=p1Score;	
	}
	

	
});
p2button.addEventListener("click",function(){
	if(!gameover){
		p2Score++;
		if(p2Score==winningscore){
			p2Display.classList.add("winner");
			gameover=true;
		}
		p2Display.textContent=p2Score;	
	}
	
	
});
reset.addEventListener("click",function(){
	p1Score=0;
	p2Score=0;
	p1Display.textContent=0;
	p2Display.textContent=0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameover=false;
	
	
});

input.addEventListener("change",function(){
	winningscoredisplay.textContent=this.value;
	winningscore=this.value;
	if(winningscore==this.value){
		p1Score=0;
	p2Score=0;
	p1Display.textContent=0;
	p2Display.textContent=0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameover=false;

	}
	
});

