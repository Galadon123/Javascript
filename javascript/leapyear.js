function leapyear(year)
{
   if(year%400==0 ||(year%4==0 && year%100!=0))
      console.log("This is a leap year");
    else
      console.log("This is not a leap year");
}
let year=1600;
   leapyear(year);
year=1700;
   leapyear(year);