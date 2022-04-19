const mongoose = require("mongoose");

const incomeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Income name is required"],
    },
    amount: {
      type: Number,
      required: [true, "Amount is required"]
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

const Income = mongoose.model("Income", incomeSchema);
module.exports = Income;
