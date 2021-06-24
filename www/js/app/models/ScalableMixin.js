define([], function ()
{
    const scaleSpeedDelta = 0.1;
    const minScale = 0.1;
    const maxScale = 4.0
    let ScalableMixin = (superclass) => class extends superclass
    {
        rescale = (scrollEvent) =>
        {
            if (scrollEvent.ctrlKey) //if control is also pressed
            {
                scrollEvent.preventDefault();

                let scaleDelta = scaleSpeedDelta * ((scrollEvent.wheelDelta > 0) ? 1 : -1);
                let bounds = this.domElement.getBoundingClientRect();
                //let newScaleX = Math.min(Math.max(bounds.width / this.domElement.offsetWidth + scaleDelta, minScale), maxScale);
                let newScale = Math.min(Math.max(bounds.height / this.domElement.offsetHeight + scaleDelta, minScale), maxScale);
                this.domElement.style.transform = `scale(${newScale})`
            }
        }

        /*
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
        */
    }

    return ScalableMixin;
});


