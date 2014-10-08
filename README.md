# Iterators Lab
## Functional Programming


### Description

In the iterators lab we will be continuing our exploration of iterators and building a few more useful methods. These methods will belong to an Iterators namespace, which we discussed in class. We also will try to use various testing methods to verify that our code is working.


### Phase-1

Research the following term and summarize your findings on it two to three sentences:

* `higher-order function`
		H-O func can take a func as an argument that it can then use to modify what it does. It can also return a function.

Pretending we implemented the following methods, update this README with a description of each of the following and an example you've created:

* `max`
			Returns the highest value in an array.
* `min`
		Returns the lowest value in an array.
* `each`
		Runs through the array and does something with each element in the array.
* `map`
		Runs through an array, does something with each value, and returns an array of the resulting values.
* `filter`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
		Runs through an array and eliminates items that don't conform to a set of conditions.
* `reduce`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
		Runs through an array and uses a function to mash all the value into a single thingy.
* `reject`: [note](http://underscorejs.org/#reject)
		Runs through an array and keeps the itesm that don't conform to a set of conditions.

Use the notes provided to help guide your explanation.


### Phase-2

* Write a test in the `spec` folder for `min` and implement it in the `src/iterators.js` folder. There is a test for a `max` method already if you'd like to use that as inspiration.

* Re-implement the `each` function, but write the spec for it first. Continue this exercise with `map` and `filter` and write tests first!


### Phase-3

Implement the remaining iterator methods in the namespace and add tests for each one of them. Make sure that they return the correct data as well as datatype, and implement tests for edge cases (empty arrays, negative numbers).

