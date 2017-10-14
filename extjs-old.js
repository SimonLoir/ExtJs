function EXTJS_MAIN(element){

    this.css =  function (prop, value) {
        if (value != undefined) {
            this.dom.style[prop] = value;
        }else{
            return this.dom.style[prop];
        }
    }

    this.child =  function(element_type){
        var elem  = document.createElement(element_type);
        this.node.appendChild(elem);
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