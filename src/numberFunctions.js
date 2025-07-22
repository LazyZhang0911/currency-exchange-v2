import isPrime from "prime-number-check";
export const checkNumber = (value) => {
    return isPrime(value)? `The number ${value} is prime.`:`The number ${value} is not prime.`
}