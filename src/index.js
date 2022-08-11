const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(str) {
  const MORSE_TABLE = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
  };

  let arrayStr = str.split("");
  const newArray = [];

  while (arrayStr.length >= 10) {
    const subArray = arrayStr.splice(0, 10);
    newArray.push(subArray);
  }

  const arrayFrom1011 = [];

  newArray.forEach((item) => {
    let array1011 = [];
    let itemStr = item.join("");

    if (itemStr[0] === "*") {
      return arrayFrom1011.push([" "]);
    }

    while (itemStr.length >= 2) {
      const subNumber = itemStr.slice(0, 2);

      if (subNumber === "10") {
        array1011.push(".");
        itemStr = itemStr.substring(2);
        continue;
      }

      if (subNumber === "11") {
        array1011.push("-");
        itemStr = itemStr.substring(2);
        continue;
      }

      itemStr = itemStr.substring(1);
    }

    arrayFrom1011.push(array1011);
  });
  let decoderArray = arrayFrom1011.map((item) => {
    let itemString = item.join("");
    if (itemString === " ") return " ";

    return MORSE_TABLE[itemString];
  });
  const decoderString = decoderArray.join("");

  return decoderString;
}

module.exports = {
  decode,
};
