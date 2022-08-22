const canvas = document.querySelector("#canvas1");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth ; 
canvas.height = window.innerHeight;
 
const images  = {};
images.player = new Image() ;
images.player.src = './PC Computer - Cuphead Dont Deal With the Devil - Cuphead Overworld.png' ;
// const characherArt = ['up ' , 'top right' , 'right' , 'down right' ,'down' ,'jump'];
const characherArt = ['up' , 'right' , 'jump' , 'down right'];
    const Characters = []  
class  Character {
    constructor(){
      this.width = 103.0625;
      this.height = 113.125 ;
      this.Framex = 3 ;
      this.Framey = 3; 
      this.x = Math.random() * canvas.width ; 
      this.y = Math.random() * canvas.height ; 
      this.speed =(Math.random() * 1.5) + 50;
      this.action = characherArt[Math.floor(Math.random() * characherArt.length)] ;   
      if(this.action === 'up'){
        this.Framey = 0 ; 
        this.minframe = 4 ;
        this.maxframe = 15 ;
      }else if(this.action === 'right'){
          this.Framey  = 3 ;
          this.minframe = 3 ;
        this.maxframe = 13 ;
      }else if(this.action === 'jump'){
        this.Framey  = 7 ;
        this.minframe = 0 ;
        this.maxframe = 9 ;
    }else if(this.action === 'down right'){
        this.Framey  = 4 ;
        this.minframe = 4 ;
        this.maxframe = 15 ;
    }
    }
    draw(){ 
        drawSprit(images.player , this.width * this.Framex , this.height * this.Framey , this.width, this.height, this.x ,this.y,this.width , this.height);
        if(this.Framex < this.maxframe )this.Framex ++ ;
        else this.Framex = this.minframe ;
    }
    update(){
    if(this.action === 'right'){
        if(this.x > canvas.width + this.width){
            this.x = 0 - this.width ;
            this.y = Math.random() * (canvas.height - this.height) ; 
        } 
        else {
            this.x += this.speed ;
        }
    }else if (this.action === 'up'){
        if(this.y < (0 - this.height)){
            this.y = canvas.height + this.height ; 
            this.x = Math.random() * canvas.width ; 
        }else {
            this.y -= this.speed ; 
        }
    }
    else if (this.action === 'down right'){
        if(this.y > canvas.height - this.height && this.x > this.width + canvas.width){
            this.y = 0 - this.height ; 
            this.x = Math.random() * canvas.width /2  ; 
        }else { 
            this.y += this.speed ; 
            this.x += this.speed;
        }
    }
  }
}
for(let i = 0 ; i < 10  ; i++){
Characters.push(new Character());
}
function drawSprit(img, sx , sy , sw ,sh , dx , dy , dw ,dh){
    ctx.drawImage(img , sx ,sy , sw, sh , dx ,dy ,dw, dh);
}
function animate(){
    ctx.clearRect(0 , 0, canvas.width, canvas.height);
    for( i= 0  ; i < Characters.length ; i++){
    Characters[i].draw();
    Characters[i].update();
    }
}
window.onload = setInterval(animate , 1000/3);

window.addEventListener("resize" , function(){
    canvas.width = window.innerWidth ; 
    canvas.height = window.innerHeight;
})