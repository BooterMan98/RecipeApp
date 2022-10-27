import * as React from 'react';
import Container from '@mui/material/Container';
import RecipeList from '../components/RecipeList';
import RecipeDetail from '../components/RecipeDetail';

type recipeProps = {

}

interface recipeState {
    recipes: [],
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
    showList(e: any,) {
      e.stopPropagation()
      console.log("here")
      this.setState({state: "list"})
    }

    editR = this.editRecipe.bind(this)
    viewR = this.viewRecipe.bind(this)
    deleteR = this.deleteRecipe.bind(this)
    showL= this.showList.bind(this)
    render() {
      return <Container>
        <RecipeList deleteRecipe={this.deleteR} editRecipe={this.editR} viewRecipe={this.viewR}/>
        {(() => {if (this.state.state !== "delete") return <RecipeDetail mode={this.state.state} handleClose={this.showL}/>}) ()}
        
      </Container>;
    }
  }

  export default Recipe