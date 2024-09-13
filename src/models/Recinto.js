export class Recinto {

    Bioma = []; // Lista dos biomas que o recinto pode acomodar
    Animais = []; // Lista de animais atualmente no recinto
    TamanhoTotal; // Tamanho total do recinto

    constructor(bioma, tamanho, animal) {
        // Inicializa o recinto com os biomas, tamanho e animais
        this.Bioma = bioma;
        this.TamanhoTotal = tamanho;
        this.Animais = animal;
    }

     // Método para adicionar um animal ao recinto
    addAnimal(animal, quantidade) {
        console.log("Animais presentes antes da adição:", this.Animais);


        // Adiciona o animal o número especificado de vezes
        for (let i = 0; i < quantidade; i++) {
            this.Animais.push(animal);
        }

        return this.getAvailableSpace(animal);
    }


    // Método para verificar se um animal pode entrar no recinto
    isAnimalValidToEnterInRecinto(animal, quantidade) {
        let contador = 0; // Total do tamanho dos animais no recinto
        const especiesPresentes = new Set(); // Conjunto das espécies presentes no recinto

        // Calcula o tamanho total dos animais presentes no recinto
        this.Animais.forEach((animal) => {
            contador += animal.getTamanho();
            especiesPresentes.add(animal.getEspecie());
        });

        // Se o recinto estiver vazio, considera o tamanho do novo animal
        if (contador == 0) {
            contador = animal.getTamanho();
            especiesPresentes.add(animal.getEspecie());
        }

        // Se houver mais de uma espécie, adiciona 1 ao contador
        if (especiesPresentes.size > 1) {
            contador += 1;
        }

        // Calcula o espaço restante no recinto
        const espacoDisponivel = this.TamanhoTotal - contador;
        const cabeNoRecinto = espacoDisponivel >= (animal.getTamanho() * quantidade);
        const temHerbivoroNoRecinto = this.Animais.some(animal => animal.getCarnivoro() == false)


        // Condições gerais de validação
        if (cabeNoRecinto) {
            if(this.Animais.length == 0) {
                return {
                    ok: true,
                    erro: null
                }
            }
            const temCarnivoroNoRecinto = this.Animais.some((outroAnimal) => outroAnimal.getCarnivoro());
            if (temCarnivoroNoRecinto) {
                if (especiesPresentes[0]?.getEspecie() != animal.getEspecie()) {
                    return {
                        ok: false,
                        erro: "Animais carnivoros não dividem recinto com outras especies"
                    };
                }
            }
            const temHipopotamoNoRecinto = this.Animais.some((outroAnimal) => outroAnimal.getEspecie() == "HIPOPOTAMO");
            if (temHipopotamoNoRecinto) {
                if (this.arraysIguais(this.Bioma, ["savana e rio"]) && animal.getEspecie() != "HIPOPOTAMO") {
                    return {
                        ok: false,
                        erro: "Hipopotamo só resinto com outra espécie quando está no bioma: savana e rio"
                    };
                }
            }


            // Condições específicas de validação
            if (animal.getCarnivoro()) {
                if (temCarnivoroNoRecinto == false) {
                    return {
                        ok: false,
                        erro: "Não pode herbivoro com caranivoro"
                    }
                }

                //verifica se não tem outras especeis e se é da especie certa
                if (especiesPresentes.size === 1) {
                    const [especieUnica] = especiesPresentes.values();
                    if (especieUnica === animal.getEspecie()) {
                        return {
                            ok: true,
                            erro: null
                        };
                    }
                }
            }

            if (animal.getEspecie() == "MACACO") {
                if (this.Animais.length == 0) {
                    return {
                        ok: false,
                        erro: "Macaco não fica sozinho"
                    };
                }
                const temCarnivorosNoRecinto = this.Animais.some((outroAnimal) => outroAnimal.getCarnivoro());
                if (temCarnivorosNoRecinto) {
                    return {
                        ok: false,
                        erro: "Macaco não divide recinto com animais carnivoros"
                    };
                }
            }

            if (animal.getEspecie() == "HIPOPOTAMO") {
                if (this.arraysIguais(this.Bioma, ["savana e rio"])) {
                    return {
                        ok: true,
                        erro: null
                    };
                } else {
                    if (especiesPresentes.size > 1) {
                        return {
                            ok: false,
                            erro: "Hipopotamo não divide recinto com outras especies"
                        };
                    }
                }
            } 
            return {
                ok: true,
                erro: null,
            };

        }

        return {
            ok: false,
            erro: "Não há recinto viável"
        };
    }

    // Método para calcular o espaço disponível no recint
    getAvailableSpace(animal) {
        let contador = 0;
        let especiesDiferentes = new Set();

        for (let i = 0; i < this.Animais.length; i++) {
            const objeto = this.Animais[i];
            contador += this.Animais[i].getTamanho();
            especiesDiferentes.add(this.Animais[i].getEspecie());
        }

        if (contador == 0) {
            contador = animal.getTamanho();
            especiesDiferentes.add(animal.getEspecie());
        }

        let espacoDisponivel = this.TamanhoTotal - contador;

        return espacoDisponivel;
    }


    // Método para obter o tamanho total do recinto
    getTamanhoTotal() {
        return this.TamanhoTotal;
    }

    // Método para verificar se o recinto está cheio
    isFull() {
        const contador = 0;
        this.Animais.map((animal) => {
            contador += animal.getTamanho();
        })
        if (contador >= this.TamanhoTotal) {
            return true
        }
        return false;
    }
    
    // Método para comparar se dois arrays são iguais
    arraysIguais(arr1, arr2) {
        return arr1.length === arr2.length && arr1.every(elemento => arr2.includes(elemento));
    }
}