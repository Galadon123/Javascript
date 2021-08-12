function primetest(n)
{
            if(n==2)
        {   
            return true;
        }
        else if(n%2==0)
        {
            return false;
        }
        else
        {
            for(var i=3;i*i<=n;i+=2)
            {
                if(n%i==0)  
                return false;
            }
            return true;
        }
}

var n=37;
  if(primetest(n))
  console.log("Prime");
  else
  console.log("Not Prime");