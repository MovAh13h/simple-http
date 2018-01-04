function http(url, options) {
	if(options) {
		return new Promise(function(resolve, reject) {
			var request = new XMLHttpRequest();
			request.open(options.method, url, true);
			if(options.headers) {
				for(var i in options.headers) {
					request.setRequestHeader(i, options.headers[i]);
				}
			}
			if(options.method == ('POST'||'post')) {
				request.setRequestHeader('Content-Type', 'application/json');
				request.send(JSON.stringify(options.data));
			} else if (options.method == ('GET'||'get')) {
				request.send()
			}
			request.onload = function() {
				if(this.responseText) {
					resolve({
						status: request.status,
						data: JSON.parse(this.responseText)
					})
				} else {
					resolve('')
				}
			};
		});
	} else if(!options) {
		return new Promise(function(resolve, reject) {
			var request = new XMLHttpRequest();
			request.open('GET', url, true);
			if(options && options.headers) {
				for(var i in options.headers) {
					request.setRequestHeader(i, options.headers[i]);
				}
			}
			request.send();
			request.onload = function() {
				if(this.responseText) {
					resolve({
						status: request.status,
						data: JSON.parse(this.responseText)
					})
				} else {
					resolve('')
				}
			};;
		});
	}
}
