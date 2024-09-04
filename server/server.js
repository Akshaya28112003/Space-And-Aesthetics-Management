/*const express = require('express')


const a = (a, b) => {
	a= a+10;
	return a+b;
}

app.get('/',(request,response) => {
	response.send('<h1>The sum value is '+a(10,20)+'</h1>')
})*/

const {response} =require('express')
const express = require('express')
const {MongoClient}=require('mongodb')
const cors=require('cors')/* cross origin resourse sharing */
const app = express()
app.use(cors());
app.use(express.json());

const uri="mongodb+srv://vedasaipriya:vedapro1@cluster0.n2t774w.mongodb.net/?retryWrites=true&w=majority";
const client =new MongoClient(uri);
client.connect();
const db=client.db("SDP2");
const col=db.collection("users");

/*app.get('/',(request,response) => {
	response.send('<h1>The sum value is '+a(10,20)+'</h1>')
})*/

app.post('/',(request,response)=>{
 console.log(request.body);
 col.insertOne(request.body);
 response.send("saved successfully");
});

app.get('/check',(request,response)=>{
	console.log(request.query);
	async function find()
	{
		try{
		       const result = await col.findOne({email:request.query.un});
				console.log(result);
				if(result === null)
				{
					response.send("FAIL");
				}
				else{
					if(result.password===request.query.pwd)
					{
						response.send("PASS");
					}
					else
					{
						response.send("FAIL");
					}
				}
				}
				finally
				{
				
				}
	}
	find().catch(console.dir)
	

})

app.listen(8081)
//localhost:8081
console.log("server started")


