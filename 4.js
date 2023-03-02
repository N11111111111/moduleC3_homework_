
function MyDevice(name, sila) {
    this.name = name;
    this.sila = sila;
    this.vkluchenie = false;
}

MyDevice.prototype.vkLucheno = function () {
    console.log(this.name + "- прибор включен!")
    this.vkluchenie = true;
}

MyDevice.prototype.noVklucheno = function () {
    console.log(this.name + "- прибор не включен!")
    this.vkluchenie = false;
}

function Lamp(name, model, sila) {
    this.name = name;
    this.model = model;
    this.sila = sila;
    this.vkluchenie = false;
}
Lamp.prototype = new MyDevice();
function Televisor(name, model, sila) {
    this.name = name;
    this.model = model;
    this.sila = sila;
    this.vkluchenie = true;
}
Televisor.prototype = new MyDevice();


const NastenLamp = new Lamp("Настенная лампа", 345200, "5Вольт");
const BigTelevizor = new Televisor("Телевизор Экран", 3000220, "220Вольт");

NastenLamp.noVklucheno();
NastenLamp.vkLucheno();
BigTelevizor.noVklucheno();
BigTelevizor.vkLucheno()








