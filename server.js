const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

Note: This is a basic HTML, CSS, and JavaScript implementation of a POS system website. It does not include any backend functionality or database integration. You will need to add additional code and dependencies to create a fully functional POS system.