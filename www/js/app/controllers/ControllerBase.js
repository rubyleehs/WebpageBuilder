define(function ()
{
    //controllers should be mostly untouched until need server communications/get/post requests as usual
    function ControllerBase(id)
    {
        this.id = id;
    }

    ControllerBase.prototype = {
        setModel: function (model)
        {
            this.model = model;
        },

        render: function (bodyDom)
        {
            let temp = new this.model()

            bodyDom.prepend('<h1>Controller ' + this.id + ' says "' +
                temp.getModelName() + '"</h1>');

        },


    };

    return ControllerBase;
});
