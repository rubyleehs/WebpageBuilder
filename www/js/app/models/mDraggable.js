define(['./ModelBase'], function mDraggable(ModelBase)
{
    class mDraggable extends ModelBase
    {
        constructor()
        {
            super('Draggable Model')
        }
        ping()
        {
            return 'pong';
        }
        allowDrop(event)
        {
            event.preventDefault();
        }
        drag(event)
        {
            event.dataTransfer.setData("text", event.target.id);
        }
        drop(event)
        {
            event.preventDefault();
            var data = event.dataTransfer.getData("text");
            event.target.appendChild(document.getElementById(data));
        }

    }

    return mDraggable;
});


