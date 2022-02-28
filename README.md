# Learning-JavaScript

My JavaScript learning roadmap - "The Complete JavaScript Course 2022: From Zero to Expert!" by Jonas Schmedtman.

## Resources

[The Complete JavaScript Course 2022: Zero to Expert!](https://www.udemy.com/course/the-complete-javascript-course/)

## DATA STRUCTURES, MODERN OPERATORS AND STRINGS

### Destructuring Arrays

This is an ES6 feature and its a way of unpacking values from an array or an object into separate variables i.e. Unpacking a complex data structure into a smaller data structure like a variable.

- **Retrieving an array into its own variable:**

  _Without Destructuring_

  ```javascript
  const arr = [2, 3, 4];
  const a = arr[0];
  const b = arr[1];
  const c = arr[2];

  console.log(a, b, c);

  //output will be (2, 3, 4)
  ```

  _With Destructuring_

  All the three variables can be declared at the same time;

  ```javascript
  let arr = [2, 3, 4];
  const [x, y, z] = arr;
  console.log(x, y, z);

  //output will be (2, 3, 4)
  ```

  The square bracket is used in destructuring arrays. Whenever JavaScript sees '[]' square bracket at the left side of an '=' equal sign, it knows it should perform destructuring.

- **Switching variables**

Let's say you have an object called agency;

```javascript
const agency = {
name: 'Rally Digital',
location: '21 Adjiringano St',
department: ['Marketing', 'Sales', 'Procurement'],
paidService: ['Web design', 'Graphic design', 'SocialMedia Marketing'],
freeService: ['Web video Creation', 'Campaigning', 'Public Relations'],

bookAgency: function (paidIndex, freeIndex){
             return [this.paidServices[paidIndex], this.freeServices[freeIndex]]
};
```

To switch 'Marketing' and 'Sales' from 'department' property; you first have to list them from the department array

```javascript
let [first, second] = department.agency;
console.log(first, second);

//output will be (Marketing, Sales)
```

_Without Destructuring;_

Switching first and Second values from the output will be;

```javascript
const temp = first;
first = second;
second = temp;
console.log(first, second);
```

_With Destructuring;_

```javascript
[first, second] = [second, first];
console.log(first, second);
```

- **Return an array from a function and destruct the result into different variables**

_To return an array from the function,_
let's consider the function (bookAgency) from the object above;

```javascript
agency.bookAgency(0, 1);
console.log(agency.bookAgency(0, 1));

//output ; ['Web design', 'Campaigning']
```

This gives an **array** of 'Web design' and 'Campaigning', because the values 0 and 1 in the parenthesis points to the indexes of paidService and freeService properties (paidIndex and freeIndex). Therefore a 0 paidIndex corresponds to 'Web design' and 1 freeindex corresponds to 'Campaigning'.

_Destructuring the array;_

```javascript
const [paid, free] = agency.bookAgency(0, 1);
console.log(paid, free);

//output; ('Web design', 'Campaigning')
```

- **Nested Destructuring**

For a nested array;

```javascript
let nested = [1, 4, [6, 8]];

// destructuring 1 and [6, 8] from nested will be;

const [a, , b] = nested;
console.log(a, b);

//output; 1, [6, 8]
```

JavaScript recognises the space between a and b ([a, , b]) and skips the corresponding value in the array, i.e 4.

_To destructure all three variables i.e. 1, and [6, 8]_

```javascript
const [a, , [b, c] = nested;
console.log(a, b, c);

//output; 1, 6, 8
```

**NB:** For default values where the length of an array is unknown;
Assign eac variable in a destructuring a value of 1. For instance;

```javascript
const [a = 1, b = 1, c = 1, d = 1] = [8, 9];
console.log(a, b, c, d);

//output; 8, 9, 1, 1
//This shows there are only two values in the array; 8 and 9
```

### Destructuring Objects

Curly braces '{}' is used in destructuring objects. The variable names of the properties to be retrieved from the object must directly match the property names of the object. Lets look at an example; considering the object above;

```javascript
const { name, department } = agency;
console.log(name, department);
```

Destructuring objects is an extremely useful addition to the JS language especially when dealing with the results from an API call (Retrieving data from another web application).

### The Spread Operator

The spread operator can be used to expand an array into all its element. Unpacking all array elements at once.

For instance; _without The Spread Operator_; This is how we can add numbers at the beginning of this array (arr).

```javascript
const arr = [3, 4, 5];
const badNewArr = [1, 2, arr[0] , arr[1], arr[2]];
console.log badNewArr;

```
