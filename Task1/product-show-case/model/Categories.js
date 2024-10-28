const { Schema, models, model } = require("mongoose");

const categoriesSchema = new Schema({
    name:{
        type:String,
        require:true
    }
})

const Categories = models.Categories || model("Categories", categoriesSchema);
export default Categories