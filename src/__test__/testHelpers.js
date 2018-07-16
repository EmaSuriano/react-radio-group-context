const identity = x => x;

const radioSelector = radioGroup => {
  const getRadioInputById = id =>
    radioGroup.find('input[type="radio"]').find({ id });

  const getLabelArray = () => radioGroup.find('label').map(identity);

  const getRadioButtonArray = () =>
    radioGroup.find('RadioButton').map(identity);

  return {
    getRadioInputById,
    getLabelArray,
    getRadioButtonArray,
  };
};

export default radioSelector;
