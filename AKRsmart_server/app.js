const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerjsdoc = require('swagger-jsdoc');
const cors = require('cors');



const UserRouter = require('./routes/users');
const ServiceRouter = require('./routes/service');
const CartRouter = require('./routes/cart');
const OrderRouter = require('./routes/order');
const messageRoute = require('./routes/message')
const app = express();
const UserService = require('./service/UserService');
app.use(cors());

const options = {
    definition: {
        openapi: '3.1.0',
        info: {
            title: 'Mon API Express avec Swagger',
            version: '1.0.0',
            description: 'Une simple API Express avec Swagger',
        },
        servers: [
            {
                url: 'http://localhost:3500',
            },
        ],
    },
    apis: ['./routes/*.js'],
};

const specs = swaggerjsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('', UserRouter);
app.use('', ServiceRouter);
app.use('', CartRouter);
app.use('', OrderRouter);
app.use('', messageRoute);
const corsOptions = {
    origin: 'http://localhost:3500',  // remplacer par l'URL de votre front-end
    optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));









app.listen(3500, () => {
    console.log('Server is running on port 3000');
});
