define(['mixwith', './ModelBase', './DraggableMixin'], function (mw, ModelBase, DraggableMixin)
{
    class MDraggable extends mw.mix(ModelBase).with(DraggableMixin) {
        constructor(domElement)
        {
            super("Draggable Model", domElement);
        }

        init = function ()
        {
            this.domElement.addEventListener('dragstart', this.drag);
            this.domElement.setAttribute("draggable", "true");
            this.domElement.setAttribute("style", "position:relative; left: 0; up:0; float:left;");
        }
    }

    return MDraggable;
});


