//pakistan-solution
//im not racist btw
function pakistanDelete(original, maxOccurrences) {
  if (!original) { return null; }
  if (maxOccurrences < 1) { return []; }

  var result = [];
  var itemCounts = {};
  for (var index = 0; index < original.length; index++){
    var item = original[index];
    var count = itemCounts[item] || 0;
    if (count < maxOccurrences) {
      result.push(item);
      itemCounts[item] = count + 1;
    }
  }

  return result;
}
//filter-method.solution
function deleteNth(arr,x) {
  var cache = {};
  return arr.filter(function(n) {
    cache[n] = (cache[n]||0) + 1;
    return cache[n] <= x;
  });
}
