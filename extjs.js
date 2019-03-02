class IndexOutOfArrayExecption {
    constructor(message) {
        this.message = message;
        this.name = 'IndexOutOfArrayException';
    }
}
class ExtJsObject {
    constructor(element, e_index) {
        var re;
        if (typeof element === 'string') {
            re = document.querySelectorAll(element);
            if (e_index != undefined) {
                re = [re[e_index]];
            }
        }
        else if (element == undefined || element == document) {
            this.ready = function (toDo) {
                document.addEventListener('DOMContentLoaded', toDo);
            };
            return this;
        }
        else if (typeof element === 'object') {
            if (element.length == undefined) {
                re = [element];
            }
            else if (e_index != undefined) {
                re = [element[e_index]];
            }
            else {
                re = element;
            }
        }
        else if (element.type == 'ExtJsObject') {
            return element;
        }
        else {
            return;
        }
        this.type = 'ExtJsObject';
        this.node = re;
    }
    html(html) {
        if (html != undefined) {
            for (var i = 0; i < this.node.length; i++) {
                var e = this.node[i];
                if (typeof html === 'string' || typeof html === 'number') {
                    e.innerHTML = html;
                }
            }
            return this;
        }
        else {
            return this.node[0].innerHTML;
        }
    }
    text(text) {
        if (text != undefined) {
            for (var i = 0; i < this.node.length; i++) {
                var e = this.node[i];
                if (typeof text === 'string' || typeof text === 'number') {
                    e.innerText = text;
                }
            }
            return this;
        }
        else {
            return this.node[0].innerText;
        }
    }
    click(toDo, element) {
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            if (element === undefined) {
                if (toDo !== undefined) {
                    e.addEventListener('click', toDo);
                }
                else {
                    e.click();
                }
            }
            else if (toDo !== undefined) {
                var x = e;
                e.addEventListener('click', function (event) {
                    if (x.querySelector(element) == event.target) {
                        let xe = x.querySelector(element);
                        xe.prototype.toDo = toDo;
                        xe.toDo();
                    }
                });
            }
            else {
                var x = e;
                let xe = x.querySelector(element);
                xe.click();
            }
        }
        return this;
    }
    dblclick(toDo, element) {
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            if (element === undefined) {
                if (toDo !== undefined) {
                    e.addEventListener('dblclick', toDo);
                }
                else {
                    e.dblclick();
                }
            }
            else if (toDo !== undefined) {
                var x = e;
                e.addEventListener('dblclick', function (event) {
                    if (x.querySelector(element) == event.target) {
                        let xe = x.querySelector(element);
                        xe.prototype.toDo = toDo;
                        xe.toDo();
                    }
                });
            }
            else {
                var x = e;
                let xe = x.querySelector(element);
                xe.dblclick();
            }
        }
        return this;
    }
    hover(toDo, element) {
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            if (element === undefined) {
                if (toDo !== undefined) {
                    e.addEventListener('mouseover', toDo);
                }
                else {
                    e.click();
                }
            }
            else if (toDo !== undefined) {
                var x = e;
                e.addEventListener('mouseover', function (event) {
                    if (x.querySelector(element) == event.target) {
                        let xe = x.querySelector(element);
                        xe.prototype.toDo = toDo;
                        xe.toDo();
                    }
                });
            }
        }
        return this;
    }
    leave(toDo, element) {
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            if (element === undefined) {
                if (toDo !== undefined) {
                    e.addEventListener('mouseleave', toDo);
                }
                else {
                    e.click();
                }
            }
            else if (toDo !== undefined) {
                var x = e;
                e.addEventListener('mouseleave', function (event) {
                    if (x.querySelector(element) == event.target) {
                        let xe = x.querySelector(element);
                        xe.prototype.toDo = toDo;
                        xe.toDo();
                    }
                });
            }
        }
        return this;
    }
    get(index) {
        if (index != undefined) {
            if (this.node[index] == undefined)
                throw new IndexOutOfArrayExecption('ExtJsObject.get undefined index node[' + index + ']');
            return this.node[index];
        }
        else {
            if (this.node[0] == undefined)
                throw new IndexOutOfArrayExecption('ExtJsObject.get undefined index node[0]');
            return this.node[0];
        }
    }
    exists(index) {
        if (index != undefined)
            return this.node[index] != undefined;
        else
            return this.node.length != 0;
    }
    height(value) {
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            if (value !== undefined) {
                e.style.height = value;
            }
            else {
                return e.offsetHeight;
            }
        }
        return this;
    }
    width(value) {
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            if (value !== undefined) {
                e.style.width = value;
            }
            else {
                return e.offsetWidth;
            }
        }
        return this;
    }
    addClass(classx) {
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            e.classList.add(classx);
        }
        return this;
    }
    hasClass(classx) {
        return this.node[0].classList.contains(classx);
    }
    removeClass(classx) {
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            e.classList.remove(classx);
        }
        return this;
    }
    remove() {
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            e.parentElement.removeChild(e);
        }
    }
    child(element_type) {
        var e_list = [];
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            var elem = document.createElement(element_type);
            e.appendChild(elem);
            e_list.push(elem);
        }
        return $(e_list);
    }
    css(prop, value, i) {
        var y = i;
        if (i == undefined) {
            i = 0;
        }
        if (value == undefined) {
            return this.node[i].style[prop];
        }
        else if (y != undefined) {
            this.node[i].style[prop] = value;
            return this;
        }
        else {
            for (let i = 0; i < this.node.length; i++) {
                var e = this.node[i];
                e.style[prop] = value;
            }
            return this;
        }
    }
    attr(attr, value, i) {
        var y = i;
        if (i == undefined) {
            i = 0;
        }
        if (value == undefined) {
            return this.node[i].getAttribute(attr);
        }
        else if (y != undefined) {
            this.node[i].style[attr] = value;
            return this;
        }
        else {
            for (let i = 0; i < this.node.length; i++) {
                var e = this.node[i];
                e.setAttribute(attr, value);
            }
            return this;
        }
    }
    parent(selector = undefined) {
        var parents = [];
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            if (selector == undefined) {
                parents.push(e.parentElement);
            }
            else {
                parents.push(e.closest(selector));
            }
        }
        return $(parents);
    }
    value(text) {
        if (text != undefined) {
            for (var i = 0; i < this.node.length; i++) {
                var e = this.node[i];
                if (typeof text === 'string' || typeof text === 'number') {
                    e.value = text;
                }
            }
            return this;
        }
        else {
            let node = this.node[0];
            return this.node[0].value;
        }
    }
    keypress(toDo, element) {
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            if (element === undefined) {
                if (toDo !== undefined) {
                    e.addEventListener('keypress', toDo);
                }
            }
            else if (toDo !== undefined) {
                var x = e;
                e.addEventListener('keypress', function (event) {
                    if (x.querySelector(element) == event.target) {
                        let xe = x.querySelector(element);
                        xe.prototype.toDo = toDo;
                        xe.toDo();
                    }
                });
            }
        }
        return this;
    }
    input(toDo, element) {
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            if (element === undefined) {
                if (toDo !== undefined) {
                    e.addEventListener('input', toDo);
                }
            }
            else if (toDo !== undefined) {
                var x = e;
                e.addEventListener('input', function (event) {
                    if (x.querySelector(element) == event.target) {
                        let xe = x.querySelector(element);
                        xe.prototype.toDo = toDo;
                        xe.toDo();
                    }
                });
            }
        }
        return this;
    }
    keydown(toDo, element) {
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            if (element === undefined) {
                if (toDo !== undefined) {
                    e.addEventListener('keydown', toDo);
                }
            }
            else if (toDo !== undefined) {
                var x = e;
                e.addEventListener('keydown', function (event) {
                    if (x.querySelector(element) == event.target) {
                        let xe = x.querySelector(element);
                        xe.prototype.toDo = toDo;
                        xe.toDo();
                    }
                });
            }
        }
        return this;
    }
    change(toDo, element) {
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            if (element === undefined) {
                if (toDo !== undefined) {
                    e.addEventListener('change', toDo);
                }
            }
            else if (toDo !== undefined) {
                var x = e;
                e.addEventListener('change', function (event) {
                    if (x.querySelector(element) == event.target) {
                        let xe = x.querySelector(element);
                        xe.prototype.toDo = toDo;
                        xe.toDo();
                    }
                });
            }
        }
        return this;
    }
    keyup(toDo, element) {
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            if (element === undefined) {
                if (toDo !== undefined) {
                    e.addEventListener('keyup', toDo);
                }
            }
            else if (toDo !== undefined) {
                var x = e;
                e.addEventListener('keyup', function (event) {
                    if (x.querySelector(element) == event.target) {
                        let xe = x.querySelector(element);
                        xe.prototype.toDo = toDo;
                        xe.toDo();
                    }
                });
            }
        }
        return this;
    }
    prevSibling() {
        let siblings = [];
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            siblings.push(e.previousSibling);
        }
        return $(siblings);
    }
    nextSibling() {
        let siblings = [];
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            siblings.push(e.nextSibling);
        }
        return $(siblings);
    }
    appendTo(el) {
        let element = this.get(0);
        let parent = el.get(0);
        parent.appendChild(element);
    }
    count() {
        return this.node.length;
    }
    forEach(callback) {
        for (let i = 0; i < this.node.length; i++) {
            const element = this.node[i];
            callback.bind(element)(i);
        }
        return this;
    }
    cssObj(obj) {
        let keys = Object.keys(obj);
        keys.forEach(key => {
            this.css(key, obj[key]);
        });
        return this;
    }
    children(selector) {
        return $(this.node[0].querySelectorAll(selector));
    }
    only(index) {
        return $(this.node[index]);
    }
}
class AjaxRequest {
    request(method, url, data, sucess, error) {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                sucess(xhttp.responseText);
            }
            else if (xhttp.readyState == 4) {
                if (error != undefined) {
                    try {
                        error();
                    }
                    catch (e) { }
                }
            }
        };
        xhttp.open(method == 'GET' || method == 'DELETE' ? 'GET' : 'POST', url, true);
        let d = '';
        if (data != undefined) {
            let keys = Object.keys(data);
            for (let i = 0; i < keys.length; i++) {
                if (i !== 0) {
                    d = d + '&';
                }
                d = d + keys[i] + '=' + data[keys[i]];
            }
            xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        }
        if (method == 'PUT' || method == 'DELETE')
            xhttp.setRequestHeader('x-http-method-override', method);
        if (d != '')
            xhttp.send(d);
        else
            xhttp.send();
    }
    GET(url, callback, error_callback = undefined) {
        return this.request('GET', url, undefined, callback, error_callback);
    }
    DELETE(url, callback, error_callback = undefined) {
        return this.request('DELETE', url, undefined, callback, error_callback);
    }
    POST(url, data, callback, error_callback = undefined) {
        return this.request('POST', url, data, callback, error_callback);
    }
    PUT(url, data, callback, error_callback = undefined) {
        return this.request('PUT', url, data, callback, error_callback);
    }
}
var AR = new AjaxRequest();
function $(e, index) {
    if (e != undefined) {
        return new ExtJsObject(e, index);
    }
    else {
        return this;
    }
}
//# sourceMappingURL=extjs.js.map