const numbers = Array.from(Array(100), (_, index) => index + 1)
numbers.forEach((nb) => {
    let res
    if (nb % 3 === 0) res = 'Chaussettes'
    if (nb % 5 === 0) res ? res += 'Sales' : res = 'Sales'
    console.log(res || nb)
})