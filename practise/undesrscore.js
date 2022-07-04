const _ = {};
_.map = function (list, callback) {
  var storage = [];

  for (let i = 0; i < list.length; i++) {
    storage.push(callback(list[i], i, list));
  }
  _.each(list, function (v, i, list) {
    storage.push(v, i, list);
  });
  return storage;
};
_.map([1, 2, 3], function (val) {
  return val + 1;
});

_each = function (list, callback) {
  if (Array.isArray(list)) {
    //loop through the array
    for (var i = 0; i < list.length; i++) {
      callback(list[i], i, list);
    }
  } else {
    // loop through an object
    for (let key in list) {
      callback(list[key], key, list);
    }
  }

  //callback the list
};
// calling each just like a function
_.each(["sally", "georgie", "porgie"], function (name, i, list) {
  if (list[i + 1]) {
    console.log(name, "is younger", list[i + 1]);
  } else {
    console.log(name, "is the oldest");
  }
});

const _ = {};
_.filter = function (arr, callback) {
  var storage = [];
  _.each(list, function (v, i, list) {
    if (callback(v, i, list) === true) {
      storage.push(callback(v))
    }
  })
  return storage;
}
