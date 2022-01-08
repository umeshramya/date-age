const {Age} = require("date-age")
const age = new Age()
console.log(age.dobToAge(new Date("2021-12-31")))

console.log(age.ageToDob(1, "Months"))
