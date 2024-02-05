const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const sum = myNums.reduce((acc , currval) => {
//     console.log(`accumulator : ${acc}, current value: ${currval}`);
//    return acc + currval
// }, 0)


const sum = myNums.reduce( (acc, currval) =>acc + currval ,0)

//console.log(sum);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },

    {
        itemName: "data science course",
        price: 12999
    }
]

const total = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(total);