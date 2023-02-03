//прототип прибора
function ElectricalAppliance(name, power){
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

//метод, определяющий прибор как включенный
ElectricalAppliance.prototype.plugIn = function(){
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
}

//метод, определяющий прибор как выключенный
ElectricalAppliance.prototype.unplug = function(){
    console.log(this.name + " is unplugged!");
    this.isPlugged = false;
}

//Прибор - лампа
function Lamp(name, brand, power, bulType){
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.bulType = bulType;
    this.isPlugged = true;
}

Lamp.prototype = new ElectricalAppliance();

//Прибор - компьютер
function Computer(name, brand, power, type, functionality){
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.functionality = functionality;
    this.isPlugged = false;
}

Computer.prototype = new ElectricalAppliance();

//Экземпляр лампы
const tableLamp = new Lamp("Table lamp", "Xiaomi", 5, "LED");

//Экземпляр компьютера
const homePC = new Computer("Table PC", "Intel", 120, "stationary", "for work");

//Отключить лампу
tableLamp.unplug();

//Включить компьютер
homePC.plugIn();

console.log(tableLamp);
console.log(homePC);