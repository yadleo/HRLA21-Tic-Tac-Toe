// TicTacToe
class TicTacToeBoard {
  constructor() {
    this.board = [
      ['_', '_', '_'],
      ['_', '_', '_'],
      ['_', '_', '_']
    ];
  }
}


class Player {
  constructor(id, game) {
    this.id = id;
    this.game = game;
  }

  notifyGameEnd() {
    // either tie or player won
  }

  promptPlayerForMove() {
    // if both check inside makemove(r, c) is false
  }

  onPlayerMove(r, c) {
    // mark the spot on the matrix with either 'X' or 'O'
  }
}


class Game {
  constructor(player1Id, player2Id) {
    this.player1 = new Player(player1Id)
    this.player2 = new Player(player2Id)
    this.board = new TicTacToeBoard()
  }
  // showCurrentBoard()
    // console.log each spot

  // makeamove (r, c)
    // check for win (three of the same pieces are aligned)
      // if true
        // alert currPlayer
      // if false
        // check for tie (out of spaces, no more '_')
          // if true
            // alert tie
          // if false
            // pass turn to the other player

  // endGame ()
  
  // restart ()
  
}