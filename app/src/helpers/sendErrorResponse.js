module.exports = (res,{status, message}) => {
    const msg = message || "Server Error";
    const sts = status || 500;
    res.status(sts).json({ok: false, message: msg});
}