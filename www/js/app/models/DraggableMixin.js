define([], function ()
{
    let DraggableMixin = (superclass) => class extends superclass
    {
        drag = function (event)
        {
            let style = window.getComputedStyle(event.target, null);
            let parentStyle = window.getComputedStyle(event.target.parentNode, null);
            //console.log(style)
            //console.log(event.target.offsetTop)
            //console.log(event.target.parentNode.offsetTop)
            console.log(event.target);
            console.log(event.target.offsetTop);
            event.dataTransfer.setData("text/plain",
                event.target.id + ',' +
                (parseInt(event.target.offsetLeft, 10) - event.clientX) + ',' +     //mouse X position
                (parseInt(event.target.offsetTop, 10) - event.clientY) + ',' +      //mouse Y position
                (parseInt(event.target.parentNode.offsetLeft, 10)) + ',' +          //parent anchor X position
                (parseInt(event.target.parentNode.offsetTop, 10)));                 //parent anchor Y position 
        }
    }

    return DraggableMixin;
});


