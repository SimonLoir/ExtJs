function EXTJS_MAIN(element){

	this.addClass =  function(classx){
		this.dom.classList.add(classx);
		return this;
	}

	this.removeClass =  function(classx){
		this.dom.classList.remove(classx);
		return this;
	}

	this.remove =  function () {
		this.dom.parentElement.removeChild(this.dom);
	}

	this.addChild =  function (child) {
	    this.dom.parentElement.appendChild(child);
	}

	this.css =  function (prop, value) {
		if (value != undefined) {
			this.dom.style[prop] = value;
		}else{
			return this.dom.style[prop];
		}
	}

	this.clear =  function (){
		this.html('');
	}

	this.child =  function(element_type){
		var elem  = document.createElement(element_type);
		this.node.appendChild(elem);
		//console.log($(elem));
		return $(elem);
	}

	this.attr = function (attr_name, attr_value) {
		
		if (attr_name != undefined) {
			
			if (attr_value != undefined) {
				
				this.node.setAttribute(attr_name, attr_value);
				return $(this);

			}else{

				return this.node.getAttribute(attr_name);

			}

		}else{
			console.error('Fatal error');
		}

	}
	
	return this;
}