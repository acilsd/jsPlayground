String.prototype.toJadenCase = function () {
  return this.split(" ").map( function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  } ).join(" ");
};
