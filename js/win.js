function win(){
    if(a2.visible===true&&a5.visible===true&&a8.visible===true){
        chance1.visible=false;
        chance2.visible=false;
        textSize(130);
        fill("red");
        text("X",50,250);
        text("WIN",30,350);
        q2.shapeColor=("orange");
        q5.shapeColor=("orange");
        q8.shapeColor=("orange");
       }
       else if(a1.visible===true&&a4.visible===true&&a7.visible===true){
        chance1.visible=false;
        chance2.visible=false;
        textSize(130);
        fill("red");
        text("X",50,250);
        text("WIN",30,350);
        q1.shapeColor=("orange");
        q4.shapeColor=("orange");
        q7.shapeColor=("orange");
       }
       else if(a3.visible===true&&a6.visible===true&&a9.visible===true){
        chance1.visible=false;
        chance2.visible=false;
        textSize(130);
        fill("red");
        text("X",50,250);
        text("WIN",30,350);
        q3.shapeColor=("orange");
        q6.shapeColor=("orange");
        q9.shapeColor=("orange");
       }
       else if(a2.visible===true&&a1.visible===true&&a3.visible===true){
        chance1.visible=false;
        chance2.visible=false;
        textSize(130);
        fill("red");
        text("X",50,250);
        text("WIN",30,350);
        q2.shapeColor=("orange");
        q1.shapeColor=("orange");
        q3.shapeColor=("orange");
       }
       else if(a5.visible===true&&a4.visible===true&&a6.visible===true){
        chance1.visible=false;
        chance2.visible=false;
        textSize(130);
        fill("red");
        text("X",50,250);
        text("WIN",30,350);
        q5.shapeColor=("orange");
        q4.shapeColor=("orange");
        q6.shapeColor=("orange");
       }
       else if(a8.visible===true&&a7.visible===true&&a9.visible===true){
        chance1.visible=false;
        chance2.visible=false;
        textSize(130);
        fill("red");
        text("X",50,250);
        text("WIN",30,350);
        q8.shapeColor=("orange");
        q7.shapeColor=("orange");
        q9.shapeColor=("orange");
       }
       else if(a2.visible===true&&a4.visible===true&&a9.visible===true){
        chance1.visible=false;
        chance2.visible=false;
        textSize(130);
        fill("red");
        text("X",50,250);
        text("WIN",30,350);
        q2.shapeColor=("orange");
        q4.shapeColor=("orange");
        q9.shapeColor=("orange");
       }
       else if(a8.visible===true&&a4.visible===true&&a3.visible===true){
        chance1.visible=false;
        chance2.visible=false;
        textSize(130);
        fill("red");
        text("X",50,250);
        text("WIN",30,350);
        q8.shapeColor=("orange");
        q4.shapeColor=("orange");
        q3.shapeColor=("orange");
       }
       else if(s2.visible===true&&s5.visible===true&&s8.visible===true){
        chance1.visible=false;
        chance2.visible=false;
        textSize(130);
        fill("red");
        text("O",50,250);
        text("WIN",30,350);
        q2.shapeColor=("orange");
        q5.shapeColor=("orange");
        q8.shapeColor=("orange");
       }
       else if(s1.visible===true&&s4.visible===true&&s7.visible===true){
        chance1.visible=false;
        chance2.visible=false;
        textSize(130);
        fill("red");
        text("O",50,250);
        text("WIN",30,350);
        q1.shapeColor=("orange");
        q4.shapeColor=("orange");
        q7.shapeColor=("orange");
       }
       else if(s3.visible===true&&s6.visible===true&&s9.visible===true){
        chance1.visible=false;
        chance2.visible=false;
        textSize(130);
        fill("red");
        text("O",50,250);
        text("WIN",30,350);
        q3.shapeColor=("orange");
        q6.shapeColor=("orange");
        q9.shapeColor=("orange");
       }
       else if(s2.visible===true&&s1.visible===true&&s3.visible===true){
        chance1.visible=false;
        chance2.visible=false;
        textSize(130);
        fill("red");
        text("O",50,250);
        text("WIN",30,350);
        q2.shapeColor=("orange");
        q1.shapeColor=("orange");
        q3.shapeColor=("orange");
       }
       else if(s5.visible===true&&s4.visible===true&&s6.visible===true){
        chance1.visible=false;
        chance2.visible=false;
        textSize(130);
        fill("red");
        text("O",50,250);
        text("WIN",30,350);
        q5.shapeColor=("orange");
        q4.shapeColor=("orange");
        q6.shapeColor=("orange");
       }
       else if(s8.visible===true&&s7.visible===true&&s9.visible===true){
        chance1.visible=false;
        chance2.visible=false;
        textSize(130);
        fill("red");
        text("O",50,250);
        text("WIN",30,350);
        q8.shapeColor=("orange");
        q7.shapeColor=("orange");
        q9.shapeColor=("orange");
       }
       else if(s2.visible===true&&s4.visible===true&&s9.visible===true){
        chance1.visible=false;
        chance2.visible=false;
        textSize(130);
        fill("red");
        text("O",50,250);
        text("WIN",30,350);
        q2.shapeColor=("orange");
        q4.shapeColor=("orange");
        q9.shapeColor=("orange");
       }
       else if(s8.visible===true&&s4.visible===true&&s3.visible===true){
        chance1.visible=false;
        chance2.visible=false;
        textSize(130);
        fill("red");
        text("O",50,250);
        text("WIN",30,350);
        q8.shapeColor=("orange");
        q4.shapeColor=("orange");
        q3.shapeColor=("orange");
       }
       else {
         if(gamemode===9){
          chance1.visible=false;
          chance2.visible=false;
          textSize(150);
          fill("red");
          text("Tie",50,300);
         }
       }
}