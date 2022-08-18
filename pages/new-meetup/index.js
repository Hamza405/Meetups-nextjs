import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetup = () => {
    const router = useRouter();
    const addMeetuphandler = async ( data ) => {
        const res = await fetch( '/api/new-meetup', {
            method: "POST",
            body: JSON.stringify( data ),
            headers: {
                "Content-Type": "application/json"
            }
        } );
        const r = await res.json();
        console.log( r );
        if ( res.ok )
        {
            router.push( '/' );
        }
    };
    return <NewMeetupForm onAddMeetup={ addMeetuphandler } />;
};

export default NewMeetup;