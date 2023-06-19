class ExecutionError extends Error {
  constructor(arg, stack) {
    super();
    this.arg = arg;
    this.stack = stack;
    this.name = "ExecutionError";
  }

  getArgData() {
    return this.arg;
  }
}

function applyFn(dataArr, callback) {
  const result = {
    succeeded: [],
    errors: [],
  };
  dataArr.forEach((curr) => {
    try {
      let callElement = callback(curr);
      result.succeeded.push(callElement);
    } catch (error) {
      const errorWithStack = new ExecutionError(curr, error.stack);
      errorWithStack.stack = error.stack;
      result.errors.push(errorWithStack);
    }
  });
  return result;
}

const callback = (element) => JSON.parse(element);
const dataArr = ['{"login":"login","password":"password"}', 2, '{"login":"CCCCCC","password":"AAAAAAAA"}', '{{}'];

console.log(applyFn(dataArr, callback));
