import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'url';
import path from 'path';
import diff from '../src/diff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathToFixture = (fileName) => path.join(__dirname, '..', '__fixtures__', fileName);

test('diff json stylish', () => {
  const answer = readFileSync(pathToFixture('expected_stylish.txt')).toString();

  expect(diff(pathToFixture('file1.json'), pathToFixture('file2.json'))).toBe(answer);
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

test('diff json plain', () => {
  const answer = readFileSync(pathToFixture('expected_plain.txt')).toString();

  expect(diff(pathToFixture('file1.json'), pathToFixture('file2.json'), 'plain')).toBe(answer);
});

test('diff json', () => {
  const answer = JSON.parse(readFileSync(pathToFixture('expected_json.json')).toString());
  expect(JSON.parse(diff(pathToFixture('file1.json'), pathToFixture('file2.json'), 'json'))).toStrictEqual(answer);
});
