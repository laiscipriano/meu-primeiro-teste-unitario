const subtracao = require('./subtracao')
test('A função subtracao deve retornar 1 ao somar 2 e 1', () => {
    expect(subtracao(2, 1)).toBe(1)
})
