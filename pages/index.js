import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

const HomePage = ( props ) => {
    console.log( 'generated' );
    return <MeetupList meetups={ props.meetups } />;

};

export async function getStaticProps () {
    const client = await MongoClient.connect( 'mongodb://localhost:27017/meetups' );
    const db = client.db();

    const meetupsColl = db.collection( 'meetups' );
    const result = await meetupsColl.find().toArray();
    const meetups = result.map( m => ( {

        id: m._id.toString(),
        title: m.title,
        image: m.image,
        address: m.address

    } ) );

    return {
        props: {
            meetups: meetups
        },
        revalidate: 5
    };
}
export default HomePage;