Olá 👋! Bem vindo a calculadora-x, com ela você consegue fazer os mais diversos cálculos sem precisar "caçar" no google formulas mágicas 😂. 

<p align="center">
<img  style="border-radius: 16px; width:80%;" src="https://media1.giphy.com/media/QytRJAvwnaU7rvvjxC/giphy.gif"/>
</p>

# Índice
- [Introdução](#introdução)
- [🤔 Como contribuir?](#como-contribuir)
- [Requisitos](#requisitos)
  - [Obrigatórios](#obrigatórios)
  - [Extras](#extras)
- [Calculadoras](#calculadoras)
  - [Clássica](#clássica)
  - [Imc](#imc)
  - [Calorias](#calorias)


# Introdução

Em conversas com os membros do time decidimos fazer um sistema com diversas calculadoras desde operações básicas até calculos mais específicos como Imc ou as calorias de uma refeição. Cada calculahttps://github.com/leo-tavares/calculadora-X.gitdora vai ficar acessível por um botão em uma barra de navegação.

# Como contribuir

- Primeiro faça um clone do projeto

```bash
  git clone https://github.com/leo-tavares/calculadora-X.git
```

- Agora crie uma nova branch com o seu nome ou com a feature que você deseja criar/corrigir.
Uma abordagem é o `git branch` + `git switch` 

```bash
  git branch NOME-DA-BRANCH
  git switch NOME-DA-BRANCH
```
Você tambem pode fazer

```bash 
  git checkout -b NOME-DA-BRANCH
```

- Faça **todas** as modificações necessárias e de o commit

```bash 
  git commit -m "implemetação da funcionalidade X"
```

Se você encontrou algua issue relacionado você pode criar um link na tua mensagem de commmit usando '#' seguido pelo numero da issue.
Dessa forma o commit será linkado automaticamente na issue :smiley:

```bash 
  git commit -m "implemetação da funcionalidade X #25"
```

- Após o(s) commit(s), basta enviar as modificações para o servidor

```bash 
  git push origin NOME-DA-BRANCH
```


# Requisitos
## Obrigatórios
### Início da implementação do projeto da calculadora!
- Requisitos funcionais mínimos:
    - Deve ter 3 botões ( 1, +, = )
    - Deve conseguir disponibilizar números no display
    - Deve conseguir somar números e exibir no display o resultado correto
- Requisitos não funcionais mínimos:
    - Deve utilizar os conceitos de orientação a objetos aprendidos até aqui
    - Deve ser feito em grupos de 4 a 5 pessoas
    - Deve ter o código versionado no GitHub (um integrante será o dono do repositório, os
outros são os contribuidores)
    - Todos os integrantes do grupo precisam ter pelo menos UM commit no repositório
- Data de entrega: 18/01/2021 antes da aula
- Como entregar: A dona do repositório irá mandar uma mensagem no canal #atividades-t4
com o link do repositório, marcando todos os integrantes do time e o facilitador tech.

## Extras
- Funcionais
  - calculo da taxa metabólica basal ( Leo-tavares )
  - calculos das calorias diárias (Paulo)
  - calculo Imc (Paulo)
    - Imc = Peso / Altura * Altura
  - calculo de calorias e macronutrientes por refeição (Leo-tavares)
  - calculo da diferença meta calórica/macros para o resultado do dia

 - Não funcionais 
 - Regra negócio
  - O calculo da necessidade calórico só pode ser feito com o resultado da taxa metabólico basal

# Calculadoras

## Clássica
## Imc
## Calorias
