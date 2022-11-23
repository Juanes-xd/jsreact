export default function div(number) {
  let result = 0;
  let result2 = 0;
  for (let index = 0; index < number; index++) {
    if (index % 3 == 0 && index != 0) {
      result++;
    }
    if (index % 5 == 0) {
      result2++;
    }
  }
  return { 3: result, 5: result2 };
}
