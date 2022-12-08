const input = require('./inputs/day2')

const shape_map = new Map([
    ['A', 'Rock'],
    ['B', 'Paper'],
    ['C', 'Scissors'],
    ['X', 'Rock'],
    ['Y', 'Paper'],
    ['Z', 'Scissors'],
])

const decision = new Map([
    ['X', 'Lose'],
    ['Y', 'Draw'],
    ['Z', 'Win'],
])

const shape_points = new Map([
    ['Rock', 1],
    ['Paper', 2],
    ['Scissors', 3],
]);

const outcome_points = new Map([
    ['Lose', 0],
    ['Draw', 3],
    ['Win', 6],
]);


const partOne = (input) => {

    let points = 0
    const rounds = input.split('\n',)

    rounds.forEach(e => {
        let rivalChoice = shape_map.get(e.charAt(0))
        let myChoice = shape_map.get(e.charAt(2))

        switch (rivalChoice) {
            case 'Rock':
                if (rivalChoice === myChoice) {
                    points = points + outcome_points.get('Draw') + shape_points.get(myChoice)
                }
                if (myChoice === 'Paper') {
                    points = points + outcome_points.get('Win') + shape_points.get(myChoice)
                }
                if (myChoice === 'Scissors') {
                    points = points + outcome_points.get('Lose') + shape_points.get(myChoice)
                }
                break;
            case 'Paper':
                if (rivalChoice === myChoice) {
                    points = points + outcome_points.get('Draw') + shape_points.get(myChoice)
                }
                if (myChoice === 'Scissors') {
                    points = points + outcome_points.get('Win') + shape_points.get(myChoice)
                }
                if (myChoice === 'Rock') {
                    points = points + outcome_points.get('Lose') + shape_points.get(myChoice)
                }
                break;
            case 'Scissors':
                if (rivalChoice === myChoice) {
                    points = points + outcome_points.get('Draw') + shape_points.get(myChoice)
                }
                if (myChoice === 'Rock') {
                    points = points + outcome_points.get('Win') + shape_points.get(myChoice)
                }
                if (myChoice === 'Paper') {
                    points = points + outcome_points.get('Lose') + shape_points.get(myChoice)
                }
                break;
        }
    })

    console.log(points)
}

const partTwo = (input) => {
    let points = 0
    const rounds = input.split('\n',)

    rounds.forEach(e => {
        let rivalChoice = shape_map.get(e.charAt(0))
        let myChoice = decision.get(e.charAt(2))

        switch (rivalChoice) {
            case 'Rock':
                if (myChoice === 'Draw') {
                    points = points + outcome_points.get('Draw') + + shape_points.get('Rock')
                    break;
                }
                if (myChoice === 'Win') {
                    points = points + outcome_points.get('Win') + + shape_points.get('Paper')
                    break;
                }
                if (myChoice === 'Lose') {
                    points = points + outcome_points.get('Lose') + + shape_points.get('Scissors')
                    break;
                }
            case 'Paper':
                if (myChoice === 'Draw') {
                    points = points + outcome_points.get('Draw') + + shape_points.get('Paper')
                    break;
                }
                if (myChoice === 'Win') {
                    points = points + outcome_points.get('Win') + + shape_points.get('Scissors')
                    break;
                }
                if (myChoice === 'Lose') {
                    points = points + outcome_points.get('Lose') + + shape_points.get('Rock')
                    break;
                }
            case 'Scissors':
                if (myChoice === 'Draw') {
                    points = points + outcome_points.get('Draw') + + shape_points.get('Scissors')
                    break;
                }
                if (myChoice === 'Win') {
                    points = points + outcome_points.get('Win') + + shape_points.get('Rock')
                    break;
                }
                if (myChoice === 'Lose') {
                    points = points + outcome_points.get('Lose') + + shape_points.get('Paper')
                    break;
                }
        }
    })
    console.log(points)
}

partOne(input)
partTwo(input)