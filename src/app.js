import express from 'express';


export const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const port  = 4040

export var server = app.listen(port, () => {
    console.log(`🚀 Server is running at http://localhost:${port}`);
});

app.use(async (req, res) => {
    res.status(404).send("Route unavailable.");
});

export default {app};