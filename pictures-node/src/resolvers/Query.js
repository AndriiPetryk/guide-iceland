function feed(parent, args, context, info) {
    const { filter, first, skip } = args // destructure input arguments
    const where = filter
        ? { OR: [{ uniq_contains: filter }] }
        : {};

    return context.db.query.pictures({ first, skip, where }, info)
}

module.exports = {
    feed,
}