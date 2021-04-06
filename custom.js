// Matematik işlemleri örnek
// class Math{
//     constructor() {
//         this.number = 0;
//     }
//     sqrt(x){
//         this.number = x*x;
//         return this;
//     }
//     cube(x){
//         this.number = x*x*x;
//         return this;
//     }
//     result(){
//         console.log(this.number);
//     }
// }
//
// const obj = new Math();
// obj.sqrt(10).result();

// İnheritance
// class Person {
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }
//     showInfos(){
//         console.log("Ad Soyad :"+this.name+"\nYaş :"+this.age);
//     }
// }
//
// class Employee extends Person{
//     constructor(name,age,salary) {
//         super(name,age);
//         this.salary = salary;
//     }
//     showInfos() { // override
//         console.log("Ad Soyad :"+this.name+"\nYaş :"+this.age+"\nMaaş :"+this.salary);
//     }
// }
// const prs = new Person("Mert Efe Cerit",31);
// prs.showInfos();
// const emp = new Employee("Mert Efe Cerit",31,3500);
// emp.showInfos();