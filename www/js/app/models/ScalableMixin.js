define([], function ()
{
    let ScalableMixin = (superclass) => class extends superclass
    {
        rescale = (event, domElement) =>
        {
            if (this.isZooming())
            {
                domElement.style.transform = `scale(${this.pxRatio})`
            }
        }

        isZooming = function ()  
        {
            let newPxRatio = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;
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
    }

    return ScalableMixin;
});


