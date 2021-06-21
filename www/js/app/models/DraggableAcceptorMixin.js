define([], function ()
{
    let DraggableAcceptorMixin = (superclass) => class extends superclass
    {
        allowDrop = function (event)
        {
            event.preventDefault();
        }
        drop = function (event)
        {
            event.preventDefault();
            var data = event.dataTransfer.getData("text");
            event.target.appendChild(document.getElementById(data));
        }

    }

    return DraggableAcceptorMixin;
});


