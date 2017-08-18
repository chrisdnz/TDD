const app = (numbers) => {
  if (numbers.trim().length == 0) {
    return 0;
  }
  if (numbers.trim().split(',').length < 2) {
    return numbers.trim();
  }
  if (numbers.trim().split(',').length > 1) {
    return parseInt(numbers.trim().split(',')[0]) + parseInt(numbers.trim().split(',')[1]);
  }
}
module.exports = {
  app
};
