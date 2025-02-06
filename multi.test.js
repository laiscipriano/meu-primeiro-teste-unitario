const multi = require('./multi')

test('A função multi deve retornar 4 ao somar 2 e 2 ', () => {
    expect(multi(2, 2)).toBe(4)
})