class ElectricalAppliance{
  constructor(model, power) {
    this.model = model;
    this.power = power;
    this.isPlugged = false;
  }

  plugIn() {
    this.isPlugged = true;
    return console.log(this.model + " is plugged!");
    
  }

  unplug() {
    this.isPlugged = false;
    return console.log(this.model + " is unplugged!");  
  }
}
  
class Hairdryer extends ElectricalAppliance{
  constructor(model, brand, power, type, color){
    super(model, power);    
    this.brand = brand;
    this.type = type;
    this.color = color;
    this.isPlugged = true;
  }
}

class СoffeeMachine extends ElectricalAppliance{
  constructor(model, brand, power, type, color){
    super(model, power);
    this.brand = brand;
    this.type = type;
    this.color = color;
    this.isPlugged = false;
    }
}

const myHairdryer = new Hairdryer("CF 9530", "Rowenta", 1000, "brush", "purple");

const myCoffeMachine = new СoffeeMachine("Magnifica ESAM", "De'Longhi", 3000, "automatic", "black");

myHairdryer.unplug();
myCoffeMachine.plugIn();
console.log(myHairdryer)
console.log(myCoffeMachine)