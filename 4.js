// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.


function paperwork(n, m) {
    if (n <= 0 || m <= 0) {
     return 0;
   }else
     return n * m;
  }