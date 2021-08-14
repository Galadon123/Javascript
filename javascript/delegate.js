document.getElementById('container').addEventListener('click',function(event)
             {
                event.target.parentNode.removeChild(event.target);
             })
              document.getElementById('btn').addEventListener('click',function(){
                var a=document.createElement('li');
                a.innerHTML='fazlul is a boss';
                document.getElementById('container').appendChild(a);
              })