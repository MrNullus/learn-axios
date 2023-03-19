# Learn Axios 👾

## Interceptadores
Usados para fazer alguma transfrmação geral da aplicação, já que sempre fara isso quando tiver uma requisição;

**Ex |>** 

```js
// #> Intercept Request
// usado por exemlo para intercetar a requisição e injetar um json web token
axios.interceptors.request.use(( config ) => {
	config.headers.Authorization = 'dsfkandcuilmxmcmsaxZXdkaxmkc';
	console.log(config.headers);

	// Qualquer status que seja 2XX terá esse retorno
	return config;
}, ( error ) => {
		console.log('errooo');

		// Qualquer status que não seja 2XX terá esse retorno
		return new Promise.reject(error);
});


// #> Intercept Response
// usado por exemlo para intercetar a requisição e injetar um json web token
axios.interceptors.response.use(( response ) => {
	console.log(config.headers);

	// Qualquer status que seja 2XX terá esse retorno
	return response;
}, ( error ) => {
	console.log('errooo');
	
	// Qualquer status que não seja 2XX terá esse retorno
	return new Promise.reject(error);
});
```

O **Interceptadores de response** podem ser usados para handling error assim não usaria `catch`.
