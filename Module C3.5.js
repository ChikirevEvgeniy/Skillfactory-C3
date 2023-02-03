class ElectricalAppliance {
    constructor(name, power){
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }

    //включение прибора
    plugIn(){
        console.log(this.name + " is plugged!");
        this.isPlugged = true;
    }

    //выключение прибора
    unplug(){
        console.log(this.name + " is unplugged!");
        this.isPlugged = false;
    }
}

class Lamp extends ElectricalAppliance {
    constructor(name, brand, power, bulbType){
        super(name, power);
        this.brand = brand;
        this.bulbType = bulbType;
        this.isPlugged = true;
    }
}

class Computer extends ElectricalAppliance {
    constructor(name, brand, power, type, functionality){
        super(name, power);
        this.brand = brand;
        this.type = type;
        this.functionality = functionality;
        this.isPlugged = false;
    }
}

const tableLamp = new Lamp("Table lamp", "Xiaomi", 5, "LED");

const homePC = new Computer("Table PC", "Intel", 120, "stationary", "for work");

//отключить лампу
tableLamp.unplug();

//включить компьютер
homePC.plugIn()

//result
console.log(tableLamp);
console.log(homePC);