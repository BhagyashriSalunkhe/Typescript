//write a typescript program which contains one function as named as Maximum.That function accepts array of numbers
//and returns the summation of each number from array
//ip=23 6  7  4 5   7
//op=Addition is 52

import *as promptSync from'prompt-sync'

var prompt=promptSync()


function Addition(Arr:number[]):number
{
    var Cnt:number=0
    var Sum:number=0
    for(Cnt=0;Cnt<Arr.length;Cnt++)
    {
      Sum=Sum+Arr[Cnt]
    }
    return Sum
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

var Sum:number=Addition(Arr)
console.log("Addition of all numbers in Array is: "+Sum)