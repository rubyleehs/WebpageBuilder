define([], function ()
{
    let DraggableMixin = (superclass) => class extends superclass
    {
        drag = function (event)
        {
            if (document.elementFromPoint(event.clientX, event.clientY) != event.target)
            {
                event.preventDefault();
                return;
            }

            console.log("drag start")
            let targetBounds = event.target.getBoundingClientRect();

            event.dataTransfer.setData("text/plain",
                event.target.id + ',' +
                (event.clientX - targetBounds.x) + ',' +    //distance between mouse and left edge of target.
                (event.clientY - targetBounds.y));          //distance between mouse and top edge of target.
        }
    }

    return DraggableMixin;
});


