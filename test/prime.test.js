const isPrime = require('prime-number-check');

test(`test that 3 is prime`, () => {
    expect(isPrime(3)).toBe(true);
})

function sam(x){
    console.log(x);
}

test(`test that function sam is valiable`, () => {
    console.log = jest.fn();
    expect(sam(6)).toBe(undefined);
})