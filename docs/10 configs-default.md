## Interceptadores
Usados para centralizar algumas informaçoes usadas na aplicação quem faz iss é o Axios;

Com isso não é necessario colocar a URL e sim os endpoints (os ponts de captura e envio de dados da API):

**Ex |>** 

```js
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

const get = () => {
  const config = {
    params: {
      _limit: 5
    }
  };

  // #> Desse modo apenas passa o endpoint, já que ele irá incluir autmaticamente a `baseURL`
  axios.get('posts', config)
    .then(( response ) => renderOutput(response));

  console.log('get');
}
```

- Se a URL for diferente basta passar a URL e não deixar apenas o endpoint;

