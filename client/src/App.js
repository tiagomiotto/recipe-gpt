import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import { FormGroup, FormControlLabel, Checkbox, TextField } from '@mui/material';


function App() {

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form Submitted");
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to the Recipe GPT</p>
      </header>

      <section>
        <p>Enter a list of ingredients and a time limit and we will generate a recipe for you!</p>

        <form onSubmit={handleSubmit}>
          <h2>🍗 Protein</h2>
          <FormGroup className='ingredient-form' row={true}>
            <FormControlLabel control={<Checkbox />} label="Beef" />
            <FormControlLabel control={<Checkbox />} label="Chicken" />
            <FormControlLabel control={<Checkbox />} label="Pork" />
            <FormControlLabel control={<Checkbox />} label="Fish" />
          </FormGroup>

          <h2>🍅 Vegetables</h2>
          <FormGroup className='ingredient-form' row={true}>
            <FormControlLabel control={<Checkbox />} label="Tomato" />
            <FormControlLabel control={<Checkbox />} label="Lettuce" />
            <FormControlLabel control={<Checkbox />} label="Spinach" />
            <FormControlLabel control={<Checkbox />} label="Carrots" />
          </FormGroup>

          <h2>🌾 Carbs</h2>
          <FormGroup className='ingredient-form' row={true}>
            <FormControlLabel control={<Checkbox />} label="Rice" />
            <FormControlLabel control={<Checkbox />} label="Pasta" />
            <FormControlLabel control={<Checkbox />} label="Potato" />
            <FormControlLabel control={<Checkbox />} label="Bread" />
          </FormGroup>

          <h2>🌶️ Spices</h2>
          <FormGroup className='ingredient-form' row={true}>
            <FormControlLabel control={<Checkbox />} label="Onion" />
            <FormControlLabel control={<Checkbox />} label="Garlic" />
            <FormControlLabel control={<Checkbox />} label="Pepper" />
            <FormControlLabel control={<Checkbox />} label="Salt" />
            <FormControlLabel control={<Checkbox />} label="Basil" />
          </FormGroup>

          <h2>Other</h2>
          <TextField id="outlined-basic" label="Other" variant="outlined" helperText="List ingredients separated by commas" />

          <Button variant="contained" type="submit">Generate Recipe</Button>


        </form>
      </section>

    </div>
  );
}

export default App;
