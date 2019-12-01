import express = require('express')
import { MetricsHandler } from './metrics' 
import bodyparser = require('body-parser')
const app = express()
const port: string = process.env.PORT || '1338'

const metrics = require('./metrics.ts')

const path = require('path')
const dbMet: MetricsHandler = new MetricsHandler('./db/metrics')

app.use(express.static(path.join(__dirname, 'public')))

app.set('views', __dirname + "/view")

app.set('view engine', 'ejs')

app.get('/metrics', (req: any, res : any) => 
{
	dbMet.getAll(
		(err : Error | null, result : any) => {
			if (err) throw err
			res.status(200).send(result)
		}
	)
})

app.get('/',(req: any, res: any) => {
	res.render('home.ejs')
	res.end()
})

app.get('/hello/:name', (req: any, res: any) => {
	res.render('hello.ejs', {name: req.params.name})
	res.end()
})
app.use(bodyparser.json())
app.use(bodyparser.urlencoded())

app.get('/metrics.json', (req: any, res: any) => {
	metrics.get((err: any, data: any) => {
		if(err) throw err
    	res.status(200).json(data)
  	})
})
app.post('/metrics/:id', (req: any, res: any) => {
	dbMet.save(req.params.id, req.body, (err: Error | null) => {
	  if (err) throw err
	  res.status(200).send()
	})
  })

 

app.listen(port, (err: Error) => {
  if (err) {
    throw err
  }
  console.log(`server is listening on port ${port}`)
})
