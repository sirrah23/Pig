const DiceArtistFactory =(function(){
  const diceCircleSize = 20;
  const diceSize = 150;

  function drawOne(posX, posY){
    rect(posX, posY, diceSize, diceSize);
    push();
    translate(posX, posY);
    fill(0);
    ellipse(diceSize/2, diceSize/2, diceCircleSize, diceCircleSize);
    pop();
  }

  function drawTwo(posX, posY){
    rect(posX, posY, diceSize, diceSize);
    push();
    translate(posX, posY);
    fill(0);
    ellipse(diceSize*(1/4), diceSize/2, diceCircleSize, diceCircleSize);
    ellipse(diceSize*(3/4), diceSize/2, diceCircleSize, diceCircleSize);
    pop();
  }

  function drawThree(posX, posY){
    rect(posX, posY, diceSize, diceSize);
    push();
    translate(posX, posY);
    fill(0);
    ellipse(diceSize*(1/4), diceSize*(1/4), diceCircleSize, diceCircleSize);
    ellipse(diceSize*(1/2), diceSize*(1/2), diceCircleSize, diceCircleSize);
    ellipse(diceSize*(3/4), diceSize*(3/4), diceCircleSize, diceCircleSize);
    pop();
  }


  function drawFour(posX, posY){
    rect(posX, posY, diceSize, diceSize);
    push();
    translate(posX, posY);
    fill(0);
    ellipse(diceSize*(1/4), diceSize*(1/4), diceCircleSize, diceCircleSize);
    ellipse(diceSize*(1/4), diceSize*(3/4), diceCircleSize, diceCircleSize);
    ellipse(diceSize*(3/4), diceSize*(1/4), diceCircleSize, diceCircleSize);
    ellipse(diceSize*(3/4), diceSize*(3/4), diceCircleSize, diceCircleSize);
    pop();
  }

  function drawFive(posX, posY){
    rect(posX, posY, diceSize, diceSize);
    push();
    translate(posX, posY);
    fill(0);
    ellipse(diceSize*(1/4), diceSize*(1/5), diceCircleSize, diceCircleSize);
    ellipse(diceSize*(1/4), diceSize*(4/5), diceCircleSize, diceCircleSize);
    ellipse(diceSize*(1/2), diceSize*(1/2), diceCircleSize, diceCircleSize);
    ellipse(diceSize*(3/4), diceSize*(1/5), diceCircleSize, diceCircleSize);
    ellipse(diceSize*(3/4), diceSize*(4/5), diceCircleSize, diceCircleSize);
    pop();
  }

  function drawSix(posX, posY){
    rect(posX, posY, diceSize, diceSize);
    push();
    translate(posX, posY);
    fill(0);
    ellipse(diceSize*(1/3), diceSize*(2/8), diceCircleSize, diceCircleSize);
    ellipse(diceSize*(1/3), diceSize*(4/8), diceCircleSize, diceCircleSize);
    ellipse(diceSize*(1/3), diceSize*(6/8), diceCircleSize, diceCircleSize);
    ellipse(diceSize*(2/3), diceSize*(2/8), diceCircleSize, diceCircleSize);
    ellipse(diceSize*(2/3), diceSize*(4/8), diceCircleSize, diceCircleSize);
    ellipse(diceSize*(2/3), diceSize*(6/8), diceCircleSize, diceCircleSize);
    pop();
  }

  return {
    draw : (num, posX, posY) => {
      switch (num){
        case 1:
          drawOne(posX, posY);
          break;
        case 2:
          drawTwo(posX, posY);
          break;
        case 3:
          drawThree(posX, posY);
          break;
        case 4:
          drawFour(posX, posY);
          break;
        case 5:
          drawFive(posX, posY);
          break;
        case 6:
          drawSix(posX, posY);
          break;
        default:
          break;
      }
    }
  };

});
