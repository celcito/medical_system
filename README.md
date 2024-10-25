# Medical System

O Medical System é um sistema de gerenciamento de usuários e autenticação desenvolvido com Node.js e NestJS, utilizando TypeORM para interação com um banco de dados MySQL. O projeto está organizado em módulos separados para diferentes funcionalidades, como autenticação de usuários e gestão de cuidados médicos.

## Pré-requisitos

Antes de iniciar, certifique-se de ter o Docker instalado em sua máquina.

## Instalação

Para clonar e executar este projeto localmente, siga os passos abaixo:

1. Clone o repositório:
bash git clone [<medical_system> ](https://github.com/celcito/medical_system.git)


3. Inicialize o Docker e construa as imagens necessárias:

bash docker-compose up -d


Este comando também iniciará os contêineres definidos no `docker-compose.yml`, incluindo o servidor da aplicação e o banco de dados MySQL.

## Executando o Projeto

Após a inicialização bem-sucedida dos contêineres, você pode acessar a interface do usuário ou as APIs da aplicação através do navegador ou ferramentas de teste de API, como Postman.

A aplicação estará disponível em `http://localhost:3000`.


## endpoints

### /users
#### GET
##### Request
curl --location 'http://localhost:3000/users' \
--data ''
##### Response
```json
[
    {
        "id": 1,
        "email": "celso832@gmail.com",
        "password": "cedfbd9e35f4fd8a.2c3d3b57f67dd5061320b827fd5308f86ebad55cebb3e642f7a1fa1b09b440a1",
        "name": "celso",
        "birthDate": "2024-06-18T00:00:00.000Z"
    },
    {
        "id": 2,
        "email": "celso8325@gmail.com",
        "password": "2b9c0c69028ea66b.e4b200f6da435df40b544f5f56c6764b53b19e485656a6ff87d175c4817430d7",
        "name": "ccccc",
        "birthDate": "2024-06-14T00:00:00.000Z"
    }
]
```

### /users/id
#### GET
##### Request
curl --location 'http://localhost:3000/users' \
--data ''
##### Response
```json

{
    "id": 1,
    "email": "celso832@gmail.com",
    "password": "cedfbd9e35f4fd8a.2c3d3b57f67dd5061320b827fd5308f86ebad55cebb3e642f7a1fa1b09b440a1",
    "name": "celso",
    "birthDate": "2024-06-18T00:00:00.000Z"
}

```



### /users
#### POST
##### Request
```json
{
    "email": "testssqtss@333acme.com",
    "password": "@@@@@@%%%%teste12",
    "name": "Celso",
    "birthDate":"1977-04-29"
}
```
##### Response
```json
{
    "email": "testssqtss@333acme.com",
    "password": "760e4d8b7010e3ff.3987615995969dfdeeec711fa39dfd7ef02827c83a8c283c28454685d3d864d2",
    "name": "Celso",
    "birthDate": "1977-04-29T00:00:00.000Z",
    "id": 3
}

```

### /auth/sign-in
#### POST
##### Request
```json
{
    "email": "testssqtss@333acme.com",
    "password": "@@@@@@%%%%teste12",
}
```
##### Response
```json
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNlbHNvODMyQGdtYWlsLmNvbSIsInN1YiI6MSwiaWF0IjoxNzE3Njg5ODE5LCJleHAiOjE3MTc2OTM0MTl9.XY3I9Xulne-Fl7Aap1IEp2R4SgiL2sTw72oW3Rzpisg"
}



### /medical-care
GET
##### Request
curl --location --request GET 'http://localhost:3000/medical-care/' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNlbHNvODMyQGdtYWlsLmNvbSIsInN1YiI6MSwiaWF0IjoxNzE3NjgzMzkxLCJleHAiOjE3MTc2ODY5OTF9.W2AYfJA7OTYEUGpTyeMWmvORUv4ZQiuYI2HOaEAKOLA'
##### Response
```text
Bem vindo!

```

## Dependências

As dependências do projeto são gerenciadas via npm. Para instalar todas as dependências necessárias, execute:

bash npm install


Dentro do contêiner Docker, após a construção da imagem.

## Migrando o Banco de Dados

Para migrar o banco de dados, você pode usar npm migratin: run , mas o docker ja faz a migração automaticamente ao iniciar os contêineres
## Contribuição

Contribuições são sempre bem-vindas Por favor, leia o código de conduta antes de contribuir.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app


Nest is [MIT licensed](LICENSE).
# medical_system
