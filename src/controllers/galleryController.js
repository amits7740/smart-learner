var galleryController = function(title) {

    var aws = require('ibm-cos-sdk');
    var multer = require('multer');
    var multerS3 = require('multer-s3');

    var ep = new aws.Endpoint('s3.us-south.cloud-object-storage.appdomain.cloud');
    var s3 = new aws.S3({endpoint: ep, region: 'us-south-1'});
    var myBucket = 'web-images';

    var upload = multer({
        storage: multerS3({
            s3: s3,
            bucket: myBucket,
            acl: 'public-read',
            metadata: function (req, file, cb) {
                cb(null, {fieldName: file.fieldname});
            },
            key: function (req, file, cb) {
                console.log(file);
                cb(null, file.originalname);
            }
        })
    });

    var getGalleryImages = function (req, res) { ... };

    return {
        getGalleryImages: getGalleryImages,
        upload: upload
    };
};

var getGalleryImages = function (req, res) {
    var params = {Bucket: myBucket};
    var imageUrlList = [];

    s3.listObjectsV2(params, function (err, data) {    
        if (data) {
            var bucketContents = data.Contents;
            for (var i = 0; i < bucketContents.length; i++) {
                if (bucketContents[i].Key.search(/.jpg/i) > -1) {
                    var urlParams = {Bucket: myBucket, Key: bucketContents[i].Key};
                    s3.getSignedUrl('getObject', urlParams, function (err, url) {
                        imageUrlList.push(url);
                    });
                }
            }
        }
        res.render('galleryView', {
            title: title,
            imageUrls: imageUrlList
        });
    });
};

module.exports = galleryController;