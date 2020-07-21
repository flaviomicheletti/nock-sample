# A simple Nock sample

Mais um exemplo interessante do uso do [Nock](https://github.com/nock/nock).

Execute com `npm test`.

![nock-sample](https://user-images.githubusercontent.com/1257048/86984478-17994600-c165-11ea-9af9-4b72b9b84742.png)

Este exemplo consome a API pública http://jservice.io/api/.

O arquivo `basic.js` serve para uma checagem visual (ver no terminal)
o resultado da api.

### Coverage

    > jest --coverage

    PASS  ./api.test.js
    JService
        ✓ GET /category (21 ms)
        ✓ GET /category fail (6 ms)
        ✓ GET /random (9 ms)
        ✓ GET /random fail (3 ms)

    ----------|---------|----------|---------|---------|-------------------
    File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
    ----------|---------|----------|---------|---------|-------------------
    All files |     100 |      100 |     100 |     100 |                   
    api.js   |     100 |      100 |     100 |     100 |                   
    ----------|---------|----------|---------|---------|-------------------
    Test Suites: 1 passed, 1 total
    Tests:       4 passed, 4 total
    Snapshots:   0 total
    Time:        1.546 s
    Ran all test suites.

### Release

- [v1](https://github.com/flaviomicheletti/nock-sample/tree/v1) Versão com Mocha e Request
- [v2](https://github.com/flaviomicheletti/nock-sample/tree/v2) Versão com Jest e Axios (você está aqui)


### Tutorial

- [https://youtu.be/3G_yyE5GeIk](https://youtu.be/3G_yyE5GeIk). 


### Veja também

- https://github.com/nock/nock/issues/699