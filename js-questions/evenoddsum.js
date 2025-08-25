function even_odd_sum(num) {
  /* Write your code here
    No need to specify return type 
    Input and output already taken care of, you have to just return the output array */

  //Return an array of evensum & oddsum like {evensum , oddsum};
  let evensum = 0;
  let oddsum = 0;
  const numArr = num.toString().split("");
  for (let i = 0; i < numArr.length; i++) {
    if (Number(numArr[i]) % 2 === 0) {
      evensum += Number(numArr[i]);
    } else {
      oddsum += Number(numArr[i]);
    }
  }
  return [evensum, oddsum];
}

console.log("🚀 ~ even_odd_sum(49901999):", even_odd_sum(49901999));
