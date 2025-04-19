const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const bayRoutes = require('./routes/bayRoutes');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const adminRouter = require('./routes/adminRoutes');



dotenv.config();

const app = express();
connectDB();

app.use(bodyParser.json());

app.use('/dev', bayRoutes,userRoutes,adminRouter);
// app.use('/admin', adminRouter);

// app.use('/user', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
