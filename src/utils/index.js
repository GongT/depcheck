import vm from 'vm';

export { default as getScripts } from './get-scripts';

export function readJSON(filePath) {
  return require(filePath); // eslint-disable-line global-require
}

export function evaluate(code) {
  const exports = {};
  const sandbox = {
    exports,
    module: { exports },
  };

  vm.runInNewContext(code, sandbox);

  return sandbox.module.exports;
}

export function tryRequire(module) {
  try {
    return require(module); // eslint-disable-line global-require
  } catch (e) {
    return null;
  }
}
