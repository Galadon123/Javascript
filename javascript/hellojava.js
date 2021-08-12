        
        
        // to fixed the digit after the decimal point 
        var floatNumber=3.443343434,intNumber=4,nam="faz";
        var adder=floatNumber+intNumber;
        console.log(adder.toFixed(2));

        //variable type
        console.log(typeof(nam));
        console.log(typeof(floatNumber));

        var x=[1,2,3,4,5];
         for(var i=0;i<5;i++)
         {
             console.log(x[i]);
         }
        console.log(x.indexOf(5));
        x.push(6);//add element at the end
        console.log(x);
        console.log(x.length);
        x.pop();//delete the last element
        x.shift()//remove the first element
        x.unshift(0);//add element at the begging
        console.log(x);
        
        var y=x.slice(1,4);
        console.log(y);
        console.log("finding the Combination of a number");
        //function related discussion
        //findin the 5c2 value with function
        var n=5,r=3;
        function combination(num)
        {
            
            if(num>1)
            {
                return num*combination(num-1);
            }
            else 
                return 1;
        }
        console.log(combination(n)/(combination(n-r)*combination(r)));
        console.log("hi");
        ///object nie halka patla discussion
        var student1=
        {
            roll:1,
            name:"Fazlul karim",
            cgpa:3.5
        };
        var student2=
        {
            roll:2,
            name:"Tanveer Ahmed",
            cgpa:3.7
        }
        console.log(student1);
        console.log(student2.cgpa);

        // update content of a object
        student1.cgpa=3.8;
        console.log(student1.cgpa);

        //add element to a object
         student1.phoneno = 1544;
         console.log(student1);