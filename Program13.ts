//write a typescript program which contains one function named as DisplayFactors.That function should accept one number and display factors of that number
//ip=20
//op=1  2   4   5   10

import *as promptSync from'prompt-sync'

function DisplayFactors(Value:number):void
{
    let iCnt:number=0
    for(iCnt=1;iCnt<=(Value/2);iCnt++)
    {
        if((Value%iCnt)==0)
        {
            console.log(iCnt)
        }
    }

}

var prompt=promptSync()
var No:number=parseInt(prompt("Enter the number:"))
DisplayFactors(No)