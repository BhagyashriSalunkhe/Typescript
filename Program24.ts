//write a typescript program which contains one function as named as ChkArmstrong.That function accepts one number and check whether number is Armstrong number or not
//ip=153
//op=It is armstrong number

import  *as promptSync from 'prompt-sync'
var prompt=promptSync()

function ChkArmstrong(Value:number):boolean
{
  var Count:number=CountNum(Value)
  var temp:number=Value
  var Sum:number=0,Mult:number=0
  var Digit:number=0
  while(temp!=0)
  {
    Digit=temp%10
    Mult=MultNo(Digit,Count)
    Sum=Sum+Mult
    temp=(temp/10)|0
  }
  if(Sum==Value)
  {
    return true
  }
  else
  {
    return false
  }
}
function MultNo(No:number,Count:number):number
{
  var Cnt:number=1
  var Mult:number=1
  for(Cnt=1;Cnt<=Count;Cnt++)
  {
    Mult=Mult*No
  }
  return Mult
}

function CountNum(Value:number):number
{
    var Count:number=0
    while(Value!=0)
    {
        Value=(Value/10)|0
        Count++
    }
    return Count
}

var No:number=parseInt(prompt("Enter the Number:"))
var bRet:boolean=ChkArmstrong(No)
if(bRet==true)
{
  console.log(No+" is armstrong")
}
else
{
  console.log(No+" is not armstrong")
}
