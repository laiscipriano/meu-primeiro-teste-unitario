const adicao = require('./adicao')
test('A função adiçao deve retornar 1 ao somar 2 e 1', () => {
    expect(adicao(2, 1)).toBe(1)
})