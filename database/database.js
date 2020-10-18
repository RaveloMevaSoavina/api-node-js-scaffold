const mongoose= require("mongoose");

/*
 * SAMPLE_DATABASE : name of the DATABASE (please set SAMPLE_DATABASE to your own database name)
 */

mongoose.connect("mongodb://127.0.0.1:27017/SAMPLE_DATABASE", {
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex : true,
useFindAndModify : false
});

// connection to database error
mongoose.connection.on("error", console.error.bind(console, "connection error:".red));
// connection to database successfuly
mongoose.connection.once("open", () => console.log("DB connection established !"));
