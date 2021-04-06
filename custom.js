class Math{
    constructor() {
        this.number = 0;
    }
    sqrt(x){
        this.number = x*x;
        return this;
    }
    cube(x){
        this.number = x*x*x;
        return this;
    }
    result(){
        console.log(this.number);
    }
}

const obj = new Math();
obj.sqrt(10).result();


