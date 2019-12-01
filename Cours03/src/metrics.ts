import LevelDB = require('./leveldb')
import WriteStream from 'level-ws'

export class Metric {
    public timestamp: string
    public value: number
  
    constructor(ts: string, v: number) {
      this.timestamp = ts
      this.value = v
    }

    getMetrics(){
      return ('Timestamp : ' + this.timestamp + ', value : ' + this.value + '.')
    }
  }
  
export class MetricsHandler {
  private db: any 

  constructor(dbPath: string) {
    this.db = LevelDB.LevelDB.open(dbPath)
  }

    public save(key: number, metrics: Metric[], callback: (error: Error | null) => void) {
      const stream = WriteStream(this.db)
      stream.on('error', callback)
      stream.on('close', callback)
      metrics.forEach((m: Metric) => {
        stream.write({ key: `metric:${key}${m.timestamp}`, value: m.value })
      })
      stream.end()
	}
	
	public getAll(
		// Read
		callback: (error: Error|null, result: any |null)=> void)
		{
			let metrics : Metric[] = []
 this.db.createReadStream()
.on('data', function (data) {
	let timestamp : string = data.key.split(':') [2]
  console.log(data.key, '=', data.value)
  let metric : Metric = new Metric(timestamp, data.value)
 metrics.push(metric)

})
.on('error', function (err) {
  console.log('Oh my!', err)
  callback(err,null)

})
.on('close', function () {
  console.log('Stream closed')
})
.on('end', function () {
	callback(null,metrics)
  console.log('Stream ended')
})

}

}
//for only one key 
//let timestamp : string = data.key.split(':') [1]
