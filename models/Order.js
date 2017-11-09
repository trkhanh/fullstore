var keystone = require('keystone');
var Types = keystone.Field.Types;

//Because Admin can't CRUD in Order then nocreate and noedit are true
var Order = new keystone.List('Order', {
    nocreate: true,
    noedit: true
});

Order.add({
    name: { type: Types.Name, required: true },
    phone: { type: String, required: true },
    email: { type: Types.Email, required: true },
    address: { type: String, required: true },
    products: { type: Types.Relationship, ref: 'Product', many: true, index: true, required: true, initial: true },
});

Order.defaultSort = '-createdAt';
Order.defaultColumns = 'products';
Order.register();