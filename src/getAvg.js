const getAvg = (numbers) => {
  let total = 0;
  for (const number of numbers) {
    total += parseInt(number);
  }
  return total / numbers.length;
};

export default getAvg;
