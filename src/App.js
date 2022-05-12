import './App.css';
import { makeStyles } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as types from './Redux/actions';
import recipeReducer from './Redux/reducers';
import Grid from '@material-ui/core/Grid';
import spacing from '@material-ui/core/styles/createSpacing';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '45ch',
    }
  }
}));



function App() {
  const classes = useStyles();
  const gridClasses = gridStyles();
  const cardClasses = cardStyles();
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("banana");

  const { recipe } = useSelector(state => state.data);

  const updateSearch = () => {
    setQuery(search);
    setSearch("");
  }

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: types.FETCH_RECIPE_START, payload: query })
  }, [query]);

  return (
    <div className="App">
      <h2> Recipe App </h2>
      <form className={classes.root} noValidate autoComplete='off'>
        <TextField id="outlined-basic"
          label=""
          variant="outlined"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)} />
        <Button variant="contained"
          color='Primary'
          style={{ width: '80px', height: '50px' }}
          onClick={updateSearch}>
          Search
        </Button>
      </form>
     
                
      {recipe &&
            recipe.hits &&
            recipe.hits.map((item) => <h4>{item.recipe.label}</h4>)}

    </div>
  );
}

export default App;
