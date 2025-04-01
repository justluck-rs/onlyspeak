FROM node:22-slim

# Instalar ferramentas adicionais
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends postgresql-client \
    && rm -rf /var/lib/apt/lists/*

# Criar diretório da aplicação
WORKDIR /app

# Instalar pnpm
RUN npm install -g pnpm

# Copiar apenas o package.json para instalar dependências
COPY package.json ./

# Instalar dependências
RUN pnpm install

# Copiar arquivos de configuração
COPY tsconfig.json knexfile.ts ./

# Copiar arquivos fonte
COPY src ./src

# Expor a porta da aplicação
EXPOSE 3333

# Comando para iniciar a aplicação em modo desenvolvimento
CMD ["pnpm", "dev"] 