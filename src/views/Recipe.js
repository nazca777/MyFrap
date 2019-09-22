import React from 'react';
import { withRouter } from 'react-router-dom'
import './SharedStyles/styles.css';

const Recipe = withRouter(({label, calories, image, index, viewRec, history}) => {

    const styles = {
        recipeStyle: {
            paddingTop: "30px",
            borderRadius: "6px",
            padding: "5px",
            boxShadow: "0.4px 0.4px 0.4px grey",
            minHeight: "290px",
            color: "#2C3A47"
        }, 
        imageStyle: {
            border: "20px solid blanchedalmond",
            width: "80%",
            height: "80%",
            marginTop: "15px",
        },
        calText: {
            paddingTop: "10px",
            fontWeight: "300"
        },
        labelText: {
            paddingTop: "10px",
            fontWeight: "600",
        },
        viewBtnStyle: {
            marginTop: "10px",
            padding: "10px",
            borderRadius: "6px",
            backgroundColor: "orange",
            border: "none",
            fontWeight: "300",
        }
    }

    return(
        <div style={styles.recipeStyle} onClick={()=> {
            {viewRec(index)}
            history.push('/recipe');
        }}>
            <div className="recipeSelector">
                <img src={image} style={styles.imageStyle} className="imageHover"/>
                <h4 style={styles.calText}>{calories} cal</h4>
                <h4 style={styles.labelText}>{label}</h4>
            </div>
        </div>
    );

})


export default Recipe; 




