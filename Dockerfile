# Use a imagem oficial Node 20 alpine
FROM node:20-alpine

# Defina o diretório de trabalho no contêiner
WORKDIR /app/frontend

# Copie os arquivos de configuração do projeto
COPY package*.json ./

# Instale as dependências
RUN npm install --legacy-peer-deps

# Copie o restante dos arquivos do projeto
COPY . .

# Exponha a porta 5173
EXPOSE 5173

# Inicie a aplicação frontend
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
