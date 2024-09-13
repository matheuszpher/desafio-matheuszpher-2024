export class Animal {
    Especie; // Armazena a espécie do animal
    Tamanho; // Armazena o tamanho do animal
    Carnivoro; // Indica se o animal é carnívoro ou não
    Bioma = [] // Lista dos biomas onde o animal pode viver


    constructor(especie){
         // Inicializa as propriedades do animal com base na espécie fornecida
        this.Especie = especie;

        // Define as propriedades específicas para cada espécie
        if(especie == "LEAO"){
            this.Bioma = ["savana"]
            this.Tamanho = 3
            this.Carnivoro = true
            
        }
        if(especie == "LEOPARDO"){
            this.Bioma = ["savana"]
            this.Tamanho = 2
            this.Carnivoro = true
        }
        if(especie == "CROCODILO"){
            this.Bioma = ["rio"]
            this.Tamanho = 3
            this.Carnivoro = true
            
        }
        if(especie == "MACACO"){
            this.Bioma = ["savana e rio", "rio", "savana"]
            this.Tamanho = 1
            this.Carnivoro = false
        }
        if(especie == "GAZELA"){
            this.Bioma = ["savana"]
            this.Tamanho = 2
            this.Carnivoro = false
        }
        if(especie == "HIPOPOTAMO"){
            this.Bioma = ["savana e rio", "rio", "savana"]
            this.Tamanho = 4
            this.Carnivoro = false
            
        }
    }


    // Métodos getter e setter para a propriedade 'Especie'
    getEspecie(){
        return this.Especie
    }
    setEspecie(especie){
        this.Especie = especie;
    }
    
    // Métodos getter e setter para a propriedade 'Tamanho'
    getTamanho() {
        return this.Tamanho
    }
    setTamanho(tamanho){
        this.Tamanho = tamanho;
    }
    
    // Métodos getter e setter para a propriedade 'Bioma'
    getBioma(){
        return this.Bioma;
    }
    setBioma(bioma){
        this.Bioma = bioma;
    }

    // Método getter para a propriedade 'Carnivoro'
    getCarnivoro(){
        return this.Carnivoro
    }
}