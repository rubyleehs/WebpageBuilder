define(['./ModelBase', './LDragCopy'], function (ModelBase, LDragCopy)
{
    class MDragSource extends ModelBase
    {
        constructor()
        {
            super("Draggable Source");
        }

        init(domElement)
        {
            new LDragCopy().init(domElement);
        }
    }

    return MDragSource;
});

