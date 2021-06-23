define([], function ()
{
    let DraggableMixin = (superclass) => class extends superclass
    {
        drag = function (event)
        {
            let targetBounds = event.target.getBoundingClientRect();

            event.dataTransfer.setData("text/plain",
                event.target.id + ',' +
                (event.clientX - targetBounds.x) + ',' +    //distance between mouse and left edge of target.
                (event.clientY - targetBounds.y));          //distance between mouse and top edge of target.
        }
    }

    return DraggableMixin;
});


