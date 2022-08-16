import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetup = () => {
    const addMeetuphandler = () => { };
    return <NewMeetupForm onAddMeetup={ addMeetuphandler } />;
};

export default NewMeetup;