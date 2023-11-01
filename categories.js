const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Category = mongoose.model("categories", categorySchema);

const menCategory = new Category({ name: "Men" });
const womenCategory = new Category({ name: "Women" });
const teensCategory = new Category({ name: "Teens" });

Promise.all([
  menCategory.save(),
  womenCategory.save(),
  teensCategory.save(),
])
  .then((categories) => {
    console.log("Categories added:", categories);

    mongoose.connection.close();
  })
  .catch((error) => {
    console.error("Error adding categories:", error);

    mongoose.connection.close();
  });

  