# Learn Axios 👾

## Tratamento de Erros
Os erros no Axios podem ser tratados da seguinte forma:

```js
axios.get(`${url}/url-errada`)
  .then(( response ) => renderOutput(response))
  .catch(({ response }) => {
      renderOutput(response);
      console.log(response.data); // dados do erro
      console.log(response.status); // status desse erro
      console.log(response.headers); // retorna os headers dessa resposta
  });
```