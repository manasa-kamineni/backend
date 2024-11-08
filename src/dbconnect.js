import {MongoClient,ServerApiVersion}from'mongodb';
import{ connectString } from '../secret.js';
export const client = new MongoClient(connectString,{
    usenewUrlParser: true,
    useunifiedTopology: true,
    serverApi: ServerApiVersion.v1
});

