namespace ApiTesting {
    const express = require('express');
    const joi = require('joi');
    
    const app = express();
    
    app.use(express.json());
    
    const items = [
        {id: 1, name: 'pen', description: 'write someting'}, 
        {id: 2, name: 'pencil', description: 'rewritable item'}
    ];
    
    app.get('/items', (req, res) => {
        res.send(items);
    });
    
    app.get('/items/:id', (req, res) => {
    
        const item = items.find((i) => i.id === parseInt(req.params.id));
    
        if(!item) {
            res.status(404).send(null);
        } else {
            res.send(item);
        }
    });
    
    app.post('/items', (req, res) => {
        const schema = joi.object({
            name: joi.string().min(3).required(),
            description: joi.string().min(3).required()
        });
        const result =schema.validate(req.body);
        
        if (result.error){
            res
            .status(400)
            .send({
                type: 'Input validation failed',
                errorMessage: result.error.details[0].message
            });
        } else {
            const {name, description} = req.body;
            const item = {
                id: items.length + 1,
                name: name,
                description: description
            };
        
            items.push(item);
    
            res.send(item);
        }    
    });
    
    const port = process.env.PORT || 3001;
    app.listen(port, () => console.log(`Node server started at port ${port}`));
}

/****************************************
 * Execution
 * node src/build/playground/04-api.js  
 ***************************************/
