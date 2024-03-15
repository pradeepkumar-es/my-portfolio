import "../css/myjourney.css"
export default function MYJourney (props) {
    return(
        <div className="MyJourney">
            <div className="jlogo">
                <img src={props.jlogo} style={{width:"5rem", height:"5rem"}} alt="logo"/>
            </div>
            <div className="jdetail">
            <h4>{props.jname}</h4>
            <p>{props.jdetail}</p>
            <p>{props.jperiod}</p>
            </div>
        </div>
    )
}