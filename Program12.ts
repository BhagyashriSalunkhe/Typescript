//write a typescript program which contains one function named as Area.That function should calculate area of circle.
//Accept value of radius from user and return its area.Default value of PI should be 3.14 if is not provided by the caller
//ip=5
//op= Area of circale is 78.5

import *as promptSync from 'prompt-sync'

function AreaOfCircle(Radius:number):number
{
    let pie:number=3.14
    var Area:number=pie*Radius*Radius
    return Area
}
var prompt=promptSync()

var radius:number=parseInt(prompt("Enter the Radius of Circle:"))

var Ret:number=AreaOfCircle(radius)

console.log("Area of Circle with radius "+radius+" is "+Ret)



