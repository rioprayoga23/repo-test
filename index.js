// const cetak = (teks) => {
//   let result = "";
//   for (let i = 0; i < teks.length; i++) {
//     if (i === 0) {
//       console.log(teks[0]);
//     } else {
//       for (let j = 1; j <= i; j++) {
//         result += "-";
//       }
//       result += teks[i] + "\n";
//     }
//   }
//   console.log(result);
// };
// cetak("FAZZTRACK");

const cetak2 = (num) => {
  let result = "";
  let tempNum = "";
  for (let i = 1; i <= num; i++) {
    for (let j = i; j <= num; j++) {
      if (i === 1) {
        result += j;
      } else {
        if (i === j) {
          result += j;
          tempNum = j;
        } else {
          tempNum = tempNum + i;
          result += tempNum;
        }
      }
    }
    result += "\n";
  }
  console.log(result);
};
cetak2(5);
