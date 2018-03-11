export const generateRandomName = () =>
  Math.random()
    .toString(36)
    .substring(7);
