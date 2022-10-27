import * as React from 'react';
import Container from '@mui/material/Container';
import RecipeList from '../components/RecipeList';
import RecipeDetail from '../components/RecipeDetail';
import { Stack } from '@mui/system';
import { Button } from '@mui/material';
import {recipe} from "../typeDefs"

type recipeProps = {

}

interface recipeState {
    recipes: recipe[],
    target: string | null,
    state: "list" | "view" | "edit" | "create" | "delete" 

}



class Recipe extends React.Component<recipeProps, recipeState> {
    constructor(props:recipeProps) {
        super(props);
        // No llames this.setState() aquí!
        this.state = { recipes: [], target: null, state: "list"};
      }
    editRecipe(e: any, id:string) {
      e.stopPropagation()
      this.setState({state:"edit"})
    }
    viewRecipe(e: any, id:string) {
      e.stopPropagation()
      this.setState({state: "view"})
    }
    deleteRecipe(e: any, id:string) {
      e.stopPropagation()

      this.setState({state: "delete"})
    }
    showList(e: any,  isNew: boolean, wasCancelled: boolean, recipe?: recipe) {
      e.stopPropagation()
      this.setState({state: "list"})
      if (!wasCancelled) {
        let recipes = this.state.recipes
        // se ve si se agrega o edita wea
        if (isNew && recipe != undefined) {
          recipes.push(recipe)
          this.setState({recipes: recipes})
          // se agrega nueva receta

        } else {
          // se edita receta anterior
        }
      }
      
    }
    createRecipe(e: any) {
      this.setState({state: "create"})
    }

    editR = this.editRecipe.bind(this)
    viewR = this.viewRecipe.bind(this)
    deleteR = this.deleteRecipe.bind(this)
    showL= this.showList.bind(this)
    createR = this.createRecipe.bind(this)
    render() {
      return <Container style={{padding: "2rem"}}>

      <Stack spacing={2}>
        <Button onClick={this.createR} >Crear nueva receta</Button>
        <RecipeList recipes={this.state.recipes} deleteRecipe={this.deleteR} editRecipe={this.editR} viewRecipe={this.viewR}/>
        {(() => {if (this.state.state !== "delete") return <RecipeDetail mode={this.state.state} handleClose={this.showL}/>}) ()}
      </Stack>
        
        
      </Container>;
    }
  }

  export default Recipe