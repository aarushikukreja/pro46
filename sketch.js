var player
var paper, plasticCup
var gameState= "start"
var playerImg, paperImg, plasticCupImg
var bgImg
var foodWasteImg
var recyclingBinImg
var recyclingBin
var resuablebag, reusableBagImg
var points=300
var germGroup
var boosterGroup
function preload() {
playerImg= loadAnimation("images/alien1.png", "images/alien2.png")

paperImg=loadImage("images/paper.png")

plasticCupImg=loadImage("images/plasticcup.png")

bgImg= loadImage("images/bgImg.png")

foodWasteImg= loadImage("images/foodwaste.png")

recyclingBinImg= loadImage("images/recyclingbin.png")

reusableBagImg= loadImage("images/reusablebag.png")

option1Img= loadImage("images/option1.png")

plusTenImg=loadImage("images/plusTen.png")
minusTenImg=loadImage("images/minusTen.png")

option2Img=loadImage("images/option2.png")

option3Img=loadImage("images/option3.png")

option4Img=loadImage("images/option4.png")

option5Img=loadImage("images/option5.png")

germ1=loadImage("images/germ1.png")

germ2=loadImage("images/germ2.png")
germ3=loadImage("images/germ3.png")
germ4=loadImage("images/germ4.png")
germ5=loadImage("images/germ5.png")
germ6=loadImage("images/germ6.png")

booster1=loadImage("images/booster1.png")
booster2=loadImage("images/booster2.png")

}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
   player= createSprite(windowWidth/2-250, windowHeight- 50, 50, 50)
   player.addAnimation("running",playerImg)
   player.scale=0.8

 paper= createSprite( windowWidth/2-650, windowHeight- 290, 30, 30)
 paper.addImage(paperImg)
 paper.scale= 0.2

 plasticCup=createSprite( windowWidth/2 +50, windowHeight- 300, 40, 40)
plasticCup.addImage(plasticCupImg)
plasticCup.scale=0.07

food= createSprite(windowWidth/ 2- 250, windowHeight- 300, 30, 30)
food.addImage(foodWasteImg)
food.scale=0.15

recyclingBin= createSprite(windowWidth/2 + 520, windowHeight- 630, 30, 30)
recyclingBin.addImage(recyclingBinImg)
recyclingBin.scale=0.06
 
reusableBag= createSprite(windowWidth/2 - 300, windowHeight- 630, 30, 30)
reusableBag.addImage(reusableBagImg)
reusableBag.scale=0.15

wall1= createSprite(windowWidth/2 - 170, windowHeight-45, 30, 90)
wall2= createSprite(windowWidth/2 - 350, windowHeight-123, 25, 245)
wall3= createSprite(windowWidth/2 - 172, windowHeight-255, 25, 169)
wall4= createSprite(windowWidth/2 , windowHeight-298, 25, 257)
wall5= createSprite(windowWidth/2+180 , windowHeight-252, 25, 350)
wall6= createSprite(windowWidth/2-172 , windowHeight-624, 25, 236)
wall7= createSprite(windowWidth/2-350, windowHeight-624, 25, 236)
wall8= createSprite(windowWidth/2+387, windowHeight-624, 25, 236)
wall9= createSprite(windowWidth/2+567, windowHeight-624, 25, 236)

wall10= createSprite(windowWidth/2-541, windowHeight/2+132, 357, 13)
wall11= createSprite(windowWidth/2-452, windowHeight/2+40, 535, 13)
wall12= createSprite(windowWidth/2+6, windowHeight/2+287, 323, 13)
wall13= createSprite(windowWidth/2-86, windowHeight/2+195, 148, 13)
wall14= createSprite(windowWidth/2-366, windowHeight/2-50,707,13)
wall15= createSprite(windowWidth/2-541, windowHeight/2-142,357,13)
wall16= createSprite(windowWidth/2+107, windowHeight/2-142,535,13)
wall17= createSprite(windowWidth/2+456, windowHeight/2-50,527,13)


option1=createSprite(windowWidth/2, windowHeight/2, 700, 600)
option1.addImage(option1Img)
option1.scale= 0.5
option1.visible=false

paperoption= createSprite(windowWidth/2-180, windowHeight/2-110, 150, 100)
paperoption.visible=false

plasticoption= createSprite(windowWidth/2+160, windowHeight/2+110, 150, 100)
plasticoption.visible=false

plusTen= createSprite(windowWidth-100, windowHeight-700, 30, 30)
plusTen.addImage(plusTenImg)
plusTen.scale=0.3
plusTen.visible=false

minusTen= createSprite(windowWidth-100, windowHeight-700, 30, 30)
minusTen.addImage(minusTenImg)
minusTen.scale=0.3
minusTen.visible=false

option2=createSprite(windowWidth/2, windowHeight/2, 700, 600)
option2.addImage(option2Img)
option2.scale= 0.5
option2.visible=false

wetWasteOption=createSprite(windowWidth/2- 230, windowHeight/2-150, 100, 170)
wetWasteOption.visible=false

