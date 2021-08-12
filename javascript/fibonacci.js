// function fibonacci(n)
// {
//      if(n==0)
//          return [0];
//       if (n==1)
//         return [0,1];
//        else
//        {
//           var fibo=fibonacci(n-1);
//           var nE=fibo[n-1]+fibo[n-2]; 
//           fibo.push(nE);
//           return fibo;
//        }
// }
//   let  n=6;
//   console.log(fibonacci(n));
// var a=3,b=4;
//   var mini=Math.min(a,b);
//   console.log(Math.pow(2,3));
//   var arr = [1, 2, 3,4,5,6,5,7,100];
// var max = Math.min(...arr);
//  console.log(max); 

  //unique array element
  var s=[1,3,4,5,1,3,4,5];
  var uniques=[];
  // console.log(s.indexOf(1));
  for(var i=0;i<s.length;i++)
  {
       if(uniques.indexOf(s[i])== -1)
       {
          uniques.push(s[i]);
       }
  }
  console.log(uniques);