'use strict';

function stringifyReplacer(key, value) {
  if (value === Infinity) {
    return 'Infinity';
  }
  if (value === -Infinity) {
    return '-Infinity';
  }
  if (Number.isNaN(value)) {
    return 'NaN';
  }
  return value;
}

function jsonStringify(obj) {
  return JSON.stringify(obj, stringifyReplacer);
}

function toKeyValuePair(key, val) {
  return `'${key}': ${val},`;
}

function objToSource(obj) {
  let objArr = [];

  Object.entries(obj).forEach(([key, value]) => {
    if (value.hasOwnProperty('comment')) {
      const { subObj, comment } = value;
      objArr.push(`// ${comment}`);
      objArr.push(toKeyValuePair(key, jsonStringify(subObj)));
    } else if (key === 'rules') {
      objArr.push(toKeyValuePair(key, objToSource(value)));
    } else {
      objArr.push(toKeyValuePair(key, jsonStringify(value)));
    }
  });

  objArr = objArr.join('\n  ').replace(/"(-?Infinity|NaN)"/g, '$1');
  return `{ ${objArr} }`;
}

module.exports = objToSource;
