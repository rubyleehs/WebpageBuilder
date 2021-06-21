define(['./ModelBase', './DraggableMixin', 'mixwith'], function (ModelBase, DraggableMixin, mw)
{
    class MDraggable extends mw.mix(ModelBase).with(DraggableMixin) {
        constructor()
        {
            super("Draggable Model");
        }

        init = function (domElement)
        {
            domElement.addEventListener('dragstart', this.drag);
            domElement.setAttribute("draggable", "true");
        }
    }

    return MDraggable;
});


