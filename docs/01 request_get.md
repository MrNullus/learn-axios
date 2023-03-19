# Learn Axios 👾

## Requisição GET 
A requisição GET é usada para em geral para retornar dados do servidor.

A utilização do Axios se dá em implementar a variavel `axios`;

Para o método GET é necessario no mínimo dois atributos dentro
do objeto de configuração, sendo eles: o método e a url;

**Ex |>**

```js


axios({
  method: 'get',
  url: 'https://jsonplaceholder.typicode.com/posts'
});

// O GET funciona de modo default então pode-se apenas omitir um argumento:
axios({
  url: 'https://jsonplaceholder.typicode.com/posts'
});
```

Pode-se usar de outra forma mais enxuta e limpa:

```js
axios.get(url);

// Servindo para os outros métodos:
axios.post(url);
```

### Passagem de parametros

Pode-se usar o atributo params para passar os parametros da requisição 
dentro dele usa-se o nome do parametro e o seu valor.

**Ex |>**

```js
axios.get('https://jsonplaceholder.typicode.com/posts', {
  params: {
      _limit: 5
  }
})
  .then(( response ) => {
      renderOutput(response);
  });
```
