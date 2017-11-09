var keystone = require('keystone');
var Types = keystone.Field.Types;

var Category = new keystone.List('Category', {
	autokey: { from: 'title', path: 'slug', unique: true },
});

Category.add({
	title: { type: String, initial: true, default: '', required: true },
	description: { type: Types.Textarea },
	createdBy: {
		type: Types.Relationship, ref: 'User', index: true, many: false,
	},
	createdAt: { type: Datetime, default: Date.now },
	updatedAt: { type: Datetime, default: Date.now },
});

Category.defaultSort = '-createdAt';

Category.register();
