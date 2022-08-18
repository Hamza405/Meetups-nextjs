// import { MongoClient } from "mongodb";

// export async function handler ( req, res ) {

//     const client = await MongoClient.connect( 'mongodb://localhost:27017/meetups' );
//     const db = client.db();

//     const meetupsColl = db.collection( 'meetups' );
//     const result = await meetupsColl.find().toArray();
//     const meetups = result.map( m => ( {

//         id: m._id.toString(),
//         title: m.title,
//         image: m.image,
//         address: m.address

//     } ) );
//     res.status( 201 ).json( { meetups: meetups } );

// }