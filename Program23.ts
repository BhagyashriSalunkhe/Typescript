//write a typescript program which contains one function as named as Maximum.That function accepts array of numbers
//and returns the second largest number from array
//ip=23 89  6   29  56  45  77  32
//op=Maximum number 77

import *as promptSync from 'prompt-sync'
var prompt=promptSync()

function SecondLarge(Arr:number[]):number
{
    var Cnt:number=0
    var largest:number=0
    var SecondLarge:number=0
    for(Cnt=0;Cnt<Arr.length;Cnt++)
    {
        if(Arr[Cnt]>largest)
        {
            SecondLarge=largest
            largest=Arr[Cnt]
        }
    }
    return SecondLarge
}

var Size:number=parseInt(prompt("Enter the size of Array:"))

var Arr:number[]=new Array(Size)
var Cnt:number=0
console.log("Enter the Elements of array:")
for(Cnt=0;Cnt<Arr.length;Cnt++)
{
    Arr[Cnt]=parseInt(prompt())
}

Cnt=0
console.log("Elements of Array are:")
for(Cnt=0;Cnt<Arr.length;Cnt++)
{
    console.log(Arr[Cnt])
}

var Ret:number=SecondLarge(Arr)
console.log("Second largest element in array is:"+Ret)
