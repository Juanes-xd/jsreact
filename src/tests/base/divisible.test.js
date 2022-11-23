import div from "../../base/divisibles";

describe("Prueba de los divisibles", () => {
  test("Prueba con los de 20", () => {
    let numero = 20;

    let divisible = div(numero);

    expect(divisible).toEqual({ 3: 6, 5: 4 });
  });

  test("Prueba de divisibles con 30", () => {
    let numero = 30;

    let divisible = div(numero);

    expect(divisible).toEqual({ 3: 9, 5: 6 });
  });
});
