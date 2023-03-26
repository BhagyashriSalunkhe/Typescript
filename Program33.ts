
class Circle
{
    public Radius:number
    public PI:number

    constructor(value:number)
    {
      this.Radius=value
      this.PI=3.14
    }

    public CalculateArea():number
    {
        let Area:number=0
        Area=this.PI*this.Radius*this.Radius
        return Area
    }
}

class CircleX extends Circle
{
   constructor(value:number)
   {
    super(value)
   }
   public Circumerence():number
   {
    let Circumerence:number=0
    Circumerence=2*this.PI*this.Radius
    return Circumerence
   }
}

var Obj1=new CircleX(20.4)

var Ret:number=0
Ret=Obj1.CalculateArea()
console.log("Area by using Obj1 "+Ret)

Ret=Obj1.Circumerence()
console.log("Circumference by using Obj1 "+Ret)

var Obj2=new CircleX(10)

Ret=Obj2.CalculateArea()
console.log("Area by using Obj2 "+Ret)

Ret=Obj2.Circumerence()
console.log("Circumference by using Obj2 "+Ret)

//instanceof opereater use kela

var bRet:boolean
bRet=Obj1 instanceof CircleX
console.log("obj1 is object of class CircleX : "+bRet)

bRet=Obj1 instanceof Circle
console.log("obj1 is object of class Circle : "+bRet)

var Obj3=new Circle(11)
bRet=Obj3 instanceof CircleX
console.log("obj3 is object of class CircleX : "+bRet)
