define([], function ()
{
    let ScalableMixin = (superclass) => class extends superclass
    {
        rescale = (event, domElement) =>
        {
            if ((domElement == document.activeElement || domElement.contains(document.activeElement)) && this.isZooming())
            {
                event.preventDefault();
                domElement.style.transform = `scale(${this.pxRatio})`
            }
        }

        isZooming = () =>  
        {
            let newPxRatio = this.calculateZoomRatio();
            if (this.pxRatio != newPxRatio)
            {
                this.pxRatio = newPxRatio;
                console.log("zooming");
                return true;
            } else
            {
                console.log("just resizing");
                return false;
            }
        }

        calculateZoomRatio = function ()
        {
            return window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;
        }
    }

    return ScalableMixin;
});


