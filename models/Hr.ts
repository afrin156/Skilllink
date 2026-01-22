import mongoose from "mongoose"

const HrSchema = new mongoose.Schema(
  {
    verified: { type: Boolean, default: false },
    allowMessages: { type: Boolean, default: true },
  },
  { timestamps: true }
)

export default mongoose.models.Hr || mongoose.model("Hr", HrSchema)
