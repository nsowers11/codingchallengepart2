const areSymbolsValid = require("../src/index");

describe("Happy Path", () => {
  it("expect '()' to be valid", () => {
    expect(areSymbolsValid("()")).toBe(true);
  });

  it("expect '()[]{}' to be valid", () => {
    expect(areSymbolsValid("()[]{}")).toBe(true);
  });

  it("expect '{[]}' to be valid", () => {
    expect(areSymbolsValid("{[]}")).toBe(true);
  });

  it("expect '[(({}))]' to be valid", () => {
    expect(areSymbolsValid("[(({}))]")).toBe(true);
  });
});

describe("Sad Path", () => {
  it("expect '(]' to be invalid", () => {
    expect(areSymbolsValid("(]")).toBe(false);
  });

  it("expect '([)]' to be invalid", () => {
    expect(areSymbolsValid("([)]")).toBe(false);
  });

  it("expect '({)(}))' to be invalid", () => {
    expect(areSymbolsValid("({)(})")).toBe(false);
  });
});
