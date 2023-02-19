const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://EggLaptop69:uiY0qWzCz4OpiJDO@cluster0.bmbnvrs.mongodb.net/shop?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("connected!");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No databse found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
