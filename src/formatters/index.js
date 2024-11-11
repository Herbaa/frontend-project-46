import formatPlain from './plain.js';
import formatStylish from './stylish.js';
// import formatJSON from './json.js';

const format = (diff, formatName) => {
  switch (formatName) {
    case 'plain':
      return formatPlain(diff);
    case 'json':
      return JSON.stringify(diff);
    default:
      return formatStylish(diff);
  }
};
export default format;
