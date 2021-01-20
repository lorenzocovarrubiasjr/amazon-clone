export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getNameFromEmail = (email) => {
  return capitalizeFirstLetter(email.split("@")[0]);
};
