//write a typescript program which contains one function named as maximum.That function accepts three parameters and it should returns largest value from three input parameters
//ip 23 89  6
//op Maximum number is 89

function Maximum(Value1:number,Value2:number,Value3:number):void
{
    if((Value1>Value2)&&(Value1>Value3))
    {
        console.log("Maximum Number is "+Value1)
    }
    else if((Value2>Value1)&&(Value2>Value3))
    {
        console.log("Maximum Number is "+Value2) 
    }
    else
    {
        console.log("Maximum Number is "+Value3) 
    }
    
}

var No1:number=23
var No2:number=89
var No3:number=6
Maximum(No1,No2,No3)
