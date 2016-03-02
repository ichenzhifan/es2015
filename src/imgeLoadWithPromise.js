function loadImg(url) {
    return new Promise((resolve, reject) => {
        // XHR to load image
        let request = new XMLHttpRequest();
        request.open('GET', url);
        request.responseType = 'blob';

        requst.onload = () => {
            if (request.status === 200) {
                resolve(request.response);
            } else {
                reject(Error('Image don\'t load successful. error code: ' + request.statusText))
            }
        };

        request.onerror = () => {
            reject(Error('The network issue'));
        };

        request.send();
    });
}

var body = document.querySelector('body');
var myImage = new Image();

loadImg('t.jpg').then(response => {
    var imageUrl = URL.createObjectURL(response);

    myImage.src = imageUrl;
    body.appendChild(myImage);

}).catch(error => {
    console.error(error);
});
