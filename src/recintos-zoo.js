import { Recinto } from "./models/Recinto";
import { Animal } from "./models/Animal";

// Define a classe 'RecintosZoo'
class RecintosZoo {
    // Propriedade das classes
    Recintos = []; // Lista para os recintos do zoológico
    Nomes = []  // Lista para os nomes dos animais
    TAMANHO_MAXIMO = 10 // Tamanho máximo permitido para um recinto


    constructor() {

        // Construtor da classe que inicializa as propriedades e instâncias
        // Instâncias dos animais com seus respectivos nomes
        // Instâncias dos recintos com 'biomas', 'tamanhos' e 'animais'
        // Adiciona os nomes dos animais à lista de nomes
        // Adiciona os recintos à lista de recintos

        const macaco = new Animal("MACACO");
        const gazela = new Animal("GAZELA")
        const leopardo = new Animal("LEOPARDO")
        const leao = new Animal("LEAO")
        const crocodilo = new Animal("CROCODILO")
        const hipopotamo = new Animal("HIPOPOTAMO")

        const recinto1 = new Recinto(["savana"], this.TAMANHO_MAXIMO, [macaco, macaco, macaco])
        const recinto2 = new Recinto(["floresta"], 5, [])
        const recinto3 = new Recinto(["savana e rio"], 7, [gazela])
        const recinto4 = new Recinto(["rio"], 8, [])
        const recinto5 = new Recinto(["savana"], 9, [leao])

        this.Nomes.push("MACACO");
        this.Nomes.push("GAZELA");
        this.Nomes.push("LEOPARDO");
        this.Nomes.push("LEAO");
        this.Nomes.push("CROCODILO");
        this.Nomes.push("HIPOPOTAMO");

        this.Recintos.push(recinto1);
        this.Recintos.push(recinto2);
        this.Recintos.push(recinto3);
        this.Recintos.push(recinto4);
        this.Recintos.push(recinto5);
    }


    // Método que analísa quais recintos são viáveis para o input
    analisaRecintos(animal, quantidade) {
        // Verifica se o nome do animal é valido
        if (!this.Nomes.includes(animal)) {
            return {
                erro: "Animal inválido",
                recintosViaveis: null
            }
        }
        // Verifica se a quantidade é valida
        if (quantidade < 1) {
            return {
                erro: "Quantidade inválida",
                recintosViaveis: null
            }
        }

        // Cria uma instância do animal
        const novoAnimal = new Animal(animal);

        // Calcula o tamanho total necessário para o animal
        const totalTamanho = novoAnimal.getTamanho() * quantidade

        // Verifica se o tamanho total necessário é maior ou igual ao tamanho máximo permitido
        if (totalTamanho >= this.TAMANHO_MAXIMO) {
            return {
                erro: "Não há recinto viável",
                recintosViaveis: null
            }
        }


        const recintosViaveis = [];
        for (let i = 0; i < this.Recintos.length; i++) {
            const recintoAtual = this.Recintos[i];

            // Verifica se o bioma do animal combina com o bioma do recinto
            for (let j = 0; j < novoAnimal.Bioma.length; j++) {
                const biomaAnimal = novoAnimal.Bioma[j];

                // Verifica se o animal é válido para entrar no recinto
                if (recintoAtual.Bioma.includes(biomaAnimal)) {
                    const isAnimalValidToEnterInRecint = recintoAtual.isAnimalValidToEnterInRecinto(novoAnimal, quantidade)
                    if (isAnimalValidToEnterInRecint.ok) {
                        // Adiciona o recinto à lista de recintos viáveis
                        recintosViaveis.push(`Recinto ${i + 1} (espaço livre: ${recintoAtual.getAvailableSpace(novoAnimal)} total: ${recintoAtual.getTamanhoTotal()})`);
                    }
                }
            }
        }

        // Verifica se há recintos viáveis
        if (recintosViaveis.length == 0) {
            return {
                erro: "Não há recinto viável",
                recintosViaveis: null
            }
        }
        // Retorna os recintos viáveis encontrados
        return {
            erro: null,
            recintosViaveis
        }
    }
}

export { RecintosZoo as RecintosZoo };
