/**
 * Return an instance of ExtJsObject
 * @param {*} e 
 * @param {String|Number} index 
 */
function $(e, index) {
	return new ExtJsObject(e, index);
}
/**
 * Return an ExtJs Object
 * @constructor
 * @param {*} element 
 * @param {String|Number} e_index 
 */
function ExtJsObject(element, e_index) {
	var re;

	if (typeof (element) === "string") {
		re = document.querySelectorAll(element);
		if (e_index != undefined) {
			re = [re[e_index]];
		}
	} else if (element == undefined || element == document) {
        /**
		 * @param {Function} toDo function that is called when the document has been loaded
		 */
		this.ready = function (toDo) {
			document.addEventListener("DOMContentLoaded", toDo);
		}
		return this;
	} else if (typeof (element) === "object") {
		if (element.length == undefined) {
			re = [element];
		} else if (e_index != undefined) {
			re = [element[e_index]];
		} else {
			re = element;
		}
	} else if (element.type == "ExtJsObject") {
		return element;
	} else {
		return false;
	}

	this.type = "ExtJsObject";
	this.node = re;

    /**
     * @param {String} html HTML to put inside the element or undefined or nothing
     * @return {String|Object} HTML that is inside the first element or the current instance.
     */
	this.html = function (html) {
		for (var i = 0; i < this.node.length; i++) {
			var e = this.node[i];

			if (typeof (html) === "string" || typeof (html) === "number") {
				e.innerHTML = html;
			} else {
				return e.innerHTML;
			}
		}
		return this;
	}

	/**
	 * @param {Function|Undefined} toDo function that is called when somebody click on the element  or undefined or nothing
	 * @param  {String|Undefined} element specifies the element on which we are going to listen the click.
	 */
	
	this.click = function (toDo, element) {

		for (var i = 0; i < this.node.length; i++) {
			var e = this.node[i];

			if (element === undefined) {
				if (toDo !== undefined) {
					e.addEventListener("click", toDo);

				} else {
					e.click();
				}
			} else if (toDo !== undefined) {
				var x = e;
				e.addEventListener("click", function (event) {
					if (x.querySelector(element) == event.target) {
						xe = x.querySelector(element);
						xe.toDo = toDo;
						xe.toDo();
					}
				});
			} else {
				var x = e;
				xe = x.querySelector(element);
				xe.click();
			}

		}
		return this;
	}

	/**
	 * @param {Number|String} index index of the element or undefined or nothing
	 * @return {Object} a DOM element
	 */

	this.get = function (index) {
		if(index != undefined){
			if(this.node[index] == undefined) throw new IndexOutOfArrayExecption("ExtJsObject.get undefined index node[" + index + "]");
			return this.node[index];
		}else{
			if(this.node[0] == undefined) throw new IndexOutOfArrayExecption("ExtJsObject.get undefined index node[0]");
			return this.node[0];
		}
	}

}



var AR = new ExtJsAjaxRequestObject(); // AjaxRequest with ExtJs

function ExtJsAjaxRequestObject() {

	/**
     * @param {String} url URL of the resource
     * @param {Function} func function which is called when the request has been performed correctly
     * @param {Function} error function which is called when the request has not been performed correctly
     */
	this.GET = function (url, func, error) {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function () {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				func(xhttp.responseText);
			} else if (xhttp.readyState == 4) {

				if (error != undefined) {
					try {
						error();
					} catch (e) {

					}
				}

			}
		}
		xhttp.open("GET", url, true);
		xhttp.send();
	}
    /**
     * @param {String} url URL of the resource
     * @param {Function} func function which is called when the request has been performed correctly
     * @param {Function} error function which is called when the request has not been performed correctly
     */
	this.DELETE = function (url, func, error) {
		var xhttp = new XMLHttpRequest();

		xhttp.onreadystatechange = function () {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				func(xhttp.responseText);
			} else if (xhttp.readyState == 4) {

				if (error != undefined) {
					try {
						error();
					} catch (e) {

					}
				}

			}
		}
		xhttp.open("GET", url, true);
		xhttp.setRequestHeader("x-http-method-override", "DELETE");

		xhttp.send();
	}
	/**
     * @param {String} url URL of the resource
     * @param {Array} data assoc array with the data that will be sent
     * @param {Function} func function which is called when the request has been performed correctly
     * @param {Function} error function which is called when the request has not been performed correctly
     */
	this.POST = function (url, data, func, error) {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function () {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				func(xhttp.responseText);
			} else if (xhttp.readyState == 4) {

				if (error != undefined) {
					try {
						error();
					} catch (e) {

					}
				}

			}
		}
		xhttp.open("POST", url, true);
		var keys = Object.keys(data);
		var d = "";
		for (var i = 0; i < keys.length; i++) {
			if (i !== 0) {
				d = d + "&";
			}
			d = d + keys[i] + "=" + data[keys[i]];
		}
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send(d);
	}
    /**
     * @param {String} url URL of the resource
     * @param {Array} data assoc array with the data that will be sent
     * @param {Function} func function which is called when the request has been performed correctly
     * @param {Function} error function which is called when the request has not been performed correctly
     */
	this.PUT = function (url, data, func, error) {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function () {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				func(xhttp.responseText);
			} else if (xhttp.readyState == 4) {

				if (error != undefined) {
					try {
						error();
					} catch (e) {

					}
				}

			}
		}
		xhttp.open("POST", url, true);
		var keys = Object.keys(data);
		var d = "";
		for (var i = 0; i < keys.length; i++) {
			if (i !== 0) {
				d = d + "&";
			}
			d = d + keys[i] + "=" + data[keys[i]];
		}
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.setRequestHeader("x-http-method-override", "PUT");
		xhttp.send(d);
	}
}


/* Exceptions */

function IndexOutOfArrayExecption (message){
	this.message = message;
	this.name = "IndexOutOfArrayExecption";
}