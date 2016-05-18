Welcome to project jquery.namespace !
===================

Install
-------------

    bower install --save https://github.com/oferreira/jquery.namespace.git

Install
-------------

How to create a namespace 

    class Plugin {
       static elem = {
         'id':null
       };
    
       static settings = {
         'id':null
       };
       
      constructor(this, options) {
        this.settings = $.extend({}, this.settings, options);
        this.render();
      }
    
      render() {
        this.elem.html('Hello wold !');
      }
    }
    
    $.namespace('threeds', {
        a: function (options:Object) {
            return new Plugin(this, options);
        }
    });
    
    $.namespace('threeds', {
        b: function (options:Object) {
            return new Plugin(this, options);
        }
    });
    
    

How to use
    $('#myelement').threeds().a();
    $('#myelement').threeds().b({id:1});