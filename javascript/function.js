function callBackFunctin(str,age,task)
{
    console.log(str,age);
    task(str);
}
function function1(str)  
{
  console.log("your cgpa is not good ,",str,3.33);
}
function function2(str) {
    console.log("your cgpa is good ,",str,3.93);
}
callBackFunctin('fazlul',21,function1);
callBackFunctin('tanveer',25,function2);

//function arguments
function adder()
{
    //arguments is by default created 
    //it is a object but act like a array but not array
    var sum=0;
    for(var i=0;i<arguments.length;i++)
    {
        sum+=arguments[i];
    }
    return sum;
}
 console.log(adder(1,2,3,4));