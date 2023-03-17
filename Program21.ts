//write a typescript program which contains one function as named as Maximum.That function accepts array of numbers
//and returns the largest number from array
//ip=23 89  6   29  56  45  77  32
//op=Maximum number 89

import *as promptSync from'prompt-sync'

var prompt=promptSync()


function Maximum(Arr:number[]):number
{
    var Cnt:number=0
    var Max:number=Arr[0]
    for(Cnt=0;Cnt<Arr.length;Cnt++)
    {
       if(Arr[Cnt]>Max)
       {
        Max=Arr[Cnt]
       }

    }
    return Max
}
var Size:number=parseInt(prompt("Enter the size of Array:"))

var Arr:number[]=new Array(Size)
console.log("Enter the elements of Array:")
var Cnt:number=0
for(Cnt=0;Cnt<Size;Cnt++)
{
  Arr[Cnt]=parseInt(prompt())
}

console.log("Elements of Array are:")
Cnt=0
for(Cnt=0;Cnt<Size;Cnt++)
{
  console.log(Arr[Cnt])
}

var MaxNum:number=Maximum(Arr)
console.log("Bigger number in Array is: "+MaxNum)