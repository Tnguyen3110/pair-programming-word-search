const wordSearch = (letters, word) => { 
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = letters[0].map((col, i) => letters.map(row => row[i]).join(''));
  const allStrings = horizontalJoin.concat(verticalJoin);
  for (let string of allStrings) {
    if (string.includes(word)) {
      return true;
    }
  }
  return false;
}

module.exports = wordSearch