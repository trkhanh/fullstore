var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Store Model
 * ==========
 */
var Store = new keystone.List('Store');

Store.add({
    key: { type: String, require: true, unique: true },
    phone: { type: String },
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
