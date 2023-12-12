function salaryRandomGenerator(sum, days) {
  // const userSum = sum;
  const midValue = sum / days;
  const sumArray = [];

  for (let i = 0; i < days; i++) {
    // Генеруємо випадкове відхилення від середньої зарплати в межах ±10%
    let randomDeviation = (Math.random() * midValue * 0.2) - (midValue * 0.1);
    let randomSum = midValue + randomDeviation;

    sumArray.push(randomSum);
  }

  // Коригуємо, щоб забезпечити точність
  const totalSum = sumArray.reduce((acc, num) => acc + num, 0);
  const correction = (sum - totalSum) / days;

  const correctedArray = sumArray.map(num => num + correction);

  return correctedArray.map(num => parseFloat(num.toFixed(2)));
}

function showArrayHandler(sum, arr) {
  let totalSum = 0;
  arr.forEach((num, index) => {
    totalSum += num;
    const day = index + 1;
    console.log(`Day ${day} - ${num.toFixed(2)}`);
  });

  const correctionNum = parseFloat((sum - totalSum).toFixed(2));

  if (correctionNum > 0) {
    console.log('plus');
    const newLastNum = arr[arr.length - 1] + correctionNum;
    arr[arr.length - 1] = parseFloat(newLastNum.toFixed(2));
  }
  if (correctionNum < 0) {
    console.log('minus');
    const newLastNum = arr[arr.length - 1] -= Math.abs(correctionNum);
    arr[arr.length - 1] = newLastNum.toFixed(2)
  }

  console.log('Total sum: ', totalSum.toFixed(2));
  console.log('Total sum: ', correctionNum );
}



const arr1 = salaryRandomGenerator(1100.39, 31);

showArrayHandler(1100.39, arr1);

arr1.forEach((num) => {
  console.log(num);
});

