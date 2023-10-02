// @ts-check

/**
 * Total salary
 * @type {number}
 */
const salary = 4000;

/**
 * Type of lodge
 * @tyoe {string}
 */
const lodging = 'apartment'

/**
 * Lodge size
 * @type {string}
 */
const size = 'large'


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport:  10.2,
}
  
const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
}

const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
}

// You can change below however you want

const taxAsDecimal = parseInt(tax['913']) / 100

const startingAfterTax = salary - (salary * taxAsDecimal)

//const type = `${size}-${lodging}`

/**
 * Make lodge type using lodge and size of the lodge.
 * @param {string} sizeOfLodge
 * @param {string} lodging 
 * @returns {string}
 */
const lodgeType = (sizeOfLodge,lodging) => {
    return `${sizeOfLodge}-${lodging}`
}

const balance = startingAfterTax - expenses.transport - expenses.food - rent[lodgeType(size,lodging)]

console.log(balance.toFixed(2))