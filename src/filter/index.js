const $filter = (() => {
  const methods = {};

  const apply = (targets) => {
    const isClear = Object.values(methods).every((type) => type.length === 0);
    if (isClear) {
      return targets;
    }

    for (const type in methods) {
      if (methods[type].length === 0) {
        continue;
      }
      targets = methods[type].flatMap((method) => targets.filter(method));
    }
    return targets;
  };

  const push = (type, method) => {
    if (!methods[type]) {
      methods[type] = [];
    }
    methods[type].push(method);
  };

  const clear = (type) => {
    methods[type] = [];
  };

  const clearAll = () => {
    for (const type in methods) {
      methods[type] = [];
    }
  };

  return {
    apply,
    push,
    clear,
    clearAll,
  };
})();

export default $filter;
