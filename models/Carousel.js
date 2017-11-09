var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Carousel Model
 * =============
 */

var Carousel = new keystone.List('Carousel', {
    autokey: { from: 'name', path: 'key', unique: true },
});

Carousel.add({
    name: { type: String, required: true, initial: false, unique: true },
    publishedDate: { type: Date, default: Date.now },
    image: { type: Types.CloudinaryImages},
    content: { type: String}
});

Carousel.register();