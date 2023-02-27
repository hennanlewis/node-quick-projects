import { MongoClient } from "mongodb"
import dotenv from "dotenv"

dotenv.config()

const url = process.env.MONGODB_URL_CONTACT_READER
const dbName = process.env.MONGODB_NAME
let client = null

const connect2Mongo = async () => {
	if (!client) {
		client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true })
		await client.connect()
	}
	return client.db(dbName).collection("contacts")
}

const getContacts = async (contactValues = {}) => {
	const contactCollection = await connect2Mongo()
	const cursor = contactCollection.find(contactValues)
	const response = await cursor.toArray()
	return response
}

const { log, time, timeEnd } = console
time("contacts")
getContacts()
	.then((contacts) => log(contacts))
	.catch((error) => console.error(error))
	.finally(async () => {
		await client.close()
		timeEnd("contacts")
})
