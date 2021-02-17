const db = require("../../data/dbConfig");


const getAll = () => {
    return db("cars");
  }


const getById = (id) => {
    return db("cars").where({ id }).first();
  }


const create = (account) => {
    return db("cars")
      .insert(account)
      .then(([id]) => {
        return db("cars").where("id", id);
      });
  }


const update = (id, changes) => {
    return db("cars").where("id", id).update(changes);
  }

const  deleteItem = (id) => {
    return db("cars").where("id", id).del();
  }



module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteItem
}