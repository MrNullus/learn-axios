# Learn Axios 👾

## Requisição PUT e PATCH
Os dois verbos HTTP, são parecidos, mas:

+ PUT -> é usado para quando for alterar **todos** os atributos de um dado objeto;

+ PATCH -> é usado quand for ter que alterar um unico atributo deste dado objeto;

**Ex |>**

```js
const put = () => {
    const data = {
        id: 1,
        title: 'Dev Punk',
        body: 'Dev Full Punkoso Mobile',
        userID: 1,
    };

    axios.put(`${url}/1`, data)
        .then(( response ) => renderOutput(response));

    console.log('put');
}


const patch = () => {
    const data = {
        title: 'Dev Punk da Silva',
    };

    axios.patch(`${url}/1`)
        .then(( response ) => renderOutput(response));

    console.log('patch');
}
```