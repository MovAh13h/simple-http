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

