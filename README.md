# Tabela Periódica - Highlight Elements

**_Criado por Gabriel Leal Sala de Oliveira_**

## Visão Geral

O projeto _Tabela Periódica - Highlight Elements_ é uma aplicação web que permite aos usuários descobrir quais elementos químicos estão presentes em seus nomes e sobrenomes. Utilizando uma interface simples e intuitiva, os usuários podem inserir seus nomes e sobrenomes, e a aplicação destaca os símbolos dos elementos químicos contidos nestes nomes, oferecendo também explicações detalhadas sobre cada elemento destacado.

## Começando

Estas instruções ajudarão você a obter uma cópia do projeto em funcionamento na sua máquina local para fins de desenvolvimento e teste.

### Instalação

Siga estas etapas para configurar o ambiente de desenvolvimento em sua máquina local.

### Clonar o Repositório

Primeiro, você precisa clonar o repositório em sua máquina local. Abra um terminal e execute o seguinte comando:

```bash
 git clone https://github.com/glsoliveira/periodic-table.git
```

### Instalar Dependências

Navegue até o diretório do projeto:

```bash
 cd periodic-table
```

Instale as dependências do projeto para o frontend e backend:

```bash
cd frontend
npm install
cd ..
cd backend
npm install
cd ..
```

Este comando lê o arquivo package.json e instala todas as dependências necessárias listadas em dependencies e devDependencies para o frontend and para o backend.

### Docker

Para simplificar o processo de configuração, foi usado o Docker para este projeto. Siga estas etapas para preparar seu ambiente com Docker.

