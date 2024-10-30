# backend-golden-raspberry-awards
Golden Raspberry Awards

# Golden Raspberry Awards API

## Instruções para rodar o projeto

1. Clone o repositório:
   ```bash
   git clone <URL>

2. Instale as dependências:
    npm install

3. Inicie a aplicação:
    npm start

4. A API estará disponível em http://localhost:3000/api/producers.

5. Para rodar os testes de integração, execute:
    npm test

---

### **Conclusão**

Essa estrutura segue o modelo MVC com **TypeORM** e banco de dados SQLite em memória.
A aplicação lê o arquivo CSV ao iniciar, carrega os dados no banco de dados e expõe uma API para obter os produtores com maior e menor intervalo entre prêmios.

Os testes de integração garantem que os dados da API estão de acordo com os dados fornecidos.