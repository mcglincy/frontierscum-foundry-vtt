
export const d20Formula = (modifier) => {
  return rollFormula("d20", modifier);
};

export const rollFormula = (roll, modifier) => {
  if (modifier < 0) {
    return `${roll}-${-modifier}`;
  } else if (modifier > 0) {
    return `${roll}+${modifier}`;
  } else {
    return roll;
  }
};