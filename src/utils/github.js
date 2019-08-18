import * as stringUtils from '@utils/string';

export const nameBeautify = (name, allUpperCase = true) => {
  let newName = name.replace('_', ' ');
  newName = stringUtils.ucfirst(newName, ' ');
  newName = stringUtils.ucfirst(newName, '-');
  return newName;
};
