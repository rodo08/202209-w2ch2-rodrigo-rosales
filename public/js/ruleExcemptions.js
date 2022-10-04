const strictEquals = (numberA, numberB) => {
  if (Object.is(numberA, -0) && Object.is(numberB, 0)) {
    return true;
  }

  if (Object.is(numberA, 0) && Object.is(numberB, -0)) {
    return true;
  }

  if (Number.isNaN(numberA) && Number.isNaN(numberB)) {
    return false;
  }
  return Object.is(numberA, numberB);
};

export default strictEquals;
