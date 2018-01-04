# Simple Http

## Usage

```js
http('/url').then(data => console.log(data));
```

With options
```js

// GET
http('/url', {
	method: 'GET',
	headers: {// Headers}
})

// POST
http('/url', {
	method: 'POST',
	data: { // Data },
	headers: { // Headers}
})
```

**NOTE:** Error Handling isn't supported yet. Chain the 'catch' method after the request to handle errors