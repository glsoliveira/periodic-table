# Especifica a imagem base do Node.js
FROM node:16

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos `package.json` e `package-lock.json` (ou `npm-shrinkwrap.json`) para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia os arquivos restantes do projeto para o container
COPY . .

# Expõe a porta que o servidor de desenvolvimento Vite utiliza
EXPOSE 3000

# Comando para iniciar o aplicativo usando Vite
CMD ["npm", "run", "start"]
