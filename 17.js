// Convert number to reversed array of digits
function digitize(n) {
    let str = String(n);
    return str.split('').map(Number).reverse();
  }