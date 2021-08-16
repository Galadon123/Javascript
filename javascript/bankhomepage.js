function stringToint(string)
{
    const a=document.getElementById(string).value;
    document.getElementById(string).value='';
    return parseFloat(a);
}
function stringtoint2(string)
{
    const a=document.getElementById(string).innerText;
    return parseFloat(a);
}
function adder(string,a,b)
{        
        document.getElementById(string).innerText= a+b;
}
document.getElementById('deposit-button').addEventListener('click',function()
{
   
    const recentDepo=stringToint('deposit-input');
    const predepo=stringtoint2('deposit-total');
    const bankbalance=stringtoint2('balance-total');
    if(recentDepo>=0)
    {
        adder('deposit-total',recentDepo,predepo);
        adder('balance-total',bankbalance,recentDepo);
    }
})
document.getElementById('withdraw-button').addEventListener('click',function()
{
    const recentwith=stringToint('withdraw-input');
    const predewith=stringtoint2('withdraw-total');
    const bankbalance=stringtoint2('balance-total');
    if(bankbalance-recentwith>=0)
    {
        adder('withdraw-total',recentwith,predewith);
        document.getElementById('balance-total').innerText=bankbalance-recentwith;
    }
})