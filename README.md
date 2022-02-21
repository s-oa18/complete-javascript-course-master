# Learning-JavaScript
 My JavaScript learning roadmap - "The Complete JavaScript Course 2022: From Zero to Expert!" by Jonas Schmedtman.

## Resources
[The Complete JavaScript Course 2022: Zero to Expert!](https://www.udemy.com/course/the-complete-javascript-course/)

## DATA STRUCTURES, MODERN OPERATORS AND STRINGS

### Destructuring Arrays

This is an ES6 feature and its a way of unpacking values from an array or an object into separate variables i.e. Unpacking a complex data structure into a smaller data structure like a variable.
* Retrieving an array into its own variable:

  *Without Destructuring*
  
  ```javascript
  const arr = [2, 3, 4];
  const a = arr[0];
  const b = arr[1];
  const c = arr[2];
  
  console.log(a, b, c);
  
  //output will be (2, 3, 4)
  ```
  
  *With Destructuring*
  
  All the three variables can be declared at the same time;
  ```javascript
  let arr = [2, 3, 4];
  const [x, y, z] = arr;
  console.log(x, y, z);
  
  //output will be (2, 3, 4)
  ```
The square bracket is used in destructuring arrays. Whenever JavaScript sees '[]' square bracket at the left side of an '=' equal sign, it knows it should perform destructuring.

* Switching variables

Let say you have an object 
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

To switch 'Marketing' and 'Sales' from 'department' array; you first have to list them from the department array
```javascript
let [first, second] = department.agency
console.log(first, second);

//output will be (Marketing, Sales)
```

*Without Destructuring;*

Switching first and Second values from the output will be;
```javascript
const temp = first;
      first = second;
      second = temp;
console.log(first,second);
```

*With Destructuring;*

```javascript
   [first, second] = [second, first];
   console.log(first, second);
```




  
### The Spread Operator

The spread operator can be used to expand an array into all its element. unpacking all array elements at once.

For instance; *without The Spread Operator*; This is how we can add numbers at the beginning of this array (arr).




```javascript
const arr = [3, 4, 5];
const badNewArr = [1, 2, arr[0] , arr[1], arr[2]];
console.log badNewArr;

```



