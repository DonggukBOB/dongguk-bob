export const FILTERS = [
  {
    type: "station",
    text: "위치",
    items: [
      { value: "동대입구역", text: "동대입구역" },
      { value: "충무로역", text: "충무로역" },
    ],
    multi: true,
    method: (place, station) => place.station.includes(station),
  },
  {
    type: "price",
    text: "가격",
    items: [
      { value: 6_000, text: "6,000원 이하" },
      { value: 7_000, text: "7,000원 이하" },
      { value: 8_000, text: "8,000원 이하" },
      { value: 9_000, text: "9,000원 이하" },
    ],
    multi: false,
    method: (place, price) => place.price <= price,
  },
  {
    type: "category",
    text: "카테고리",
    items: [
      { value: "한식", text: "한식" },
      { value: "중식", text: "중식" },
      { value: "일식", text: "일식" },
      { value: "양식", text: "양식" },
      { value: "기타", text: "기타" },
    ],
    multi: true,
    method: (place, category) => place.category.includes(category),
  },
];

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
