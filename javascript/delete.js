
document.getElementById('delete2').addEventListener('keyup',function(event)
{
     if (event.target.value=='delete')
     {
        document.getElementById('btn').removeAttribute('disabled');
     }
     else
     {
       document.getElementById('btn').setAttribute('disabled',true);
     }
}
)
    document.getElementById('btn').addEventListener('click',function()
    {
            document.getElementById('hello').style.display='none';
    })