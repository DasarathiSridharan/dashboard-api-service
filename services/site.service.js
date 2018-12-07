var SiteInfo = require('../models/site.model');

_this = this;

exports.getSites = async function (query,page,limit) {
    var options = {
        page,
        limit
    };
    try {
        var sites = await SiteInfo.paginate(query,options)
        return sites;
    } catch (e) {
        throw Error ('Error while paginating Sites');
    };   
};

exports.createSite = async function (site){
    var newSite = new SiteInfo ({
        siteID: site.siteID,
        city: site.city,
        country: site.country
    });
    try{
        var savedSite = await newSite.save();
        return savedSite;
    } catch (e) {
        throw Error ("Error while saving Site Info");
    }
};

exports.updateSite = async function (site){
    var id = site.id;
    try {
        var oldSite = await SiteInfo.findById(id);
    } catch (e) {
        throw Error ("Error in finding the Site");
    };
    if (!oldSite){
        return false;
    }
    console.log(oldSite);

    oldSite.siteID = site.siteID;
    oldSite.city = site.city;
    oldSite.country = site.country;

    console.log(oldSite);

    try{
        var savedSite = await oldSite.save();
        return savedSite;
    } catch (e) {
        throw Error ("Error in updating Site Info");
    }
}

exports.deleteSite = async function(id) {
    try {
        console.log(id);
        var deleteResult = await SiteInfo.deleteOne({_id: id});
        console.log(deleteResult);
        if (deleteResult.n === 0) {
            throw Error ("Site couldn't be deleted");
        }
        return deleteResult;
    } catch (e) {
     throw Error ("Unable to delete site due to Error : "+e.message);
    }
}