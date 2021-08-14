document.getElementById('show').addEventListener('click',function(){
    document.getElementById('hello').innerHTML='hello! munshi abdur rahim';
})
document.getElementById('update').addEventListener('click',function()
{
 document.getElementById('hello').innerHTML=document.getElementById('read').value;
 document.getElementById('read').value='';
})


document.getElementById('post').addEventListener('click',function()
{
    var a=document.createElement('p');
    a.innerHTML=document.getElementById('fuchka').value;
    document.getElementById('comments').appendChild(a);
    document.getElementById('fuchka').value='';
})