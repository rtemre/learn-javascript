const str = "i am raman";
// output = I Am Raman
function firstUppercase(str = "") {
  return str
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
}

console.log(firstUppercase(str));
