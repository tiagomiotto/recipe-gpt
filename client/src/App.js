import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import { FormGroup, FormControlLabel, Checkbox, TextField } from '@mui/material';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import RecipeCard from './RecipeCard';
import CircularProgress from '@mui/material/CircularProgress';
import zIndex from '@mui/material/styles/zIndex';



function App() {

  const { register, handleSubmit, reset, control, setValue } = useForm();

  const [ingredients, setIngredients] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [recipe, setRecipe] = useState("");
  const [showRecipe, setShowRecipe] = useState(false);

  const submit = async (data) => {

    if (data.ingredients) {

      setIngredients(data.ingredients.join(", "));
      setIsLoading(true);
      const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}?ingredients=${data.ingredients.join(", ")}`);
      const recipeText = await response.text();
      setIsLoading(false);
      setRecipe(recipeText);
      // console.log(recipeText);
      setShowRecipe(true);

    }
    else {
      window.alert("Please enter ingredients");
    }

  };

  const handleClose = () => {
    setShowRecipe(false);
  }

  const { ref, ...rest } = register("ingredients");
  return (
    <div className="App">
      <header className="App-header" style={{ marginBottom: '2vh' }}>
        <p>Welcome to the Recipe GPT</p>
      </header>

      <section style={{ display: "flex", flexDirection: "column" }}>
        {!showRecipe &&
          <>
            <p>Enter a list of ingredients and I will generate a recipe for you!</p>

            <form onSubmit={handleSubmit(submit)}>
              <h2>🍗 Protein</h2>
              <FormGroup className='ingredient-form' row={true}>
                <FormControlLabel control={<Checkbox {...rest} inputRef={ref} />} label="Beef" value="beef" />
                <FormControlLabel control={<Checkbox {...rest} inputRef={ref} />} label="Chicken" value="chicken" />
                <FormControlLabel control={<Checkbox {...rest} inputRef={ref} />} label="Pork" value="pork" />
                <FormControlLabel control={<Checkbox {...rest} inputRef={ref} />} label="Fish" value="fish" />
              </FormGroup>

              <h2>🍅 Vegetables</h2>
              <FormGroup className='ingredient-form' row={true}>
                <FormControlLabel control={<Checkbox {...rest} inputRef={ref} />} label="Tomato" value="tomato" />
                <FormControlLabel control={<Checkbox {...rest} inputRef={ref} />} label="Lettuce" value="lettuce" />
                <FormControlLabel control={<Checkbox {...rest} inputRef={ref} />} label="Spinach" value="spinach" />
                <FormControlLabel control={<Checkbox {...rest} inputRef={ref} />} label="Carrots" value="carrots" />
              </FormGroup>

              <h2>🌾 Carbs</h2>
              <FormGroup className='ingredient-form' row={true}>
                <FormControlLabel control={<Checkbox {...rest} inputRef={ref} />} label="Rice" value="rice" />
                <FormControlLabel control={<Checkbox {...rest} inputRef={ref} />} label="Pasta" value="pasta" />
                <FormControlLabel control={<Checkbox {...rest} inputRef={ref} />} label="Potato" value="potato" />
                <FormControlLabel control={<Checkbox {...rest} inputRef={ref} />} label="Bread" value="bread" />
              </FormGroup>

              <h2>🌶️ Spices</h2>
              <FormGroup className='ingredient-form' row={true}>
                <FormControlLabel control={<Checkbox {...rest} inputRef={ref} />} label="Onion" value="onion" />
                <FormControlLabel control={<Checkbox {...rest} inputRef={ref} />} label="Garlic" value="garlic" />
                <FormControlLabel control={<Checkbox {...rest} inputRef={ref} />} label="Pepper" value="pepper" />
                <FormControlLabel control={<Checkbox {...rest} inputRef={ref} />} label="Salt" value="salt" />
                <FormControlLabel control={<Checkbox {...rest} inputRef={ref} />} label="Basil" value="basil" />
              </FormGroup>

              <h2>Other</h2>
              <TextField id="outlined-basic" label="Other" variant="outlined" helperText="List ingredients separated by commas" />

              {!isLoading && <Button variant="contained" type="submit" disabled={showRecipe || isLoading}>Generate Recipe</Button>}
              {isLoading && <CircularProgress style={{ margin: '10px', height: '2vh', width: '2vw' }} />}
            </form>
          </>}
        {showRecipe &&

          <RecipeCard recipe={recipe} handleClose={handleClose} />

        }

      </section>
      <footer className='App-header' style={{ marginTop: '2vh' }}>
        Built by <a href="https://github.com/tiagomiotto">Tiago Miotto</a>
      </footer>
    </div>
  );
}

export default App;
