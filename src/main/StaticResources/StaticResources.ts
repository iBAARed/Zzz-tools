import express from 'express';
import path from 'path';
import serveStatic from 'serve-static';

class StaticResources {
    constructor() {
        const app = express();

        app.use('/resources/images', serveStatic(path.join(__dirname, '../../resources/images')));

        app.listen(7000, function () {
            console.log('Server listening on port 7000');
        });
    }
}

export default StaticResources;