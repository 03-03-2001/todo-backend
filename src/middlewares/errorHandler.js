const { error } = require("node:console")


const errorHandler = (
    err,
    req,
    res,
    next
) =>{
    res.status(500).json({
        success:false,
        message: error.message
    });
};


module.exports = errorHandler;