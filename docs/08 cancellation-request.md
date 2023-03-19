# Learn Axios 👾

## Cancelamento de Requisição

Para fazer isso, usa-se `AbortController` (nativa do JS) ou `CancelToken` 
que são recomendadas pela Documentação do Axios.

**Ex |>**

```js
const cancel = () => {
  const controller = new AbortController();
  const config = {
    params: {
        _limit: 5
    },
    signal: controller.signal
  };

  axios.get(url, config)
    .then(( response ) => renderOutput(response))
    .catch(( e ) => {
        console.log("MENSAGEM DE ERRO: ", e.message);
    });

  controller.abort();
  console.log('cancel');
}
```
