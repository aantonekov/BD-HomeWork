const commentModel = require('../models/comment');

const getCommentByPid = async (productId) => {
    const doc = await commentModel.findOne({ product: productId });
    return doc;
}

const createComment = async (uid, pid, content) => {
    const doc = await commentModel.create({ 
        author: uid,
        content,
        product: pid
    });

    return doc.id;
}

module.exports = {
    getCommentByPid,
    createComment
}
