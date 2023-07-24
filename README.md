
# Car Shop

Uma API com CRUD para gerenciar uma concessionária de veículos. Sendo utilizado o banco de dados MongoDB através do framework Mongoose.


## Oque foi desenvolvido

- Desenvolvido endpoints que estaão conectados ao banco de dados seguindo os princípios do REST;
- Usado conceitos de orientação a objetos para estruturar o código;
- Trabalhado a criação de testes unitários para garantir a qualidade do código;

## Aprendizados

- Herança e abstração
- NoSQL
- POO
- ODM



## Stack utilizada

**Back-end:** Mongo, Mongoose, Typescript

## Documentação da API

#### Retorna todos os carros

```http
  GET /cars
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave da sua API |

#### Retorna um carro

```http
  GET /cars/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

#### Cadastra um novo carro

```http
POST /cars
```
- O corpo da requisição poderá seguir o formato abaixo:

```json
{
  "model": "Marea",
  "year": 2002,
  "color": "Black",
  "status": true,
  "buyValue": 15.990,
  "doorsQty": 4,
  "seatsQty": 5
}
```

#### Atualiza um carro

```http
  PUT /cars/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

- O corpo da requisição poderá seguir o formato abaixo:
```json
{
  "model": "Marea",
  "year": 1992,
  "color": "Red",
  "status": true,
  "buyValue": 12.000,
  "doorsQty": 2,
  "seatsQty": 5
}
```
#### Deleta um carro

```http
  DELETE /cars/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |



## Autores

- [@beterraba](https://www.github.com/beterrabaA)

