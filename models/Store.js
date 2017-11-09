var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Store Model
 * ==========
 */
var Store = new keystone.List('Store');

Store.add({
    phone: { type: Types.Name },
    address: { type: String },
    location: { type: Types.Location, defaults: { country: 'VietNam' } },
    mobile: { type: String },
    email: { type: Types.Email },
    manager: { type: String },
});

/**
 * Registration
 */
Store.defaultColumns = 'manager,phone, mobile, address, location';
Store.register();
