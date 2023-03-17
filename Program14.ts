//write a typescript program which contains one function as ChkPrime.That function should accept one number and it shoild return true if the 
//given number is prime and otherwise return false
//ip=11
//op=it is prime number

import *as promptSync from'prompt-sync'
function ChkPrime(Value:number):boolean
{
    let Cnt:number=0
    let Countprime:number=0
    for(Cnt=1;Cnt<=Value;Cnt++)
    {
      if((Value%Cnt)==0)
      {
        Countprime++
      }
    }
    if(Countprime>2)
    {
        return false
    }
    else
    {
        return true
    }
}

var prompt=promptSync()
var No:number=0
var bRet:boolean=false
No=parseInt(prompt("Enter the Number:"))
bRet=ChkPrime(No)
if(bRet==true)
{
    console.log(No+" is Prime number")
}
else
{
    console.log(No+" is not Prime number")
}
