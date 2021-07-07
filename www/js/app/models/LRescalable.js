define([], function ()
{
    const scaleSpeedDelta = 0.05;
    const minScale = 0.1;
    const maxScale = 8.0;

    class LRescalable 
    {
        init(domElement)
        {
            this.domElement = domElement;
            this.domElement.on('wheel', this.rescale);
            this.domElement.css("transform", "scale(1)");
            this.domElement.attr("tabindex", 0);
        }

        rescale = (scrollEvent) =>
        {
            if (scrollEvent.ctrlKey) //if control is also pressed
            {
                scrollEvent.preventDefault();

                let scaleDelta = scaleSpeedDelta * ((scrollEvent.originalEvent.wheelDelta > 0) ? 1 : -1);
                let bounds = this.domElement[0].getBoundingClientRect();
                let newScale = Math.min(Math.max(bounds.height / this.domElement[0].offsetHeight + scaleDelta, minScale), maxScale);
                this.domElement.css("transform", `scale(${newScale})`);
            }
        }
    }

    return LRescalable;
});