dryWasteOption=createSprite(windowWidth/2+ 230, windowHeight/2+150, 100, 180)
dryWasteOption.visible=false

option3=createSprite(windowWidth/2, windowHeight/2, 700, 600)
option3.addImage(option3Img)
option3.scale= 0.5
option3.visible=false

reusableBagOption=createSprite(windowWidth/2- 230, windowHeight/2-120, 150, 130)
reusableBagOption.visible=false

plasticBagOption=createSprite(windowWidth/2+ 230, windowHeight/2+150, 150, 160)
plasticBagOption.visible=false

option4=createSprite(windowWidth/2, windowHeight/2, 700, 600)
option4.addImage(option4Img)
option4.scale= 0.5
option4.visible=false

plasticCupOption=createSprite(windowWidth/2- 250, windowHeight/2-120, 130, 160)
plasticCupOption.visible=false

bottleOption=createSprite(windowWidth/2+ 230, windowHeight/2+120, 130, 190)
bottleOption.visible=false

option5=createSprite(windowWidth/2, windowHeight/2, 700, 600)
option5.addImage(option5Img)
option5.scale= 0.5
option5.visible=false

dustbinOption=createSprite(windowWidth/2- 220, windowHeight/2-140, 100, 170)
dustbinOption.visible=false

recyclingOption=createSprite(windowWidth/2+ 220, windowHeight/2+140, 110, 200)
recyclingOption.visible=false

germGroup= new Group()

boosterGroup= new Group()

germ1Group= new Group()

germ2Group=new Group()
germ3Group=new Group()
germ4Group=new Group()
germ5Group=new Group()
germ6Group=new Group()
}

function draw(){
    background(bgImg);
   // germs()
   booster()
   spawngerm1()
   spawngerm2()
   spawngerm3()
   spawngerm4()
   spawngerm5()
   spawngerm6()
    textSize(30)
    fill("black")
text("Points : " + points, windowWidth/2- 700, windowHeight/2- 250)

player.collide(wall1)
player.collide(wall2)
player.collide(wall3)
player.collide(wall4)
player.collide(wall5)
player.collide(wall6)
player.collide(wall7)
player.collide(wall8)
player.collide(wall9)
player.collide(wall10)
player.collide(wall11)
player.collide(wall12)
player.collide(wall13)
player.collide(wall14)
player.collide(wall15)
player.collide(wall16)
player.collide(wall17)


if(gameState=="start")
{
    text("press space to start the game", windowWidth/2-100, windowHeight/2-280)
}
if (gameState==="start"&& keyDown("SPACE")){
    gameState="play"

}

    if(gameState==="play"){
        playerMoving()
        
    }
            if(player.isTouching(paper)){
                option1.visible=true
                paperOption()
            }
           
            if(player.isTouching(food)){
                    option2.visible=true
                    foodWasteOption()
            }    

            if(player.isTouching(plasticCup)){
                option4.visible=true
                plasticOption()
        }    

        if(player.isTouching(reusableBag)){
            option3.visible=true
            reusableOption()
    }    

    if(player.isTouching(recyclingBin)){
        option5.visible=true
        recycleOption()
}    


            if(gameState=="paper"){
                option1.destroy()
                plusTen.visible=false
                minusTen.visible=false
           playerMoving()
            }      
            
            if(gameState=="food"){
                option2.destroy()
                plusTen.visible=false
                minusTen.visible=false
           playerMoving()
            }

            if(gameState=="plastic"){
                option4.destroy()
                plusTen.visible=false
                minusTen.visible=false
           playerMoving()
            }

            if(gameState=="reusable"){
                option3.destroy()
                plusTen.visible=false
                minusTen.visible=false
           playerMoving()
            }

            if(gameState=="recycling"){
                option5.destroy()
                plusTen.visible=false
                minusTen.visible=false
           playerMoving()
            }

if(player.isTouching(germ1Group)){
  points=points-50
  germ1Group.destroyEach()
}

if(player.isTouching(germ2Group)){
    points=points-50
    germ2Group.destroyEach()
  }
  if(player.isTouching(germ3Group)){
    points=points-50
    germ3Group.destroyEach()
  }
  if(player.isTouching(germ4Group)){
    points=points-50
    germ4Group.destroyEach()
  }
  if(player.isTouching(germ5Group)){
    points=points-50
    germ5Group.destroyEach()
  }
  if(player.isTouching(germ6Group)){
    points=points-50
    germ6Group.destroyEach()
  }



  if(player.isTouching(boosterGroup)){
    points=points+100
    boosterGroup.destroyEach()
  }

 drawSprites()
}


function playerMoving(){
    if( keyDown(UP_ARROW)){
        player.y=player.y- 10
    }

    if( keyDown(DOWN_ARROW)){
        player.y=player.y+ 10
    }

    if( keyDown(RIGHT_ARROW)){
        player.x=player.x+10
    }

    if( keyDown(LEFT_ARROW)){
        player.x=player.x- 10
    }

}

