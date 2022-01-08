# date-age
converts date to age

```javascript
//date to age
const {Age} = require("date-age")
const age = new Age()
console.log(age.dobToAge(new Date("2021-12-31")))
```


```javascript
// approx date of birth 
console.log(age.ageToDob(1, "Months"))

```