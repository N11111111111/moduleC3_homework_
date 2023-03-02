
class Devise {
    constructor(name, sila) {
        this.name = name;
        this.sila = sila;
        this.vkluchenie = false;
    }

    vklucheno() {
        console.log(this.name + "- прибор включен!")
        this.vkluchenie = true;
    }

    novklucheno() {
        console.log(this.name + "- прибор не включен!")
        this.vkluchenie = false;
    }
}
class Lamp extends Devise{
    constructor(name, model, sila) {
        super(name, sila);
        this.model = model;
        this.vkluchenie = false;
    }
}

class Televisor extends Devise {
    constructor(name, model, sila) {
        super(name, sila);
        this.model = model;
        this.vkluchenie = true;
    }
}


const NastenLamp = new Lamp("Настенная лампа", 345200, "5Вольт");
const BigTelevizor = new Televisor("Телевизор Экран", 3000220, "220Вольт");

NastenLamp.novklucheno();
NastenLamp.vklucheno();
BigTelevizor.novklucheno();
BigTelevizor.vklucheno()





