import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => res.json({ message: "Welcome to my API" }));

// app.get("/test", (req, res) => {
//   throw new Error('Error de conexion')
//   res.send('test')
// });

app.use((err, req, res, next) => {
  res.status(500).json({
    status: "error",
    message: err.message,
  });
});

export default app;
