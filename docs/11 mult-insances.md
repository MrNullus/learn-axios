# Learn Axios 👾

## Multiplas Instancias do Axios
Criar mult instancias do Axios para manipular ele com varios contextos.

**Desse jeito:**

```js
const newAxios = axios.create({
	baseURL: 'https://egg.api.com'
})

newAxios.defaults.headers.common['Authorization'] = 'New Axios';
```

Assim podera consumir duas ou mais APIs com diferentes instâncias do Axios.
