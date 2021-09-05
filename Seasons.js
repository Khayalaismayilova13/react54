import "./Seasons.css";


const seasonConfig ={
    summer:{
        text: "lets hit the beach",
        icon: "sun"
    },
    winter:{
        text: "burr its chilly",
        icon: "snowflake"

    },

};

const getSeason =(lat, month) =>{
    if (month > 2 && month <9){
        return lat < 0 ? "summer" : "winter";
        
    }else{
       return lat > 0? "winter" : "summer";
    }
};
const Seasons =(props) =>{
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, icon} = seasonConfig[season];
    return(
        <div className= {`${season} season`}>
            <i className= {` icon-left ${icon} icon huge`} />
            <h1>{text}</h1>
            <i className= {` icon-right ${icon} icon huge`} />
        </div>
    );
}
export default Seasons;
