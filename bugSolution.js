```javascript
// Correct usage of $in operator with multiple $or clauses
db.collection.find({ $or: [{ field: 1 }, { field: 2 }, { field: 3 }, { field: 4 }] });

//Alternative solution using $elemMatch if you want to search for arrays
db.collection.find({ field: { $elemMatch: { $in: [1, 2, 3, 4] } }});
```