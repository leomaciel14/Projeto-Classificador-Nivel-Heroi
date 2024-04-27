# Desafio Classificador de Nível de Herói

## Objetivo

O objetivo deste desafio é criar um programa que classifique o nível de um herói com base na sua experiência (XP). Utilizaremos variáveis, operadores, laços de repetição e estruturas de decisão para atingir este objetivo.

## Requisitos

Certifique-se de ter o Node.js instalado em seu sistema. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

## Como Executar o Código

1. Clone ou faça o download deste repositório para o seu computador.

2. Navegue até o diretório do projeto.

3. Abra um terminal ou prompt de comando e execute o seguinte comando para instalar as dependências necessárias:

   ```
   npm install prompt-sync
   ```

4. Após a instalação das dependências, execute o seguinte comando para iniciar o programa:

   ```
   node classificador_heroi.js
   ```

5. Siga as instruções no terminal para inserir o nome e a experiência (XP) do herói.

## Classificação de Nível

O programa utilizará as seguintes regras para classificar o nível do herói com base na sua experiência (XP):

- Se a XP for menor do que 1.000 = Ferro
- Se a XP estiver entre 1.001 e 2.000 = Bronze
- Se a XP estiver entre 2.001 e 5.000 = Prata
- Se a XP estiver entre 5.001 e 7.000 = Ouro
- Se a XP estiver entre 7.001 e 8.000 = Platina
- Se a XP estiver entre 8.001 e 9.000 = Ascendente
- Se a XP estiver entre 9.001 e 10.000 = Imortal
- Se a XP for maior ou igual a 10.001 = Radiante

## Exemplo de Saída

Após inserir o nome e a XP do herói, o programa exibirá uma mensagem como esta:

```
O Aragorn está no elo Imortal com 10000 de XP!
```

## Benfeitorias e Validações Adicionais

Neste projeto, foram realizadas as seguintes melhorias e validações:

1. Adição de instruções claras sobre como executar o código e instalar as dependências.
2. Validação para garantir que o nome do herói seja uma string válida e que a XP seja um número inteiro positivo.
3. Utilização de funções separadas para facilitar a leitura e manutenção do código.
4. Utilização de operador ternário para melhorar a legibilidade e concisão do código.
5. Adição de mensagens de erro para orientar o usuário em caso de inserção incorreta de dados.

Essas melhorias e validações demonstram o cuidado e o empenho dedicados à tarefa, garantindo um código mais robusto e de fácil utilização.