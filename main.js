const pokemon = [
  {
    name: "Bulbasaur",
    damage: 60,
  },
  {
    name: "Caterpie",
    damage: 40,
  },
  {
    name: "Charmander",
    damage: 60,
  },
  {
    name: "Clefairy",
    damage: 50,
  },
  {
    name: "Jigglypuff",
    damage: 60,
  },
  {
    name: "Mankey",
    damage: 30,
  },
  {
    name: "Meowth",
    damage: 60,
  },
  {
    name: "Nidoran - female",
    damage: 60,
  },
  {
    name: "Nidoran - male",
    damage: 50,
  },
  {
    name: "Oddish",
    damage: 40,
  },
  {
    name: "Pidgey",
    damage: 50,
  },
  {
    name: "Pikachu",
    damage: 50,
  },
  {
    name: "Poliwag",
    damage: 50,
  },
  {
    name: "Psyduck",
    damage: 60,
  },
  {
    name: "Rattata",
    damage: 30,
  },
  {
    name: "Squirtle",
    damage: 60,
  },
  {
    name: "Vulpix",
    damage: 50,
  },
  {
    name: "Weedle", 
    damage: 40,
  }
]



let discardPile = [];

//hide card upon play
  //have turn button hide card thats played
  //itll be in the game function
  //add to discard pile display +1 for each card
  //after three turns, cards = []


let player1 = {
  cards: [], 
  turnScore: 0,
  roundScore: 0,
  currentCard: {}, 
  playCard: function(cardIndex){
    if (Object.keys(this.currentCard).length == 0) {
      this.currentCard = this.cards[cardIndex];
      if (cardIndex === 0) {
        document.getElementById('player-card-one').classList.add('highLight');
      } else if (cardIndex === 1) {
        document.getElementById('player-card-two').classList.add('highLight');
      } else if (cardIndex === 2) {
        document.getElementById('player-card-three').classList.add('highLight');
      }
    }
    player2.playCard();
  }
}

let disapper = () => {
  if (player1.currentCard == player1.cards[0]) {
    document.getElementById('player-card-one').classList.add('hidden');
  } else if (player1.currentCard == player1.cards[1]) {
    document.getElementById('player-card-two').classList.add('hidden');
  } else if (player1.currentCard == player1.cards[2]) {
    document.getElementById('player-card-three').classList.add('hidden');
  }
}


let player2 = {
  cards: [], 
  turnScore: 0,
  roundScore: 0,
  currentCard: {},
  playCard: function(){
    console.log(this.cards)
    const index = Math.floor(Math.random() * (player2.cards.length - 1));
    const card = player2.cards.splice(index, 1);  
    this.currentCard = card[0];
    console.log(this.currentCard)
    console.log(this.cards[0])
    console.log(this.cards[1])
    console.log(this.cards[2])
    if (this.currentCard === this.cards[0]) {
      document.getElementById('computer-card-one').classList.add('highLight');
    } else if (this.currentCard === this.cards[1]) {
      document.getElementById('computer-card-two').classList.add('highLight');
    } else if (this.currentCard === this.cards[2]) {
      document.getElementById('computer-card-three').classList.add('highLight');
    }
    // if (index === 0) {
    //   document.getElementById('computer-card-one').classList.add('highLight');
    // } else if (index === 1) {
    //   document.getElementById('computer-card-two').classList.add('highLight');
    // } else if (index === 2) {
    //   document.getElementById('computer-card-three').classList.add('highLight');
    // }
  }
}


const shuffleCards = () => {
  pokemon.sort(() =>0.5 - Math.random())
}


const dealCards = (cardsDealt) => {
  for (let i = 0; i < cardsDealt; i++) {
    player1.cards.push(pokemon.shift());
    player2.cards.push(pokemon.shift());
  }
}


