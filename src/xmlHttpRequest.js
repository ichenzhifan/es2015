/**
Example using new XMLHttpRequest()
创建一个Promise

这个例子展示了如何用promise报告一个XMLHttpRequest的成功或失败。
*/
function $http(url) {
    let core = {
        ajax(method, url, args){
            var promise = new Promise((resolve, reject) => {
                // XMLHttpRequest instance
                let client = new XMLHttpRequest();
                let uri = url;

                // parameter check.
                if (args && (method === 'POST' || method === 'GET')) {
                    uri += '?';
                    let argCount = 0;

                    for (let key in args) {
                        if (argCount++) {
                            uri += '&';
                        }

                        uri += encodeURIComponent(key) + '=' + encodeURIComponent(args[key]);
                    }
                }

                client.open(method, uri);
                client.send();

                client.onload = (resp) => {
                    if (resp.status >= 200 && resp.status < 300) {
                        // Performs the function "resolve" when this.status is equal to 2xx
                        resolve(resp);
                    } else {
                        // Performs the function "reject" when this.status is different than 2xx
                        reject(resp.statusText);
                    }
                };

                client.onerror = (error) => {
                    reject(error.statusText);
                };

            });

            return promise;
        }
    };

    // adapter pattern.
    return {
        get(args){
            return core.ajax('GET', url, args);
        },
        post(args) {
            return core.ajax('POST', url, args);
        },
        put(args) {
            return core.ajax('PUT', url, args);
        },
        delete(args) {
            return core.ajax('DELETE', url, args);
        }
    }
}

$http('./data/test.json').get().then(result => {
	console.log(result);
}, error => {
	console.error(error);
});