function paperOption(){
    if(mousePressedOver(paperoption)){
        plusTen.visible=true
        points=points+10
        gameState="paper"
    }

        else if(mousePressedOver(plasticoption)){
            minusTen.visible=true 
            points=points-10 
        gameState="paper"
        }
}
 function foodWasteOption(){
    if(mousePressedOver(wetWasteOption)){
        plusTen.visible=true
        points=points+10
        gameState="food"
    }
    else if(mousePressedOver(dryWasteOption)){
        minusTen.visible=true  
        points=points-10
        gameState="food"
       
    
    }
 }

 function plasticOption(){
    if(mousePressedOver(plasticCupOption)){
        plusTen.visible=true
        points=points-10
        gameState="plastic"
    }
    else if(mousePressedOver(bottleOption)){
        minusTen.visible=true  
        points=points+10
        gameState="plastic"
       
    
    } 
 }

 function reusableOption(){
    if(mousePressedOver(reusableBagOption)){
        plusTen.visible=true
        points=points+10
    gameState="reusable"

    }
    else if(mousePressedOver(plasticBagOption)){
        minusTen.visible=true  
        points=points-10
        gameState="reusable"
    
    }
 }

 function recycleOption(){
    if(mousePressedOver(recyclingOption)){
        plusTen.visible=true
        points=points+10
    gameState="recycling"
    }
    else if(mousePressedOver(dustbinOption)){
        minusTen.visible=true  
        points=points-10
        gameState="recycling"
    }
 }


 /*function germs(){
     if(frameCount%60==0){
         germ=createSprite(windowWidth, -windowHeight/4, 20, 20)
         germ.x=random(windowWidth/8,windowWidth)
         germ.scale=0.1
         germ.velocityY=3
         var r= Math.round(random(1,6))
         germGroup.add(germ)

        switch(r){
            case 1: germ.addImage(germ1)

            break

            case 2: germ.addImage(germ2)
            
            break

            case 3: germ.addImage(germ3)

            break

            case 4: germ.addImage(germ4)

            break

            case 5: germ.addImage(germ5)

            break

            case 6: germ.addImage(germ6)
        }

     }
 }*/

 function booster(){
    if(frameCount%340==0){
        boosters=createSprite(windowWidth, -windowHeight/4, 20, 20)
        boosters.x=random(windowWidth/8,windowWidth)
        boosters.scale=0.1
        boosters.velocityY=3
        var r= Math.round(random(1,2))
        boosterGroup.add(boosters)

       switch(r){
           case 1: boosters.addImage(booster1)

           break

           case 2: boosters.addImage(booster2)
       }
    }
}

function spawngerm1(){
if(frameCount%130==0){
    spawnGerm1=createSprite(windowWidth, -windowHeight/4, 20, 20)
    spawnGerm1.x=random(windowWidth/8,windowWidth)
    spawnGerm1.scale=0.1
    spawnGerm1.velocityY=3
    spawnGerm1.addImage(germ1)
    germ1Group.add(spawnGerm1)
}
}


function spawngerm2(){
    if(frameCount%160==0){
        spawnGerm2=createSprite(windowWidth, -windowHeight/4, 20, 20)
        spawnGerm2.x=random(windowWidth/8,windowWidth)
        spawnGerm2.scale=0.1
        spawnGerm2.velocityY=3
        spawnGerm2.addImage(germ2)
        germ2Group.add(spawnGerm2)
    }
    }

    function spawngerm3(){
        if(frameCount%190==0){
            spawnGerm3=createSprite(windowWidth, -windowHeight/4, 20, 20)
            spawnGerm3.x=random(windowWidth/8,windowWidth)
            spawnGerm3.scale=0.1
            spawnGerm3.velocityY=3
            spawnGerm3.addImage(germ3)
            germ3Group.add(spawnGerm3)
        }
        }

        
    function spawngerm4(){
        if(frameCount%220==0){
            spawnGerm4=createSprite(windowWidth, -windowHeight/4, 20, 20)
            spawnGerm4.x=random(windowWidth/8,windowWidth)
            spawnGerm4.scale=0.1
            spawnGerm4.velocityY=3
            spawnGerm4.addImage(germ4)
            germ4Group.add(spawnGerm4)
        }
        }
        
    function spawngerm5(){
        if(frameCount%250==0){
            spawnGerm5=createSprite(windowWidth, -windowHeight/4, 20, 20)
            spawnGerm5.x=random(windowWidth/8,windowWidth)
            spawnGerm5.scale=0.1
            spawnGerm5.velocityY=3
            spawnGerm5.addImage(germ5)
            germ5Group.add(spawnGerm5)
        }
        }

    function spawngerm6(){
        if(frameCount%280==0){
            spawnGerm6=createSprite(windowWidth, -windowHeight/4, 20, 20)
            spawnGerm6.x=random(windowWidth/8,windowWidth)
            spawnGerm6.scale=0.1
            spawnGerm6.velocityY=3
            spawnGerm6.addImage(germ6)
            germ6Group.add(spawnGerm6)
        }
        }