function displayPokemon() {
  document.getElementById('player-card-one-name').innerHTML = player1.cards[0].name;
  document.getElementById('player-card-one-damage').innerHTML = player1.cards[0].damage;
  
  document.getElementById('player-card-two-name').innerHTML = player1.cards[1].name;
  document.getElementById('player-card-two-damage').innerHTML = player1.cards[1].damage;
  
  document.getElementById('player-card-three-name').innerHTML = player1.cards[2].name;
  document.getElementById('player-card-three-damage').innerHTML = player1.cards[2].damage;
  
  document.getElementById('computer-card-one-name').innerHTML = player2.cards[0].name;
  document.getElementById('computer-card-one-damage').innerHTML = player2.cards[0].damage;
  
  document.getElementById('computer-card-two-name').innerHTML = player2.cards[1].name;
  document.getElementById('computer-card-two-damage').innerHTML = player2.cards[1].damage;
  
  document.getElementById('computer-card-three-name').innerHTML = player2.cards[2].name;
  document.getElementById('computer-card-three-damage').innerHTML = player2.cards[2].damage;
}

shuffleCards();
dealCards(3);
displayPokemon();



// shuffleCards();
// dealCards(3);
// console.log(player1.cards[0])
// player1.playCard();
// console.log(player1.cards)
// displayPokemon();



const round = (turnsTaken) => {
  for (let i = 0; i < turnsTaken; i++) {
    console.log("::::MATCH:::::")
    
    player2.playCard();
    console.log(player1.currentCard)
    if (player1.currentCard.damage > player2.currentCard.damage) {
      player1.turnScore++;
      console.log("player1 gets a point")
    } else if (player2.currentCard.damage > player1.currentCard.damage) {
      player2.turnScore++;
      console.log("player2 gets a point")
    } else {
      console.log("TIE")
    }
    disapper()
    discardCards();
  }
}


const discardCards = () => {
  discardPile.push(player1.currentCard, player2.currentCard);
  player1.currentCard = {};
  player2.currentCard = {};
}


const endRound = () => {
  if (player1.turnScore > player2.turnScore) {
    player1.roundScore++;
  } else if (player2.turnScore > player1.turnScore) {
    player2.roundScore++;
  } 
  console.log("Player 1 score is " + player1.roundScore);
  console.log("Player 2 score is " + player2.roundScore);
}


const endGame = () => {
  if (player1.roundScore > player2.roundScore) {
    console.log("Player 1 WINS!!!!")
  } else if (player2.roundScore > player1.roundScore) {
    console.log("Player 2 WINS!!!!")
  } else {
    console.log("Game ends in TIE!!!")
  }
}


const startGame = (cards, turns, rounds) => {
  shuffleCards();
  for (let i = 0; i < rounds; i++){
    dealCards(cards);
    displayPokemon();
    // console.log(player1.currentCard)
    // round(turns);
    // endRound();
  }
  // endGame();
  // console.log(pokemon)
  // console.log(discardPile)
  
}

// startGame(3, 3, 3);




//make button to start game
  //repeat the steps below 3xs
  //deck amount updated -6
  //have round start
    //display player1's cards for player to see
    //have player choose a card to play against computer
    //computer shows what random card is selected to play AFTER player1 chooses
    //turnscore is updated +1 to who ever wins turn
    //hide div of card played for both cards
      //+to the discard pile after each card is played
    //round score updated +1 to whomever has the most turnscore points
    //turnscore returns to 0 for both player and computer
//display winner on the screen somehow


    
  










// GAME OBJECT
// 1. keep a library of all the Pokemon cards that can be played (see the array in the "The Cards" section)
// 2. know what cards have been played
// 3. know how many cards are left to be played/dealt overall
// 4. track points for both the player and the computer Note: Points are determined by the following: If the player's card beats the computer's card, the player gets one point (and vice versa). If there is a tie, no one gets a point.
// 5. track rounds
// 6. track number of rounds won for both player and computer
// 7. automatically deal 3 cards from the library to the player and 3 cards to the computer each round
// 8. determine the winner of each play
// 9. stop once there are no cards left or not enough to deal 3 to each the player and computer

//PLAYER OBJECT
// 1. see their stats: their points and how many rounds they've won.
// 2. see what cards they have been dealt/see what cards are left in their hand
// 3. pick a card from the hand that has been dealt to them (thereby playing this card agaist the computer's card). The round ends once this has happened 3 times.
// 4. receive new cards given to them by the game each round.
// 5. see the cards that they have played in the past.

// UI SHOULD BE SEEN IN CONSOLE;
// 1. the scoreboard after each round
// 2. the cards in the player's hand
// 3. the cards in the computer's hand
// 4. the cards that are in play
// 5. the winner of each round (or if there was a tie)
// 6. the winner of the game when the game is over
// 7. the final score when the game is over