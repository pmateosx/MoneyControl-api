const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Goal name is required"],
    },
    amount: {
      type: Number,
      required: [true, "Amount is required"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        delete ret.__v;
        return ret;
      },
    },
  }
);

const Goal = mongoose.model("Goal", goalSchema);
module.exports = Goal;
