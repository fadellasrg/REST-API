const app = require('./app');
const { PORT } = require('./src/helper/env')

app.listen(PORT, () => {   
    console.log(`Server running on PORT ${PORT}`)
})   