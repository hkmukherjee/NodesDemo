const express = require('express');
const app = express();
app.get('/items', (req, res) => {
    res.send([1, 2, 3]);
});
app.get('/items/:id', (req, res) => {
    res.send(req.params);
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Node server started at port ${port}`));
