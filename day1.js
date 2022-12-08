const input = require('./inputs/day1')

const mostCalories = (input) => {

    const caloriesByElf = input.split('\n',)

    let count = 0
    let calculatedCalories = []

    caloriesByElf.forEach(e => {
        if (e === '') {
            calculatedCalories.push(count)
            count = 0
        }

        count = count + Number(e)
    });

    calculatedCalories.sort(function (a, b) { return a - b })

    const totalCalories = (arr) => {
        const topCalories = arr.slice(-1)


        return topCalories.reduce((sum, value) => sum + value, 0)
    }

    console.log(totalCalories(calculatedCalories))
}


const topThreeCalories = (input) => {

    const caloriesByElf = input.split('\n',)

    let count = 0
    let calculatedCalories = []

    caloriesByElf.forEach(e => {
        if (e === '') {
            calculatedCalories.push(count)
            count = 0
        }

        count = count + Number(e)
    });

    calculatedCalories.sort(function (a, b) { return a - b })

    const totalCalories = (arr) => {
        const top3 = arr.slice(-3)


        return top3.reduce((sum, value) => sum + value, 0)
    }

    console.log(totalCalories(calculatedCalories))
}

mostCalories(input)
topThreeCalories(input)
