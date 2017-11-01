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
    name: { type: String, required: true },
    publishedDate: { type: Date, default: Date.now, required: true },
    image: { type: Types.CloudinaryImages, required: true },
    content: { type: String, required: true }
});

Carousel.register();