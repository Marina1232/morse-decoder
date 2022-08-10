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
  let arrayStr = str.split("");
  const newArray = [];

  while (arrayStr.length >= 10) {
    const subArray = arrayStr.splice(0, 10);
    newArray.push(subArray);
  }

  const arrayFrom1011 = [];
  const decoderNewArray = newArray.map((item) => {
    let itemStr = item.join("");
    let array1011 = []; //-
    while (itemStr.length >= 2) {
      if (
        itemStr.substring(0, 2) === "10" ||
        itemStr.substring(0, 2) === "11"
      ) {
        let sliceNum = itemStr.slice(0, 2);
        if (sliceNum === "10") {
          sliceNum = sliceNum.replace("10", ".");
        } else {
          sliceNum = sliceNum.replace("11", "-");
        }

        array1011.push(sliceNum);

        itemStr = itemStr.substring(2);
      } else {
        itemStr.slice(0, 1);
        itemStr = itemStr.substring(1);
      }
    }
    arrayFrom1011.push(array1011);
    return arrayFrom1011;
  });

  let decoderArray = arrayFrom1011.map((item) => {
    let itemString = item.join("");
    return MORSE_TABLE[itemString];
  });
  const decoderString = decoderArray.join("");

  return decoderString;
}

module.exports = {
  decode,
};
