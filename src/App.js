import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link,withRouter } from "react-router-dom";
import {createBrowserHistory} from "history";
import Recipe from './views/Recipe';
import './App.css';
import RecipeInfo from './views/RecipeInfo';

const App = () => {

    const APP_ID = "70d134e5";
    const APP_KEY = "553c427599beea95ad372e8b49671cbe";  

    const [query, setQuery] = useState('frappuccino');
    const [recipe, setRecipes] = useState([]);

    var i = 0;

    const getFrap = async() => {
        const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await res.json();
        setRecipes(data.hits);
    }

    const viewRecipeClicked = (index) => {
        console.log(recipe[index].recipe.label);
        i = index;
        console.log(recipe[index].recipe);
    }

    useEffect(()=> {
        getFrap();
    },[query]);
  
    return(
        <div className="App">
            <Router>
            <header>
              <Link to="/"
              style={{ textDecoration: 'none', color: "#2C3A47" }}
              ><h2>MyFrap</h2></Link>
              <h3>Fresh frapuccino recipes for you!</h3>
            </header>
                <Route exact path="/" render={props=> (
                    <div className="recipe">
                    {recipe.map((rec,index) => (
                        <Recipe 
                            index={index}
                            key={rec.recipe.label}
                            image={rec.recipe.image}
                            label={rec.recipe.label}
                            calories={rec.recipe.calories}
                            viewRec={viewRecipeClicked}
                        /> 
                    ))}
                </div>
                )}></Route>
                <Route exact path="/recipe"
                render={props=> (
                    recipe.length==0
                    ?
                    //NO RECIPE HAS BEEN SELECTED
                    <React.Fragment>
                        <h4>How about this one?</h4>
                    </React.Fragment> 
                    :
                    //IF USER SELECTED RECIPE SHOW THE RECIPE INFORMATIONS SCREEN
                    <React.Fragment>
                        <RecipeInfo
                        label={recipe[i].recipe.label}
                        image={recipe[i].recipe.image}
                        calories={recipe[i].recipe.calories}
                        ingredientLines={recipe[i].recipe.ingredientLines}
                        healthLabels={recipe[i].recipe.healthLabels}
                        digest={recipe[i].recipe.digest}
                        />
                    </React.Fragment>
                )}>
                </Route>
                {/* ABOUT PAGE COMING SOON */}
                <Route exact path="/about"
                render={props=> (
                    <div>
                        <h3>About</h3>
                    </div>    
                )}>
                </Route>
            </Router>
        </div>
    )
}

export default App;
