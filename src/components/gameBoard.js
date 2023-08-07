const { createShip } = require("../components/ship");

function createGameBoard() {
  const BOARD_SIZE = 10;
  const board = {
    ships: [],
    missedAttacks: [],
    placeShip: function (ship, x, y) {
      //First let's see if every coordinate are in the board range,
      // And if it's not on the board range it will just return false
      if (x < 0 || x >= BOARD_SIZE || y < 0 || y >= BOARD_SIZE) return false;

      //Now let's control if some of the coordinates are occupied;
      const isOccupied = this.ships.some(
        (shipInfo) => shipInfo.x === x && shipInfo.y === y
      );
      if (isOccupied) {
        return;
      }

      //If it is not occupied then we should continue;
      this.ships.push({ ship, x, y });
    },

    receiveAttack: function (x, y) {
      const hitShip = this.ships.find(
        (shipInfo) => shipInfo.x === x && shipInfo.y === y
      );
      if (hitShip) {
        hitShip.ship.hit();
      } else {
        this.missedAttacks.push([x, y]);
      }
    },
    allShipsSunk: function () {
      return this.ships.every((shipInfo) => shipInfo.ship.isSunk());
    },
  };
  return board;
}
module.exports = { createGameBoard };
