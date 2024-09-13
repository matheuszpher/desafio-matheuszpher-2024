# RECINTOS DO ZOO

O projeto "Recintos do Zoo" é uma solução desenvolvida para o desafio de otimização e organização de recintos em um zoológico. A tarefa principal é criar uma lógica em JavaScript capaz de determinar quais recintos estão adequados para receber novos animais, respeitando diversas regras e restrições impostas para garantir o bem-estar dos animais existentes e novos.

## Descrição do Projeto

O desafio consiste em construir uma lógica em JavaScript para encontrar os recintos adequados para novos animais em um zoológico, de acordo com uma série de regras e restrições. A solução deve ser capaz de processar a entrada de tipo e quantidade de animais, validar se eles podem ser acomodados em recintos existentes e fornecer uma lista de recintos viáveis ou uma mensagem de erro.

## Estrutura do Projeto

- **`models/animal.js`**: Definição da classe `Animal`, que representa um animal com suas propriedades.
- **`models/recinto.js`**: Definição da classe `Recinto`, que representa um recinto no zoológico e suas características.
- **`src/recintos-zoo.js`**: Arquivo principal contendo a classe `RecintosZoo` e o método `analisaRecintos` que deve ser implementado.
- **`tests/recintos-zoo.test.js`**: Arquivo de testes que contém cenários de teste para validar a sua solução.
- **`package.json`**: Arquivo de configuração do Node.js e dependências do projeto.

## Requisitos

- Node.js (v14 ou superior)

## Regras 

1. Um animal deve estar em um bioma adequado e ter espaço suficiente.
2. Animais carnívoros devem estar sozinhos em seu recinto.
3. Animais existentes no recinto devem continuar confortáveis com a inclusão dos novos.
4. Hipopótamos só toleram outras espécies em recintos com savana e rio.
5. Macacos precisam de companhia de pelo menos outro animal.
6. Quando há múltiplas espécies em um recinto, é necessário considerar um espaço extra.
7. Animais não podem ser movidos entre recintos ou divididos entre recintos.

