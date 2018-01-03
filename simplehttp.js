function http(url, options) {
	if(options) {
		if((options.method == ('POST' || 'post')) && (!options.data)) {
			console.error('Method not defined')
			return;
		} 
		else if(!options.method) {
			console.error('Data is required for POST request');
			return;
		}
		else if (options.method != ('GET' || 'get' || 'POST' || 'post')) {
			console.error('Allowed request types are GET and POST only')
			return;
		}
		else {
			return new Promise(function(resolve, reject) {
				var request = new XMLHttpRequest();
				if(options.headers) {
					for(var i in options.headers) {
						request.setRequestHeader(i, options.headers[i]);
					}
				}
				request.open(options.method, url, true);
				request.onreadystatechange = function() {
					if(request.readyState == 4) {
						resolve(request.responseText)
					}
				};
				request.send();
			});
		}
	} else if(!options) {
		return new Promise(function(resolve, reject) {
			var request = new XMLHttpRequest();
			request.open('GET', url, true);
			request.onreadystatechange = function() {
				if(request.readyState == 4) {
					resolve(request.responseText)
				}
			};
			request.send();
		});
	}
}
