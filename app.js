import express from 'express'
import bp from'body-parser'
import authRoutes from "./routes/auth.routes.js"
import connectDatabase from './database/Mongo.database.js';

const app = express();

const PORT = process.env.PORT || 8000

//setting up viewport for ejs
app.set('view engine', 'ejs');

app.use(express.static("./public"))

app.use(bp.json());
app.use(bp.urlencoded({extended: false}))

// BE routes 
app.use('/auth', authRoutes);


// Views
app.get('/', (req, res) => {
    res.render('../views/base');
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    connectDatabase();
})