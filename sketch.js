let diceArtist, gameManager, visualsManager;
let gameOver = false;

function setup() {
  let rollButton,
      holdButton,
      buttonsDiv,
      scoresDiv,
      p1ScoreDiv,
      p2ScoreDiv;

  // Creation of HTML, view elements
  createCanvas(800, 600);

  scoresDiv = createDiv('');
  p1ScoreDiv = createDiv('');
  p2ScoreDiv = createDiv('');
  scoresDiv.child(p1ScoreDiv);
  scoresDiv.child(p2ScoreDiv);

  rollButton = createButton('Roll');
  holdButton = createButton('Hold');
  buttonsDiv = createDiv('');
  buttonsDiv.child(rollButton);
  buttonsDiv.child(holdButton);

  // Globals that manage view and game logic
  diceArtist = DiceArtistFactory();

  gameManager = new GameManager(
    new Player("Player One"),
    new Player("Player Two"),
    new Aggregator(),
    75
  );

  visualsManager = new VisualsManager(
    gameManager,
    rollDice,
    rollButton,
    holdButton,
    p1ScoreDiv,
    p2ScoreDiv
  );
}


function draw() {
  if(gameOver){
    return;
  }
  background(255);
  visualsManager.aggregatorText();
  diceArtist.draw(gameManager.diceValue, width/3, height/3);
  if(gameManager.gameOver()){
    visualsManager.winnerAlert(gameManager.winner);
    gameOver = true;
  }
}
