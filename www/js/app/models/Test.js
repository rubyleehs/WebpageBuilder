define(function (require)
{
    let MyMixin = Mixin((superclass) => class extends superclass
    {

        constructor(args)
        {
            // mixins should either 1) not define a constructor, 2) require a specific
            // constructor signature, or 3) pass along all arguments.
            super(args);
        }

        foo()
        {
            console.log('foo from MyMixin');
            // this will call superclass.foo()
            super.foo();
        }

    });
});
