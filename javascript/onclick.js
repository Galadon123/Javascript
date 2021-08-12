function makeBlue()
          {
              document.body.style.background='blue';
          }
          var a=document.getElementById('yellow');
          a.onclick=makeYellow;
          function makeYellow()
          {
            document.body.style.background='yellow';
          }
          var x=document.getElementById('hotpink');
          x.onclick=function hotpink(){
            document.body.style.background='hotpink';
          }
          document.getElementById('hotpink2').onclick=function ()
          {
            document.body.style.background='hotpink';
          }
          document.getElementById('goldenrod').addEventListener('click',function(){
            document.body.style.background='gray';
          })