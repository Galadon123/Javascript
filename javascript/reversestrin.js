function reverseString(str)
{
    var reverse="";
    for(var i=0;i<str.length;i++)
    {
      reverse=str[i]+reverse;        
    }
    return reverse;
}
  var string="hello World";
  console.log(reverseString(string));