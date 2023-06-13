module.exports = ( res, {data, ...props} = {}) => {
    res.status(error.status || 500).json({ok:true,data, props})            
}