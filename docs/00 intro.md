# Learn Axios 👾

## Intro 

### O que é Axios?
Axios é um cliente HTTP baseado em **promessa (promisse)** para NodeJS e navegador.
Ou seja é uma library do ecossistema do JavaScript para fazer requisições HTTP.

É isómorfico - pode ser executado no navegador e no NodeJS com a mesma base de código. 

No lado do servidor, ele usa módulo HTTP NodeJS nativo, enquanto n cliente ele usa **XMLHttpRequests**.

---

### Promisse
É a promessa feita que tem uma resposta (positiva, ou negativa) e enquanto a promessa existir ela será pendente até ter uma resposta.

```bash
    ___________
    |        | |
    | Client | |  ______
    |        |/         |
    /--------/          |
  /[][][][]/            | Requisição
  ---------             |
                        |
         / \            |
          |            \ /
          |         _________
Resposta  |        | [    o] |
          |        |---------|
          |        | [ o   ] |
          |        |---------| 
          |_______ | [    o] |
                   |---------|
                   | [ o   ] |
                   |---------|
                   |  Server |
``` 

**Transformando** uma operação em código Axios:

```js
axios.get('user/?ID=12345')
  .then(( response ) => {
    // manipular sucesso
  })
  .catch(( error ) => {
    // manipular erro
  })
  .then(( ) => {
    // manipular sempre que for executado
  });
```
### Install
Para instalar vá a documentação do Axios;