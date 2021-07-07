define(["require"], function (require)
{
    //TODO: merge with duplicate?
    let DuplicateMixin = (superclass) => class extends superclass
    {
        allowDrop = function (event, targetDomEle)
        {
            let targetBounds = targetDomEle.getBoundingClientRect();
            if (targetBounds.left < event.clientX && targetBounds.right > event.clientX && targetBounds.top < event.clientY && targetBounds.bottom > event.clientY)
            {
                event.preventDefault();
            }
        }
        drop = function (event, targetDomEle)
        {
            if (document.elementFromPoint(event.clientX, event.clientY) != event.target) return;
            event.preventDefault();
            let data = event.dataTransfer.getData("text/plain").split(',');
            let draggableEle = $(`#${data[0]}`);

            if (targetDomEle === draggableEle) targetDomEle = draggableEle[0].parentNode; // So you cannot drop it on itself

            let targetBounds = targetDomEle.getBoundingClientRect();
            let targetStyle = window.getComputedStyle(targetDomEle);
            let targetScaleX = targetBounds.width / targetDomEle.offsetWidth;
            let targetScaleY = targetBounds.height / targetDomEle.offsetHeight;
            let xTranslate = (event.clientX - targetBounds.x - parseFloat(data[1])) / targetScaleX - parseFloat(targetStyle.borderLeftWidth) - parseFloat(targetStyle.paddingLeft);
            let yTranslate = (event.clientY - targetBounds.y - parseFloat(data[2])) / targetScaleY - parseFloat(targetStyle.borderTopWidth) - parseFloat(targetStyle.paddingTop);


            let clone = draggableEle.clone(true, true);
            clone.appendTo(targetDomEle);
            clone.attr('id', this.makeid(8));
            require(['./ModelHandler'], function (ModelHandler)
            {
                let modelHandler = new ModelHandler;
                let cloneModel = new (modelHandler.getModel(clone.attr("model")))(clone[0]);
                cloneModel.init();
                clone.appendTo(targetDomEle);
                clone.css('transform', `translate(${xTranslate}px, ${yTranslate}px)`);
            });
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
    return DuplicateMixin;
});


