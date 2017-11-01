var keystone = require('keystone');
var Types = keystone.Field.Types;

var Product = new keystone.List('Product', {
	autokey: { from: 'title', path: 'slug', unique: true },
});

Product.add({
	title: { type: String, initial: true, default: '', required: true },
	description: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 }
	},
	status: {
		type: Types.Select, options: 'New, Sold Out, Hot', default: 'New'
	},
	categoryOf: {
		type: Types.Relationship, ref: 'Category', index: true, many: false,
	},
	retailPrice: {
		type: Types.Money, format: '$ 0,0[.]00'
	},
	sellingPrice: {
		type: Types.Money, format: '$ 0,0[.]00'
	},
	activated: { type: Boolean, default: false },
	image: { type: Types.CloudinaryImage }, //Just support 1 Image
	rating: {
		type: Types.Select, options: '1,2,3,4,5', default: '1'
	},
	discountRate: {
		type: Types.Select, options: [
			{ value: '5', label: '5%' },
			{ value: '25', label: '25%' },
			{ value: '50', label: '50%' },
			{ value: '65', label: '65%' },
			{ value: '75', label: '75%' },
		]
	},
	createdAt: { type: Datetime, default: Date.now },
	updatedAt: { type: Datetime, default: Date.now },
});

Product.defaultSort = '-createdAt';
Product.defaultColumns = 'title, state|20%, description, retailPrice|15%'

Product.register();
