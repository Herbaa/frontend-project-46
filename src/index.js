import { readFileSync } from 'node:fs';
import path from 'path';
import yaml from 'js-yaml';

const fileParse = (filepath) => {
  const extension = path.extname(filepath.toLowerCase());
  const data = readFileSync(filepath);
  if (extension === '.yml' || extension === '.yaml') {
    return yaml.load(data);
  }
  return JSON.parse(data);
};

const diffConfigs = (config1, config2) => {
  const uniqueKeys = {};
  Object.keys(config1).forEach((key) => { uniqueKeys[key] = 1; });
  Object.keys(config2).forEach((key) => { uniqueKeys[key] = 1; });

  // Сортировка уник ключей
  const uniqueKeysArray = Object.keys(uniqueKeys);
  uniqueKeysArray.sort();

  // Вывод отличий
  let output = '';
  uniqueKeysArray.forEach((key) => {
    const has1 = Object.hasOwn(config1, key);
    const has2 = Object.hasOwn(config2, key);
    const value1 = config1[key];
    const value2 = config2[key];
    if (has1 && has2 && value1 === value2) {
      output += `    ${key}: ${value1}\n`;
      return;
    }
    if (has1) {
      output += `  - ${key}: ${value1}\n`;
    }
    if (has2) {
      output += `  + ${key}: ${value2}\n`;
    }
  });
  return `{\n${output}}`;
};

const diff = (filepath1, filepath2) => {
  const config1 = fileParse(filepath1);
  const config2 = fileParse(filepath2);
  return diffConfigs(config1, config2);
};

export default diff;