Pré-requisitos para o Docker
Certifique-se de ter o Docker e o Docker Compose instalados em seu sistema. Você pode baixá-los no [site do Docker](https://www.docker.com/products/docker-desktop/).

#### Executando o Projeto com Docker Compose

Este comando compila a imagem Docker, se ainda não estiver criada, e inicia o contêiner:

```bash
docker-compose up
```

A aplicação deve estar acessível agora em http://localhost:3500 para o backend e http://localhost:5000 para o frontend.

#### Fazendo Alterações

Se você fizer alterações no Dockerfile ou no docker-compose.yml, reconstrua os serviços usando:

```bash
docker-compose up --build
```

### Testes

Execute os testes do frontend:

```bash
docker-compose run --service-ports frontend npm run test
```

Execute os testes do backend:

```bash
docker-compose run --service-ports backend npm run test
```

### Cypress

O aplicativo possui testes end-to-end no frontend com Cypress. Para rodar esses testes:

#### No navegador:

```bash
cd frontend
npm run test:cypress-open
```

#### No terminal:

```bash
cd frontend
npm run test:cypress-run
```

### Swagger - Documentação das APIs

A documentação das APIs está disponível no Swagger. Com o Docker em execução, acesse http://localhost:3500/api-docs/ no navegador.

### Como Usar

**1. Preenchimento dos Campos:**

- **Nome e Sobrenome:** Os usuários devem inserir seus nomes no primeiro campo e seus sobrenomes no segundo campo na tela principal da aplicação.

**2. Ativação do Botão:**

- O botão "Breakify" inicia desabilitado e será ativado automaticamente assim que os campos de Nome e Sobrenome estiverem devidamente preenchidos.

**3. Interatividade com o Botão Breakify:**

- Ao clicar em "Breakify", a aplicação processa o texto inserido e identifica os símbolos dos elementos químicos presentes.

**4. Exibição dos Resultados:**

- Após o processamento, uma caixa de mensagem abaixo dos campos de entrada exibe explicações detalhadas sobre cada elemento químico identificado nos nomes.

### Tecnologias Utilizadas

#### Frontend

| Biblioteca/Framework | Versão            | Descrição                                                                                                   |
| -------------------- | ----------------- | ----------------------------------------------------------------------------------------------------------- |
| @reduxjs/toolkit     | ^2.2.3            | Conjunto de ferramentas que abstrai a configuração do Redux, simplificando a criação de stores.             |
| @types/jest          | ^29.5.12          | Tipagens para Jest, que permitem um desenvolvimento mais seguro e integrado com TypeScript.                 |
| @types/react         | ^18.2.77          | Tipagens para React, que permitem usar TypeScript com definições de tipos para React.                       |
| @types/react-dom     | ^18.2.25          | Tipagens para React DOM, que permitem usar TypeScript com definições de tipos para ReactDOM.                |
| @types/react-redux   | ^7.1.33           | Tipagens para React Redux, fornecendo definições de tipos para facilitar a integração do Redux com o React. |
| Axios                | ^1.6.8            | Cliente HTTP baseado em promessas para o navegador e node.js.                                               |
| Cypress              | ^13.7.3           | Framework de teste end-to-end que facilita a configuração, escrita, execução e depuração de testes.         |
| Jest                 | ^29.7.0           | Framework de teste JavaScript com foco na simplicidade.                                                     |
| React                | ^17.0.0 - ^18.0.0 | Uma biblioteca JavaScript para construir interfaces de usuário.                                             |
| React DOM            | ^18.2.0           | Pacote que permite ao React trabalhar com o DOM.                                                            |
| React Redux          | ^9.1.0            | Biblioteca oficial do Redux para integração com componentes React.                                          |
| Redux                | ^5.0.1            | Uma biblioteca para gerenciamento de estado previsível em aplicações JavaScript.                            |
| redux-thunk          | ^3.1.0            | Middleware que permite escrever criadores de ações que retornam uma função em vez de um objeto de ação.     |
| Styled-components    | ^6.1.8            | Biblioteca que permite escrever CSS real para estilizar componentes React.                                  |
| Vite                 | ^5.0.8            | Ferramenta de construção que visa proporcionar uma experiência de desenvolvimento mais rápida.              |

#### Desafios e Soluções

**Desafio 1: Gerenciamento de Estado Complexo**

- **Solução:** Eu usei o Redux junto com o Redux Toolkit para simplificar o gerenciamento de estado. O Redux Toolkit oferece uma abordagem mais concisa e poderosa para lidar com o estado, reduzindo o boilerplate e simplificando a lógica complexa.

**Desafio 2: Testes End-to-End**

- **Solução:** Implementei Cypress para os testes end-to-end. Isso me permitiu simular interações do usuário com a interface e verificar a integridade das funcionalidades de ponta a ponta. Cypress oferece uma boa documentação e uma comunidade ativa, o que facilitou a sua implementação e utilização.

**Desafio 3: Otimização do Processo de Desenvolvimento**

- **Solução:** Adotei o Vite como minha ferramenta de construção, que aproveita o ES Modules para servir o código. O Vite proporciona uma atualização instantânea do módulo e reinício rápido do servidor, o que otimizou significativamente o meu fluxo de desenvolvimento.

Estas são algumas das abordagens e soluções que apliquei para superar os desafios enfrentados durante o desenvolvimento deste projeto, garantindo uma aplicação robusta, eficiente e fácil de manter.

#### Backend

| Biblioteca/Framework             | Versão   | Descrição                                                                                                                 |
| -------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------- |
| @types/cors                      | ^2.8.17  | Tipagens para a biblioteca CORS, permitindo um desenvolvimento mais seguro e integrado com TypeScript.                    |
| @types/dotenv                    | ^8.2.0   | Tipagens para a biblioteca dotenv, facilitando o uso de variáveis de ambiente em TypeScript.                              |
| @types/express                   | ^4.17.21 | Tipagens para Express, proporcionando autocompletação e verificação de tipos durante o desenvolvimento com TypeScript.    |
| @types/jest                      | ^29.5.12 | Tipagens para Jest, facilitando a escrita de testes em TypeScript com autocompletação e verificação de tipos.             |
| @types/node                      | ^20.12.5 | Tipagens para o Node.js, essenciais para o desenvolvimento com TypeScript no ambiente Node.js.                            |
| @types/supertest                 | ^6.0.2   | Tipagens para a biblioteca supertest, que é usada para testar APIs HTTP.                                                  |
| @types/swagger-jsdoc             | ^6.0.4   | Tipagens para swagger-jsdoc, facilitando a integração de documentação de APIs com swagger em um ambiente TypeScript.      |
| @types/swagger-ui-express        | ^4.1.6   | Tipagens para swagger-ui-express, permitindo integrar a UI do Swagger para documentar a API Express.                      |
| @typescript-eslint/eslint-plugin | ^7.5.0   | Plugin ESLint para TypeScript, fornecendo regras específicas de linting para TypeScript.                                  |
| @typescript-eslint/parser        | ^7.5.0   | Parser para ESLint que permite linting de códigos TypeScript.                                                             |
| cors                             | ^2.8.5   | Middleware para habilitar CORS (Cross-Origin Resource Sharing) nas rotas express.                                         |
| dotenv                           | ^16.4.5  | Módulo para carregar variáveis de ambiente de um arquivo .env para process.env.                                           |
| eslint                           | ^8.57.0  | Ferramenta de linting para JavaScript e TypeScript, ajudando a manter a consistência do código e a identificar problemas. |
| eslint-config-prettier           | ^9.1.0   | Desativa as regras do ESLint que podem conflitar com o Prettier.                                                          |
| eslint-plugin-prettier           | ^5.1.3   | Executa o Prettier como uma regra do ESLint e reporta diferenças como problemas de lint.                                  |
| jest                             | ^29.7.0  | Framework de testes JavaScript, utilizado para testes unitários e de integração.                                          |
| openai                           | ^4.0.0   | SDK oficial do OpenAI, usado para integrar a API GPT-3 em aplicações Node.js.                                             |
| prettier                         | ^3.2.5   | Ferramenta de formatação de código, garantindo consistência em todo o projeto                                             |
| rimraf                           | ^5.0.5   | Pacote que fornece funcionalidade "rm -rf" em várias plataformas, usado para limpar diretórios no processo de build.      |
| supertest                        | ^6.3.4   | Biblioteca para testar APIs HTTP, integrada com frameworks de teste como Jest.                                            |
| swagger-jsdoc                    | ^6.2.8   | Biblioteca que permite a geração de especificações do Swagger a partir de comentários JSDoc no código.                    |
| swagger-ui-express               | ^5.0.0   | Middleware que permite servir a UI do Swagger, proporcionando uma interface interativa para documentação da API.          |
| ts-jest                          | ^29.1.2  | Preset do Jest para trabalhar com TypeScript, compilando os testes escritos em TypeScript antes de executá-los.           |

#### Desafios do Backend do Projeto

**1. Integração com a API OpenAI:** Um dos principais desafios foi integrar a API GPT-3.5 da OpenAI para gerar definições detalhadas dos elementos químicos a partir dos símbolos. A complexidade estava em manipular as respostas da API para extrair informações úteis e formatá-las adequadamente para serem enviadas ao frontend.

**2. Gerenciamento de Rotas e Middlewares:** Organizar as rotas de forma clara e eficiente no Express, lidando com middlewares para tratamento de erros, logging e CORS foi um desafio, especialmente garantir que as rotas não conflitassem e que os middlewares funcionassem corretamente em cada pedido.

**3. Segurança e Validação de Dados:** Implementar validações robustas para os dados de entrada (por exemplo, símbolos de elementos enviados para a API) para evitar injeções e outros ataques comuns em aplicações web. Isso incluiu a configuração cuidadosa de headers HTTP e a validação de todos os parâmetros de requisição.

**4. Testes Automatizados:** Desenvolver um conjunto abrangente de testes automatizados usando Jest e Supertest para garantir que a API funcionasse corretamente sob várias condições. Isso também envolveu a configuração do ambiente de testes para mimetizar o ambiente de produção o mais próximo possível.

**5. Documentação com Swagger:** Configurar o Swagger para documentar a API foi essencial para manter a clareza e facilitar o uso por desenvolvedores. O desafio foi garantir que a documentação fosse clara, completa e atualizada com todas as mudanças na API.

**6. Performance e Otimização:** Otimizar a aplicação para lidar com um alto volume de requisições foi crucial, dada a natureza interativa do projeto. Isso envolveu técnicas de caching, escolha cuidadosa de algoritmos e estruturas de dados, e a otimização das consultas à API da OpenAI.

#### Como os Desafios Foram Superados

Para superar esses desafios, adotei várias práticas de engenharia de software e metodologias ágeis. A integração com a API da OpenAI foi facilitada pelo uso do SDK oficial, permitindo uma integração robusta e direta. A segurança foi reforçada com a implementação de validações no lado do servidor e testes rigorosos. A documentação foi mantida com atualizações regulares no Swagger, e a performance foi monitorada e otimizada continuamente através de profiling e refatoração de código.

### Conclusão

Esse projeto não apenas proporciona um meio de entretenimento e educação através de uma interface amigável e interativa, mas também serve como uma ferramenta para inspirar interesse na ciência de uma forma inovadora. É uma excelente maneira de aprender, tornando o aprendizado da química acessível e envolvente para todos.
