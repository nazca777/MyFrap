import React, {useState, useEffect} from 'react';
import './SharedStyles/styles.css';


const RecipeInfo = ({label, image, calories, ingredientLines, healthLabels, digest}) => {

    const styles = {
        details: {
          paddingTop: "20px"  
        },
        title: {
            fontWeight: "700",
            color: "#2C3A47"
        },
        calories: {
            fontWeight: "400"
        },
        image: {
            paddingTop: "10px",
            paddingBottom: "10px",
            height: "200px",
            width: "200px",
            borderRadius: "50%"
        },
        ingredientLabel: {
            paddingBottom: "6px"
        },
        ingredient: {
            fontWeight: "400",
            color: "#2C3A47"
        },
        tags: {
            paddingTop: "10px",
            paddingBottom: "20px",
            backgroundColor: "blanchedalmond",
            marginLeft: "120px",
            marginRight: "120px",
            marginBottom: "20px"
        },
        ul: {
            fontWeight: "100",
            style: "none",
            paddingTop: "10px",
            listStyle: "none"
        },
        labels: {
            display: "inline",
            paddingRight: "20px",
        },
        body: {
            display: "grid",
            gridTemplateColumns: "3fr 1.5fr",
            marginLeft: "120px",
            marginRight: "120px",
            color: "#2C3A47"
        },
        digest: {
            padding: "10px",
            backgroundColor: "#2C3A47",
            color: "white",
            border: "1px solid clear",
            borderRadius: "5px"
        }
    }

    useEffect(()=> {
        console.log(digest);
    },[]);

    return(
        <div style={styles.details}>
            <h3 style={styles.title}>{label}</h3>
            <img src={image} style={styles.image}/>
            <br/>

            <div style={styles.body}>

                <div>
                <h3 style={styles.ingredientLabel}>Ingredients</h3>
                {ingredientLines.map((ingredient)=> (
                    <div style={styles.ingredient}>
                        {ingredient}
                    </div>
                ))}
                </div>
                {/* digest info */}
                <div style={styles.digest}>
                    <h4 style={{paddingBottom: "10px"}}>Digestion Information</h4>
                    <ul style={{listStyle: "none"}}>
                        <li>{digest[0].label} : {digest[0].total}</li>
                        <li>{digest[1].label} : {digest[1].total}</li>
                        <li>{digest[2].label} : {digest[2].total}</li>
                        <li>{digest[3].label} : {digest[3].total}</li>
                        <li>{digest[4].label} : {digest[4].total}</li>
                        <li>{digest[5].label} : {digest[5].total}</li>
                    </ul> 
                </div>
            </div>
            <br/>
            <div style={styles.tags}>
                <h5>Tags</h5>
                <ul style={styles.ul}>
                    <li>
                        {healthLabels.map(lbl=> (
                           <p style={styles.labels}>{lbl}</p>
                        ))}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default RecipeInfo;



