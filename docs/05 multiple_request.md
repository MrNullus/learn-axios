# Learn Axios 👾

## Multiplas Requisições
Para fazer essas requisições o Axios usa as promisses do prorio JS.
Usando o método `all` para fazer isso:

**Ex |>**

```js
const multiple = () => {
  Promisse.all([
      axios.get(`${url}?_limit=5`),
      axios.get(`${url_users}?_limit=5`),
  ]).then(( response ) =>  {
      console.table(response[0].data);
      console.table(response[1].data);
  });

  console.log('multiple');
}
```
