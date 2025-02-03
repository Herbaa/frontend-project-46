### Hexlet tests and linter status

[![Actions Status](https://github.com/Herbaa/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Herbaa/frontend-project-46/actions)

[![build](https://github.com/Herbaa/frontend-project-46/actions/workflows/auto-tests.yml/badge.svg)](https://github.com/Herbaa/frontend-project-46/actions/workflows/auto-tests.yml)

[![Maintainability](https://api.codeclimate.com/v1/badges/bcb10082c1b51b6742bd/maintainability)](https://codeclimate.com/github/Herbaa/frontend-project-46/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/bcb10082c1b51b6742bd/test_coverage)](https://codeclimate.com/github/Herbaa/frontend-project-46/test_coverage)

### About

This program compares two configuration files in either of json / yaml formats and outputs the difference in
different formats:

* stylish (default) - nice-looking diff with indentation
* plain - a simple text format suitable for automatic processing
* json - machine-readable list of differences

### CLI usage

```
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Options:
  -V, --version        output the version number
  -f, --format [type]  output format
  -h, --help           display help for command
```

### Library usage

```javascript
import diff from 'frontend-project-46/diff.js';

diff('file1', 'file2', 'stylish');  // contents of the diff
```
