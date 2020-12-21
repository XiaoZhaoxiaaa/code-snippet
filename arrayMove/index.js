/**
 *
 * @param {*} array
 * @param {*} from
 * @param {*} to
 */
const arrayMove = (array, from, to) => {
  array = [...array];
  arrayMoveMutate(array, from, to);
  return array;
};
/**
 *
 * @param {*} length
 * @param {*} index
 */
const indexSub = (arrLength, toIndex) => {
  return toIndex < 0 ? arrLength + toIndex : toIndex;
  // return resIndex;
};

/**
 * 数组换位
 * @param {Array} array The array with the item to move. / [1,2,3]
 * @param {Number} from Index of item to move. If negative, it will begin that many elements from the end / 0 / -1 / 2
 * @param {Number} to Index of where to move the item. If negative, it will begin that many elements from the end / 0 / -1 / 2
 * returns A new array with the item moved to the new position [1,2,3] -> [1,3,2]
 */
const arrayMoveMutate = (array, from, to) => {
  const arrLength = array.length;
  const startIndex = indexSub(arrLength, from);
  if (startIndex >= 0 && startIndex < arrLength) {
    const endIndex = indexSub(arrLength, to);
    const [item] = array.splice(from, 1);
    array.splice(endIndex, 0, item);
  }
};

const res = arrayMove([1, 2, 3], 2, 1);

module.exports = arrayMove;
module.exports.mutate = arrayMoveMutate;
