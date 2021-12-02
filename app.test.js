const adder = require("./app");

describe("Test customIndexOf", () => {
    test("it should output the index of the element in the array", () => {
        const output = [1, 2, 3, 4, 5];
        expect(output.customIndexOf(2)).toEqual(1);
    });
  });

  describe("Test customMap", () => {
    test("it should return a new array with each element has triple value than before", () => {
        const output = [1, 2, 3, 4, 5];
        expect(output.customMap((elem => 3*elem))).toEqual([3, 6, 9, 12, 15]);
    });
  });

  describe("Test customFilter", () => {
    test("it should return a new array with the even elements", () => {
        const output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(output.customFilter((elem => elem % 2 === 0))).toEqual([2, 4, 6, 8, 10]);
    });
  });

  describe("Test customReduce", () => {
    test("it should return the sum of the array elements", () => {
        const output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(output.customReduce((acc = 0, elem) => {
            return acc + elem;
        })).toEqual(55);
    });
  });