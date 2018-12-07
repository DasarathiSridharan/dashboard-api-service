var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var SiteSchema = new mongoose.Schema({
    siteID: String,
    city: String,
    country: String
});

SiteSchema.plugin(mongoosePaginate);
const SiteInfo = mongoose.model('Site',SiteSchema);

module.exports = SiteInfo;