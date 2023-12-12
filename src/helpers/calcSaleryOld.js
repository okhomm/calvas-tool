function salaryRandomGenerator(sum, days) {
  const midValue = sum / days;
  const sumArray = [];
  let sumAcc = 0;

  for (let i = 0; i < days; i++) {
    const randomSum = Math.floor(Math.random() * midValue) + 1;
    sumArray.push(randomSum);
  }

  sumArray.forEach(num => {
    sumAcc += midValue - num;
  });

  const midSumAcc = sumAcc / days;

  const newArr = sumArray.map(num => Math.round(midSumAcc + num));

  let totalSumm = 0;
  newArr.forEach(num => {
    totalSumm += num;
  });

  const diff = totalSumm - sum;
  let lastElArr = newArr[newArr.length - 1];

  if (diff > 0) {
    lastElArr -= Math.abs(diff);
  }

  if (diff < 0) {
    lastElArr += Math.abs(diff);
  }

  const totalDiff = totalSumm - sum;
  newArr[newArr.length - 1] -= totalDiff;

  const positiveArr = newArr.map(num => Math.max(num, 1));

  return positiveArr;
}

const arr1 = salaryRandomGenerator(2100, 31);

function showArrayHandler(arr) {
  let totalSum = 0;
  arr.forEach((num, index) => {
    totalSum += num;
    const day = index + 1;
    console.log(`Day ${day} - ${num}`);
  });
  console.log('Total sum: ', totalSum);
}

showArrayHandler(arr1);