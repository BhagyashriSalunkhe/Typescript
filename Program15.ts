//write a typescript program which contains one function as Fibonacci.That function accept one number from user and Fibonacci series till that number
//ip=21
//op=1  2   3   5   8   13  21   

import *as promptSync from 'prompt-sync'

var prompt=promptSync()

function Fibonacci(Value:number):void
{
    var Cnt:number=0
    var previous1:number=0
    var previous2:number=1
    while(Cnt!=Value)
    {
        Cnt=previous1+previous2
        console.log(Cnt)
        previous1=previous2
        previous2=Cnt
    }
}

var No:number=parseInt(prompt("Enter the Number:"))

Fibonacci(No)

