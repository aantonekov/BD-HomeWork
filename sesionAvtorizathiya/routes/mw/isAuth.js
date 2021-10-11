const mw = ( req, res, next ) => {
    const { uid } = req.session;
    if(!uid) {
        res.json({ status: 'unauthorized'});
        return;
    }


    next();
}

module.exports = mw ;