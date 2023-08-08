const helpers = {
  isInArray: (number: Number, array: Number[]) => {
    return array.filter((el) => number === el).length >= 1;
  },
};

export default helpers;
