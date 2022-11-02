import mongoose, { Schema } from "mongoose";
const tareaSchema = new Schema({
    nombreTarea: {
        type: String,
        required: true,
        unique: true,
        minLenght: 2,
        maxLenght: 100,
    },
});
const Tarea = mongoose.model("tarea", tareaSchema);

export default Tarea;
