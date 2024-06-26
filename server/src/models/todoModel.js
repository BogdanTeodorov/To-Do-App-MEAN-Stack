const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let todoSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, `Title is required!`],
            minlength: [3, `Minimum length of title is 3 characters`]
        },
        description: {
            type: String,
            required: [true, `Description is required`]
        },
        completed: {
            type: Boolean,
            default: false
        },
        createdAt: {
            type: Date,
            default: Date.now()
        }

    },
    {
        collection: "todoapp"
    }




);

// Virtual property to format createdAt
todoSchema.virtual('createdAtFormatted').get(function () {
    return this.createdAt.toISOString().split('T')[0];
});

module.exports = mongoose.model(`todo`, todoSchema);