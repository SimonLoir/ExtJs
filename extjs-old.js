function EXTJS_MAIN(element){

	this.height = function(value){
		if (value !== undefined) {
			this.dom.style.height = value;
		}else{
			return this.dom.offsetHeight;
		}
	}
	/*
		d�finir la longueur de l'�l�ment ou la r�cup�rer
	*/
	this.width = function(value){
		if (value !== undefined) {
			this.dom.style.width = value;
		}else{
			return this.dom.offsetWidth;
		}
	}

	/*
		Click event on this
	 */
	
	this.click = function(toDo, element){
		if (element === undefined) {
			if (toDo !== undefined) {
				this.dom.addEventListener("click", toDo);
				return this;
			}else{
				this.dom.click();
			}
		}else if (toDo !== undefined){
			var x = this.dom;
			this.dom.addEventListener("click", function(event){
				if (x.querySelector(element) == event.target) {
					xe = x.querySelector(element);
					xe.toDo = toDo;
					xe.toDo();
				}
			});
		}else{
			var x = this.dom;
			xe = x.querySelector(element);
			xe.click();
		}
	}


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