import { MongoClient } from 'mongodb';

export const connectToDB = async() => {
    const client = await MongoClient.connect('mongodb+srv://next_party_user:kawz8hoI89Whafwp@cluster0.dska4.mongodb.net/next-party?retryWrites=true&w=majority')
    return client;
}

export const insertDoc = async(client, collection ,doc) => {
    const dbCollection = client.db();
    await dbCollection.collection(collection).insertOne(doc);
}