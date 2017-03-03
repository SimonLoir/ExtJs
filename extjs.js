function $(e, index){
    return new ExtJsObject(e, index);
}

function ExtJsObject(element, e_index){
    var re;

	if (typeof(element) === "string") {
        re = document.querySelectorAll(element);
		if(e_index != undefined){
            re = [re[e_index]];
        }
	}else if(element == undefined || element == document){
        /**
		 * @param {function} toDo function that is called when the document has been loaded
		 */
		this.ready = function(toDo){
			document.addEventListener("DOMContentLoaded", toDo);
		}
		return this;
	}else if(typeof(element) === "object"){
        if(element.length == undefined){
            re = [element];
        }else if(e_index != undefined){
            re = [element[e_index]];
        }else{
            re = element;
        }
	}else if(element.type == "ExtJsObject"){
		return element;
	}else{
		return false;
	}

	this.type = "ExtJsObject";
	this.node = re; 

    /**
     * @param {String} html HTML to put inside the element or undefined or nothing
     * @return {String|Object} HTML that is inside the first element or the current instance.
     */
    this.html = function(html){
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            
            if (typeof(html) === "string" || typeof(html) === "number") {
                e.innerHTML = html;
            }else{
                return e.innerHTML;
            }
        }
        return this;
	}
}