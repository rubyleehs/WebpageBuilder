define(['./ModelBase', './LDragMove', './LResizable'], function (ModelBase, LDragMove, LResizable)
{
    class MBox extends ModelBase
    {
        constructor()
        {
            super("Box Model");
        }

        init(domElement)
        {
            new LDragMove().init(domElement);
            new LResizable().init(domElement);
        }
    }

    return MBox;
});


