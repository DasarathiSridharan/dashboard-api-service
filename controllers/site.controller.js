
var SiteService =require('../services/site.service');

_this = this;

exports.getSites = async function (req, res, next) {
    var page = req.query.page ? req.query.page :1 ;
    var limit = req.query.limit? req.query.limit:100;
    try {
        var sites = await SiteService.getSites({},page,limit) ;
        return res.status(200).json({
            status: 200,
            data: sites,
            message: "Sucessfully retrived sites"
        });
    }catch(e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        });
    }
};

exports.createSites = async function (req,res,next) {
    var site = {
        siteID: req.body.siteID,
        city: req.body.city,
        country: req.body.country
    };
    try {
        var createdSite = await SiteService.createSite(site);
        return res.status(201).json({
            status: 201,
            body: site,
            message: "Sucessfully created Site"
        });
    } catch (e) {
        return res.status(400).json({
            status:400,
            message: " Site not created"
        });
    };
};

exports.updateSites = async function (req,res,next) {
    if (!req.body._id){
        return res.status(400).json({
            status: 400,
            message: "ID must be present "
        });
    }

    var id = req.body._id;
    var site = {
        id,
        siteID: req.body.siteID ? req.body.siteID : null,
        city:req.body.city ? req.body.city : null,
        country: req.body.country ? req.body.country : null
    };

    try {
        console.log(id);
        var updatedSite = await SiteService.updateSite(site);
        return res.status (200).json ({
            status: 200,
            body: updatedSite,
            message: "Site updated sucessfully"
        });
    } catch(e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        });
    }
};

exports.deleteSites = async function (req,res,next) {
    
    var id = req.params.id;
    try {
        var deletedSite = await SiteService.deleteSite(id);
        return res.status(204).json({
            status:204,
            message:"Site information deleted"
        });
    } catch (e) {
        return res.status(400).json({
            status:400,
            message:e.message  
        });             
    }
}

