define(['mixwith'], function (mixwith)
{
    let DraggableMixin = (superclass) => class extends superclass
    {
        ping = function ()
        {
            console.log("pong");
        }
        allowDrop = function (event)
        {
            event.preventDefault();
        }
        drag = function (event)
        {
            console.log("drag detected");
            event.dataTransfer.setData("text", event.target.id);
        }
        drop = function (event)
        {
            event.preventDefault();
            var data = event.dataTransfer.getData("text");
            event.target.appendChild(document.getElementById(data));
        }

    }

    return DraggableMixin;
});


