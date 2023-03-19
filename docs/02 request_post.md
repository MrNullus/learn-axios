# Learn Axios 👾

## Requisição POST
Para usar o método POST é necesario ter também dois parametros:

- url 

- data (dados que se quer enviar)


**Ex |>**

```js
const data = {
  title: 'foo',
  body: 'bar',
  userID: 1,
};

axios.post(url, data)
  .then(( response ) => renderOutput(response));
```

