export function divideAndRound(dividend: bigint, divisor: bigint) {
  // https://github.com/nodef/extra-bigint/blob/master/src/index.ts#L69
  if (divisor < 0n) {
    dividend = -dividend;
    divisor = -divisor;
  }
  return dividend >= 0n
    ? dividend / divisor
    : (dividend - divisor + 1n) / divisor;
}

export function splitNumber(number: string) {
  let [whole, fraction = "0"] = number.split(".");
  if (whole === "") {
    whole = "0";
  }

  // trim trailing zeros
  fraction = fraction.replace(/(?!^)0*$/, "");

  return [whole, fraction];
}

export function powerOfTen(zeroes: number) {
  // This is to avoid using the ** operator which
  // doesn’t seem to work for BigInt values on CodeSandbox.
  // See https://github.com/codesandbox/codesandbox-client/issues/6706
  return BigInt("1" + "0".repeat(zeroes));
}
