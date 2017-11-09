var keystone = require('keystone');
var Types = keystone.Field.Types;

var Category = new keystone.List('Category', {
	autokey: { from: 'title', path: 'slug', unique: true },
});

Category.add({
	title: { type: String, initial: true, default: '', required: true, unique: true },
	description: { type: Types.Textarea, initial: true },
	createdBy: {
		type: Types.Relationship, ref: 'User', index: true, many: false, initial: true
	},
	createdAt: { type: Types.Datetime, default: Date.now },
	updatedAt: { type: Types.Datetime, default: Date.now },
	orderNumber: { type: Number, default: 0, required: false }
});


/**
 * Registration
 */
Category.defaultColumns = 'orderNumber, title, description, iscreatedByAdmin, createdAt, updatedAt';
Category.defaultSort = '-createdAt';
Category.register();
