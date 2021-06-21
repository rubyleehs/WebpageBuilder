define([], function ()
{
    let DraggableMixin = (superclass) => class extends superclass
    {
        ping = function ()
        {
            console.log("pong");
        }
        drag = function (event)
        {
            console.log("drag detected");
            event.dataTransfer.setData("text", event.target.id);
        }
    }

    return DraggableMixin;
});


