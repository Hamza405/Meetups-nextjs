import { MongoClient } from "mongodb";

async function handler ( req, res ) {
    if ( req.method === 'POST' )
    {
        const data = req.body;
        const { title, image, address, description } = data;

        const client = await MongoClient.connect( 'localhost:27017/meetups' );
        const db = client.db();

        const meetupsColl = db.collection( 'meetups' );
        const result = meetupsColl.insertOne( data );

        console.log( result );
        client.close();

        res.status( 201 ).json( { message: 'added succcess' } );
    }
}

export default handler;