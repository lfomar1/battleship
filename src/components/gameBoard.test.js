const { createShip } = require("../components/ship");
const { createGameBoard } = require("../components/gameBoard");

test("should place a ship on specific coordinatess", () => {
  const gameBoard = createGameBoard();
  const ship = createShip(3);
  gameBoard.placeShip(ship, 2, 2);
  expect(gameBoard.ships.length).toBe(1);
});

test("Should check for missed attacks", () => {
  const gameBoard = createGameBoard();
  gameBoard.receiveAttack(3, 3);
  expect(gameBoard.missedAttacks.length).toBe(1);
});

test("Should see if all ships are sinked", () => {
  const gameBoard = createGameBoard();
  const ship = createShip(3);
  gameBoard.placeShip(ship, 0, 0);
  ship.hit();
  ship.hit();
  ship.hit();
  expect(gameBoard.allShipsSunk()).toBe(true);
});
