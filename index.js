function numToWord() {
  let num = document.getElementById("digit").value;
  // Make Array "a" And store number words
  var a = [
    "",
    "one ",
    "two ",
    "three ",
    "four ",
    "five ",
    "six ",
    "seven ",
    "eight ",
    "nine ",
    "ten ",
    "eleven ",
    "twelve ",
    "thirteen ",
    "fourteen ",
    "fifteen ",
    "sixteen ",
    "seventeen ",
    "eighteen ",
    "nineteen ",
  ];
  // Make Array "b" And Store number Words
  var b = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  // Make Str Variable
  var str = "";
  // Check if number length is greater then 9 so display "Number Limit Reached"
  if ((num = num.toString()).length > 9) {
    str = "Number Limit Reached";
    return (document.getElementById("res").innerHTML = str);
  }

  // Make Variable "n" and concate with 9 digits like...
  // Ex. If user Press 23 in inbox so "n" store "00 00 00 0 23"
  let n = ("000000000" + num)
    .substr(-9)
    .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);

  if (!n) return;

  // Check if number lies in n[1] so add number words along with "crore" and store in "str" variable
  str +=
    n[1] != 0
      ? (a[Number(n[1])] || b[n[1][0]] + " " + a[n[1][1]]) + "crore "
      : "";
  // Check if number lies in n[2] so add number words along with "lakh" and store in "str" variable
  str +=
    n[2] != 0
      ? (a[Number(n[2])] || b[n[2][0]] + " " + a[n[2][1]]) + "lakh "
      : "";
  // Check if number lies in n[3] so add number words along with "thousand" and store in "str" variable
  str +=
    n[3] != 0
      ? (a[Number(n[3])] || b[n[3][0]] + " " + a[n[3][1]]) + "thousand "
      : "";
  // Check if number lies in n[4] so add number words along with "hundred" and store in "str" variable
  str +=
    n[4] != 0
      ? (a[Number(n[4])] || b[n[4][0]] + " " + a[n[4][1]]) + "hundred "
      : "";
  // Check if number lies in n[5] so add number words along with "only" and store in "str" variable
  str +=
    n[5] !== 0
      ? (str != "" ? "and " : "") +
        (a[Number(n[5])] || b[n[5][0]] + " " + a[n[5][1]]) +
        "only "
      : "";
  //   Display the result
  document.getElementById("res").innerHTML = str;
  //   Clear input field after dislay
  // document.getElementById("digit").value = "";
}
