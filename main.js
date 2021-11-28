canvas=document.getElementById('canvas1');
ctx=canvas.getContext("2d");
car1_width=120;
car1_height=215;
car1_image="car1.png";
car1_x=500;
car1_y=305;

car2_width=120;
car2_height=220;
car2_image="car2.png";
car2_x=800;
car2_y=308;
  background_image="https://media.istockphoto.com/photos/finish-line-on-the-racetrack-with-spotlights-in-motion-blur-picture-id1056229106?k=20&m=1056229106&s=612x612&w=0&h=4GlAMHNjbCTzA6jkppgPGYkQwoy3bcpjnvLfH_ZTi0g=";


function add(){
    background_img = new Image();
        background_img.onload=uploadBackground;
        background_img.src=background_image;
        car1_img=new Image();
        car1_img.onload=uploadcar1;
        car1_img.src = car1_image;
        car2_img=new Image ();
        car2_img.onload=uploadcar2;
        car2_img.src = car2_image;
}
function uploadBackground(){
    ctx.drawImage(background_img,0,0,canvas.width,canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1_img,car1_x,car1_y,car1_width,car1_height);
}
function uploadcar2(){
    ctx.drawImage(car2_img,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",key_down1);
window.addEventListener("keydown",key_down2)

function key_down1(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=='38'){
    car1_up();
    console.log("up arrow key is pressed");
    }
    if(keypressed=='40'){
        car1_down();
        console.log("down arrow key is pressed");
        }
        if(keypressed=='37'){
            car1_left();
            console.log(" left arrow key is pressed");
            }
            if(keypressed=='39'){
                car1_right();
                console.log("right arrow key is pressed");
            }
                
                if(car1_y < 5){
                    console.log("car 1 won"+ car1_y);
                    document.getElementById('game_status').innerHTML="CAR 1 WON!!";
                }
                else if(car2_y < 5){
                    console.log("car 2 won");
                    document.getElementById('game_status').innerHTML="CAR 2 WON!!"
                }
            }
                function car1_up(){
                    if (car1_y >=2){
                        car1_y=car1_y-10;
                        uploadBackground();
                        uploadcar1();
                        uploadcar2();
                    }
                }
                function car1_down(){
                    if (car1_y <=270){
                        car1_y=car1_y+10;
                        uploadBackground();
                        uploadcar1();
                        uploadcar2();
                    }
                }
                function car1_right(){
                    if (car1_x <=1375){
                        car1_x=car1_x+10;
                        uploadBackground();
                        uploadcar1();
                        uploadcar2();
                    }
                }
                function car1_left(){
                    if (car1_x >=2){
                        car1_x=car1_x-10;
                        uploadBackground();
                        uploadcar1();
                        uploadcar2();
                    }
                }

function key_down2(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=='87'){
    car2_up();
    console.log("w key is pressed");
    }
    if(keypressed=='83'){
        car2_down();
        console.log("s key is pressed");
        }
        if(keypressed=='65'){
            car2_left();
            console.log(" a key is pressed");
            }
            if(keypressed=='68'){
                car2_right();
                console.log("d key is pressed");
                }
            }

function car2_up(){
    if (car2_y >=3){
        car2_y=car2_y-10;
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}
function car2_down(){
    if (car2_y <=270){
        car2_y=car2_y+10;
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}
function car2_left(){
    if (car2_x >=2){
        car2_x=car2_x-10;
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}
function car2_right(){
    if (car2_x <=1375){
        car2_x=car2_x+10;
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}
if(car2_y < 5){
    console.log("car 2 won");
    document.getElementById("game_status").innerHTML="CAR 2 WON!!";
}
else if(car1_y < 5){
    console.log("car 1 won");
    document.getElementById('game_status').innerHTML="CAR 1 WON!!"
}
//reset button
function resetCars() {
    car1_x = 500;
    car1_y = 305;
    car2_x = 800;
    car2_y = 308;
    console.log("reset complete");
    uploadBackground();
    uploadcar1();
    uploadcar2();
    document.getElementById('game_status').innerHTML="";
}