import { MongoClient } from 'mongodb';

export const connectToDB = async() => {
    console.log(process.env.DB_URL);
    const client = await MongoClient.connect(process.env.DB_URL);
    return client;
}

export const insertDoc = async(client, collection ,doc) => {
    const dbCollection = client.db();
    await dbCollection.collection(collection).insertOne(doc);
}