# Learn Axios 👾

## Transformar Respostas

Usado quando precisa adicionar um campo assim que for pego o payload (dados);

**Ex |> **

```js
const transform = () => {
  const config = {
      params: {
          _limit: 5
      },
      transformResponse: [( data ) => {
          const payload = JSON.parse(data).map(( item ) => {
              return {
                  title: item.title
              }
          });

          return payload;
      }],
  };

  axios.get(url, config)
      .then(( response ) => renderOutput(response));

  console.log('transform');
}
```

