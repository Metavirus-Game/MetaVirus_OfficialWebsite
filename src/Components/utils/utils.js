/**
 *
 * @param {string} str
 * @param {number} startLength
 * @param {number} endLength
 * @param {boolean} firstHalf 是否只显示前半部分
 * @returns
 */
export function shortenString(str, startLength, endLength, firstHalf) {
  if (str.length <= startLength + endLength) {
    return str;
  }
  return firstHalf
    ? str.substring(0, startLength) + "..."
    : str.substring(0, startLength) +
        "..." +
        str.substring(str.length - endLength);
}
