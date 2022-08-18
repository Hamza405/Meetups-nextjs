import MeetupsDetails from "../../components/meetups/MeetupDetails";
import { MongoClient, ObjectId } from "mongodb";

const DetailsPage = ( { meetup } ) => {
    return <MeetupsDetails title={ meetup.title } image={ meetup.image } address={ meetup.address } description={ meetup.description } />;
};

export async function getStaticPaths () {
    const client = await MongoClient.connect( 'mongodb://localhost:27017/meetups' );
    const db = client.db();

    const meetupsColl = db.collection( 'meetups' );
    const result = await meetupsColl.find( {}, { _id: 1 } ).toArray();
    client.close();
    return {
        fallback: false,
        paths: result.map( m => ( { params: { meetupId: m._id.toString() } } ) )
    };
}
export async function getStaticProps ( context ) {
    const meetupId = context.params.meetupId;
    const client = await MongoClient.connect( 'mongodb://localhost:27017/meetups' );
    const db = client.db();

    const meetupsColl = db.collection( 'meetups' );
    const result = await meetupsColl.findOne( { _id: ObjectId( meetupId ) } );
    client.close();
    return {
        props: {
            meetup: {
                id: result._id.toString(),
                title: result.title,
                address: result.address,
                description: result.description,
                image: result.image
            }
        }
    };
}
export default DetailsPage;