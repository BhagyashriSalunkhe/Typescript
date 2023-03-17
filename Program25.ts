//write a typescript  program which contains one function names as ChkString .That function accept one string and check whether that string contains "Marvellous" aord or not
//ip:"Pune Kothrud Marvellous Infosystems"
//op=String contains Marvellous in it

import *as promptSync from 'prompt-sync'

var prompt=promptSync()

function ChkString(str1:string,str2:string):boolean
{
    var Arr1:string[]=str1.split(' ')
    var Arr2:string[]=str2.split(' ')
    var Cnt:number=0,Check:number=0
    
    
        for(Cnt=0;Cnt<Arr1.length;Cnt++)
        {
            if(Arr1[Cnt]==Arr2[0])
            {
                Check++
            }
        }
    
    if(Check==0)
    {
        return false
    }
    else
    {
        return true
    }
}

var str1:string=prompt("Enter the string:")
var str2:string=prompt("Enter the word to check in string:")
var bRet:boolean=ChkString(str1,str2)
if(bRet==true)
{
    console.log("String contains "+str2+ " in it")
}
else
{
    console.log("String doesn't contains "+str2+ " in it")
}