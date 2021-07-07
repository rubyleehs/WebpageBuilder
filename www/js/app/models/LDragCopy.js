define(["./LDragMove"], function (LDragMove)
{
    class LDragCopy extends LDragMove
    {
        drag(event)
        {
            super.drag(event)
            event.originalEvent.dataTransfer.setData("text/plain", (event.originalEvent.dataTransfer.getData("text/plain") + "," + "duplicatable"));
        }
    }


    return LDragCopy;
});


