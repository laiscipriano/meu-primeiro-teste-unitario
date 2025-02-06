const soma = require('./soma')

test('A função soma deve retornar 5 ao somar 2 e 3', () => {
    expect(soma(2, 3)).toBe(5)
})

test(' função soma deve retornar 2 ao somar 1 e 1', () => {
    expect(soma(1, 1)).toBe(2)
})