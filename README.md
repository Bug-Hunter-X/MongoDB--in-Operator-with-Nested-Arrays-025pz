# MongoDB $in Operator with Nested Arrays
This repository demonstrates an uncommon error when using the `$in` operator with nested arrays in MongoDB queries.

The `bug.js` file shows an example of an incorrect query that uses `$in` with an array of arrays. This can lead to unexpected and incorrect results because the `$in` operator isn't designed to handle nested arrays like this.

The `bugSolution.js` file demonstrates the correct way to structure the query, ensuring accurate results.

This example highlights a subtle but crucial aspect of MongoDB query construction.