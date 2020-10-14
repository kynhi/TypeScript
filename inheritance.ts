let array = [1, 2, 3, 5, 2, 8, 9, 2];
class Count {
  count() {
    console.log(array.filter(x => x === 2).length);
  }
}
class Sum extends Count {
  sum() {
    let sum = 0;
    for (var i = 0; i < array.length; i++) {
      sum = sum + array[i];
    }
    console.log(sum);
  }
}
