let objUrlMega = $("#basic-modal-content p")[1];

let urlMega = objUrlMega.outerHTML.substring(objUrlMega.outerHTML.indexOf("href") + 6, objUrlMega.outerHTML.indexOf('">'));

console.log(urlMega);