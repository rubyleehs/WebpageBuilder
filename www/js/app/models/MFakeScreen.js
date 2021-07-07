define(['./ModelBase', './LDragAccept', './LRescalable'], function (ModelBase, LDragAccept, LRescalable)
{
    class MFakeScreen extends ModelBase
    {
        constructor()
        {
            super("Fake Screen Model");
        }

        init(domElement)
        {
            new LDragAccept().init(domElement);
            new LRescalable().init(domElement);
        }
    }

    return MFakeScreen;
});


