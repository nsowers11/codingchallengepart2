import "./styles.css";
var areSymbolsValid = function (s) {
  const symbolStack = [];
  const leftSymbols = new Set(["(", "{", "["]);
  const symbolMap = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["]
  ]);

  for (let i = 0; i < s.length; i += 1) {
    if (leftSymbols.has(s[i])) {
      symbolStack.push(s[i]);
    } else {
      const popStack = symbolStack.pop();
      if (popStack !== symbolMap.get(s[i])) {
        return false;
      }
    }
  }
  return symbolStack.length === 0;
};
module.exports = areSymbolsValid;
