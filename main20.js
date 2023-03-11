
class Vehicle {
    
    constructor(name, color,door,wheel) {
        this.name = name;
        this.color = color;
        this.door = door;
        this.wheel =wheel;

        

    }
    gettransportation(){
    try{
        if(this.door ==4 ){
            throw new Error("the car does not have 7 doors")
        }else{
            return this.door;
        }
   }
   catch(err){
       return err
   }



}
}
class car extends Vehicle {
    constructor(name, color, door) {

        name = "bmw";
        color = "black";
        door = "4";
        
        

    }
}


class cart extends Vehicle {
    constructor(name, color, wheel) {

        name = "zil";
        color = "grey";
        wheel = "4";


    }
}
class truck extends Vehicle {
    constructor(name, color,wheel) {
        
        name = "kamaz";
        color = "blue";
        wheel = "6 ";




    }
}





let vehicle = new Vehicle("bmw","black","4","zil","grey","4","kamaz","blue","6");
console.log(vehicle.gettransportation());
console.log(vehicle.door);
console.log(vehicle.name);
console.log(vehicle.color);

