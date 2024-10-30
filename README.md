# Golden Raspberry Awards API

API para o projeto "Golden Raspberry Awards", que processa e expõe dados de prêmios do tipo "Framboesa de Ouro" para análise de intervalos entre vitórias de produtores de filmes.

## Tecnologias

- **Node.js**: Plataforma de desenvolvimento backend.
- **Express**: Framework web para Node.js, para construir a API.
- **TypeORM**: ORM para manipulação de dados e integração com banco SQLite.
- **SQLite**: Banco de dados em memória para fácil configuração e testes.
- **Jest**: Framework de testes, para validação dos endpoints de integração.

## Configuração do Ambiente


### Pré-requisitos

Certifique-se de que você tenha **Node.js** e **npm** instalados.

### Instruções para rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/LordPedroFelipe/backend-golden-raspberry-awards.git
   cd backend-golden-raspberry-awards

2. **Instale as dependências do projeto:**
   ```bash
    npm install

3. **Inicie a aplicação:**
   ```bash
    npm start

4. **Acesse a API em http://localhost:3000/api/producers.**

5. **Para rodar os testes de integração, execute:**
    ```bash
    npm test


### **Endpoints Principais**
GET /api/producers: Retorna uma lista com os produtores de filmes e seus intervalos mínimos e máximos entre vitórias no "Golden Raspberry Awards".

### **Conclusão**

Essa estrutura segue o modelo MVC com **TypeORM** e banco de dados SQLite em memória.
A aplicação lê o arquivo CSV ao iniciar, carrega os dados no banco de dados e expõe uma API para obter os produtores com maior e menor intervalo entre prêmios.

Os testes de integração garantem que os dados da API estão de acordo com os dados fornecidos.
