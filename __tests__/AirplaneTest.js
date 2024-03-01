const { Airplane } = require("../Airplane.js");

it("Тестируем Airplane construction", function () {
  const airplane = new Airplane();
  expect(airplane).toBeInstanceOf(Airplane);
});
