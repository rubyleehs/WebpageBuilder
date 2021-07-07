define(["require"], function (require)
{
    class LDragAccept
    {
        init(domElement)
        {
            domElement.on('drop', (event) => { this.drop(event, domElement) });
            domElement.on('dragover', (event) => { this.allowDrop(event, domElement) });
        }

        allowDrop = function (event, targetDomEle)
        {
            let targetBounds = targetDomEle[0].getBoundingClientRect();
            let originalEvent = event.originalEvent;
            if (targetBounds.left < originalEvent.clientX && targetBounds.right > originalEvent.clientX && targetBounds.top < originalEvent.clientY && targetBounds.bottom > originalEvent.clientY)
            {
                event.preventDefault();
            }
        }

        drop = function (event, targetDomEle)
        {
            let originalEvent = event.originalEvent;
            if (document.elementFromPoint(originalEvent.clientX, originalEvent.clientY) != originalEvent.target) return;

            event.preventDefault();
            let data = originalEvent.dataTransfer.getData("text/plain").split(',');
            let draggableEle = $(`#${data[0]}`);

            if (targetDomEle === draggableEle) targetDomEle = $(draggableEle[0].parentNode); // So you cannot drop it on itself

            let targetBounds = targetDomEle[0].getBoundingClientRect();
            let targetStyle = window.getComputedStyle(targetDomEle[0]);
            let targetScaleX = targetBounds.width / targetDomEle[0].offsetWidth;
            let targetScaleY = targetBounds.height / targetDomEle[0].offsetHeight;
            let xTranslate = (originalEvent.clientX - targetBounds.x - parseFloat(data[1])) / targetScaleX - parseFloat(targetStyle.borderLeftWidth) - parseFloat(targetStyle.paddingLeft);
            let yTranslate = (originalEvent.clientY - targetBounds.y - parseFloat(data[2])) / targetScaleY - parseFloat(targetStyle.borderTopWidth) - parseFloat(targetStyle.paddingTop);

            if (draggableEle.attr("original-copy") == "true" && data[3] == "duplicatable")
            {
                let clone = draggableEle.clone(true, true);
                clone.attr('id', this.makeid(8));
                clone.attr('original-copy', false);
                require(['./ModelHandler'], function (ModelHandler)
                {
                    new (new ModelHandler().getModel(clone.attr("model")))().init(clone);
                    clone.appendTo(targetDomEle);
                    clone.css('transform', `translate(${xTranslate}px, ${yTranslate}px)`);
                });
            }
            else
            {
                draggableEle.appendTo(targetDomEle);
                draggableEle.css('transform', `translate(${xTranslate}px, ${yTranslate}px)`);
            }
        }

        makeid = (length) =>
        {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++)
            {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }
    }
    return LDragAccept;
});


