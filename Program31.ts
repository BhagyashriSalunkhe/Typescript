

class Arithmatic
{
    public Number1:number
    public Number2:number

    constructor(Value1:number,Value2:number)
    {
        this.Number1=Value1
        this.Number2=Value2
    }

    public Addition():number
    {
      let Ans:number=0
      Ans=this.Number1+this.Number2
      return Ans
    }
    
    public Substraction():number
    {
        let Ans:number
        Ans=this.Number1-this.Number2
        return Ans
    }
     
    public Multiplication():number
    {
        let Ans:number
        Ans=this.Number1*this.Number2
        return Ans
    }
     
    public Division():number
    {
        let Ans:number
        Ans=this.Number1/this.Number2
        return Ans
    }
}

var obj1=new Arithmatic(12,10)
console.log("Calling methods by Object 1")
var Ret:number=0
Ret=obj1.Addition()
console.log("Addition is :"+Ret)

Ret=obj1.Substraction()
console.log("Substraction is :"+Ret)

Ret=obj1.Multiplication()
console.log("Multiplication is :"+Ret)

Ret=obj1.Division()
console.log("Division is :"+Ret)

var obj2=new Arithmatic(20,5)

console.log("Calling methods by Object 2")

Ret=obj2.Addition()
console.log("Addition is :"+Ret)

Ret=obj2.Substraction()
console.log("Substraction is :"+Ret)

Ret=obj2.Multiplication()
console.log("Multiplication is :"+Ret)

Ret=obj2.Division()
console.log("Division is :"+Ret)