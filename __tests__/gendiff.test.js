import { fileURLToPath } from 'url';
import path from 'path';
import diff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathToFixture = (fileName) => path.join(__dirname, '..', '__fixtures__', fileName);

test('diff json', () => {
  const answer = [
    '{',
    '  - follow: false',
    '    host: hexlet.io',
    '  - proxy: 123.234.53.22',
    '  - timeout: 50',
    '  + timeout: 20',
    '  + verbose: true',
    '}',
  ];

  expect(diff(pathToFixture('file1.json'), pathToFixture('file2.json'))).toBe(answer.join('\n'));
});

test('diff yaml', () => {
  const answer = [
    '{',
    '  - follow: false',
    '    host: hexlet.io',
    '  - proxy: 123.234.53.22',
    '  - timeout: 50',
    '  + timeout: 20',
    '  + verbose: true',
    '}',
  ];

  expect(diff(pathToFixture('file1.yaml'), pathToFixture('file2.yaml'))).toBe(answer.join('\n'));
});