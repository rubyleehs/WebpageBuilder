define([], function ()
{
    class LDragMove
    {
        init(domElement)
        {
            domElement.on('dragstart', this.drag);
            domElement.attr("draggable", "true");
            domElement.css({ "position": "absolute", "transform": "translate(0px,0px)" });
        }

        drag(event)
        {
            let draggableEle = document.elementFromPoint(event.originalEvent.clientX, event.originalEvent.clientY);
            if (draggableEle != event.target) //event.target is the same as this.domElement btw
            {
                event.preventDefault();
                return;
            }

            let targetBounds = event.target.getBoundingClientRect();
            //TODO: drag image scale with enviroment - not possible currently due to it being handled by browser

            event.originalEvent.dataTransfer.setData("text/plain",
                event.target.id + ',' +
                (event.originalEvent.clientX - targetBounds.x) + ',' +    //distance between mouse and left edge of target.
                (event.originalEvent.clientY - targetBounds.y));          //distance between mouse and top edge of target.
        }
    }


    return LDragMove;
});


