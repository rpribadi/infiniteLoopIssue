function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function fetchDummyInitialSettings() {
  return {
    'result': [
      {
        id: 1,
        name: 'Monitor'
      },
      {
        id: 2,
        name: 'Keyboard'
      },
      {
        id: 3,
        name: 'Mouse'
      },
      {
        id: 4,
        name: 'Adapter'
      }
    ]
  };
}


export function fetchDummyProductDetail(id, name) {
  return {
    'result': {
      id: id,
      name: name,
      price: getRandomInt(100000, 1000000),
      stock: getRandomInt(0, 100)
    }
  };
}
