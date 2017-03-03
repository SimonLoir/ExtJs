function $(e){
    return new ExtJsObject(e);
}

function ExtJsObject(element){
    var re;

	if (typeof(element) === "string") {
		re = document.querySelectorAll(element);
	}else if(element == undefined || element == document){
		this.ready = function(toDo){
			document.addEventListener("DOMContentLoaded", toDo);
		}
		return this;
	}else if(typeof(element) === "object"){
        if(element.length == undefined){
            re = [element];
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

    this.html = function(string){
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            
            if (typeof(string) === "string" || typeof(string) === "number") {
                e.innerHTML = string;
            }else{
                return e.innerHTML;
            }
        }
        return this;
	}
}