import classes from "./MeetupDetails.module.css";

const MeetupsDetails = ( props ) => {
    return <section className={ classes.container }>
        <img src={ props.image } alt="img"></img>
        <h1>{ props.title }</h1>
        <h3>{ props.address }</h3>
    </section>;
};

export default MeetupsDetails;