<p ALIGN="center">
  <img src="https://i.pinimg.com/originals/71/c0/2d/71c02d98d4cc67620e5d3571697780d7.jpg" width="350" title="hover text">
</p>

# PROJETO CAT #
    Projeto é um projeto que tem o proposito de consultar raças felinas. A API utiliza a tecnologia node.js sem frameworks.

### OBJETIVO
    Tem como objetivo concluir as etapas do Desafio técnico referente a vaga de Desenvolvedor(a) Back End, da empresa Inovadora de Sistemas.

### PRÉ - REQUISITOS PARA TESTES
    - Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
    - [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
    - Editor de sua preferência.

### Rodando o Back End (servidor)
# Clone este repositório
    $ git clone (git clone https://github.com/camilasouz0/api-node-axios-sequelize.git)

# Acesse a pasta do projeto no terminal/cmd
    $ cd api-node-axios-sequelize

# Instale as dependências
    $ npm install

# Execute a aplicação em modo de desenvolvimento
    $ node index

# O servidor inciará na porta:8082 - acesse <http://localhost:8082>
    - Gerar chave de JWT e copie a chave gerada
    - Acessar o servidor http://localhost:8081 para consultar as raças felinas cole a chave gerada
    - Caso queira também pode acessar localhost:8080/?q=nomeDoGato&t=chaveGerada para consultar a api pelos parametros q e t

### TECNOLOGIAS UTILIZADAS
    As seguintes ferramentas foram usadas na construção do projeto:
    - [Node.js](https://nodejs.org/en/)
    - [JavaScript](https://www.javascript.com/)
    - [Sequelize] & [Sequelize-cli](https://sequelize.org/)
    - [Axios](https://github.com/axios/axios)

### OBSERVAÇÕES
    - O projeto também roda no Docker. Basta alterar a host de "localhost" para "mysql" no arquivo configs.js
    - Não esqueca de criar o banco de nome "cache" e dar o comando "npx sequelize db:migrate" para fazer a migração.
    - Modificar o start do package.json de "nodemon src/index" para "node src/index".
    - Por fim dar o comando "npm start" na pasta raiz do projeto.

### SOBRE O AUTOR
    Sou desenvolvedora Full Stack
    Camila Mayara Cardoso de Souza - camilamayaracardoso20@gmail.com - Entre em contato por: (91)982727368

### 🎁 AGRADECIMENTOS
    Gostaria de agradecer ao membro e gerente da Inovadora de Sistemas (Franklin) pelo desafio proposto!