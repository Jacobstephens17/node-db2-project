const db = require('../../data/dbConfig.js')

const get = () => {
    return db('cars')
}

const getById = (id) => {
    return db('cars')
        .where({ id })
        .first()
}

const create =  (account) => {
    return db('cars')
        .insert(account)
        .then(([id]) => {
            return db('cars')
                .where('id', id)
        })
}

const deleteItem = (id) => {
    return db('cars')
        .where('id', id)
        .del()
}

module.exports = {
    get,
    getById,
    create,
    deleteItem
}