var k = {
    constructor(a)
    {
        this.a = a;
    },
    m: function ()
    {
        return this.a + 1;
    }
};

o = k(1);
console.log(o.m()); // 3
// When calling o.m in this case, 'this' refers to o

var p = Object.create(o);
// p is an object that inherits from o

//p.a = 4; // creates a property 'a' on p
console.log(p.m()); // 5
  // when p.m is called, 'this' refers to p.
  // So when p inherits the function m of o,
  // 'this.a' means p.a, the property 'a' of p

