Welcome to project jquery.namespace !
===================

Install
-------------

    bower install --save jquery.namespace

Get started
-------------

How to create a namespace with jquery

    class Plugin {
       static elem;
    
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
    
    $.ns('threeds', {
        a: function (options:Object) {
            return new Plugin(this, options);
        }
    });
    
    $.ns('threeds', {
        b: function (options:Object) {
            return new Plugin(this, options);
        }
    });
    
    

How to use a namespace with jquery

    $('#myelement').threeds().a();
    $('#myelement').threeds().b({id:1});