const { createShip } = require("../components/ship");

test("Ship hits", () => {
  const ship = createShip(3);
  ship.hit();
  expect(ship.hits).toBe(1);
});

test("Is sunk test", () => {
  const ship = createShip(2);
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});
