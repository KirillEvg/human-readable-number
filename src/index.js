module.exports = function toReadable (number) {
  let a = (number.toString()).split('') ;
        return (a.reverse().join(''));
}
