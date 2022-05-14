import {fileURLToPath} from 'url';
import express from "express"
import path from "path"
import translations from './public/js/translations.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()
const port = 3000

app.set('view engine', 'ejs');


app.get('/', (req, res) => {

  const language = req.query.lang ? req.query.lang : 'az';
  

  res.render('pages/index', {
    translations: translations,
    language: language
  })
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(express.static(__dirname + '/public'));

