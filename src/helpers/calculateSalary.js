const salaryRandomGenerator = (sum, days) => {
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

const showArrayHandler = (sum, arr) => {
  let totalSum = 0;
  arr.forEach(num => totalSum += num)

  const correctionNum = parseFloat((sum - totalSum).toFixed(2));

  if (correctionNum > 0) {
    const newLastNum = arr[arr.length - 1] + correctionNum;
    arr[arr.length - 1] = parseFloat(newLastNum.toFixed(2));
  }
  if (correctionNum < 0) {
    const newLastNum = arr[arr.length - 1] -= Math.abs(correctionNum);
    arr[arr.length - 1] = newLastNum.toFixed(2)
  }

  return arr
}

const salaryHandler = (salary, days) => {
  const salaryRandomSum = salaryRandomGenerator(salary, days)
  return showArrayHandler(salary, salaryRandomSum);
}

export default salaryHandler

