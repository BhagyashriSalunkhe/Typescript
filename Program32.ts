
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

var obj1=new Circle(20.4)

var Ret:number=0
Ret=obj1.CalculateArea()
console.log("Area using obj1 "+Ret)

var obj2=new Circle(10)

Ret=obj2.CalculateArea()
console.log("Area using obj2 "+Ret)
