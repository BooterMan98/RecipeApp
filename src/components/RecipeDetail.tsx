import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import * as React from 'react';
import { recipe } from '../typeDefs';


interface detailProps {
  mode: "view" | "edit" | "create" | "list",
  handleClose: any
}

interface detailState {
 name: string,
 ingredients: string,
 instructions: string
}
export default class RecipeDetail extends React.Component<detailProps, detailState> {
   title = {
    "view": "Ver Receta",
    "edit": "Editar Receta",
    "create": "Crear Receta",
    "list": ""
  }

  description = {
    "view": "Mira tu hermosa receta",
    "edit": "Edita tu hermosa receta para que sea más hermosa",
    "create": "Crea tu hermosa receta para que el mundo lo sepa",
    "list": ""
  }

  constructor(props:detailProps) {
    super(props)
    this.state = {name: "", ingredients: "", instructions: ""}
 }
 handleChange(e:any) {
  console.log(e.target.id)
  if (e.target.id === "ingredients") {
    this.setState({ingredients: e.target.value})
  } else if (e.target.id === "instructions") {
    this.setState({instructions: e.target.value})
  } else if (e.target.id === "name") {
    this.setState({name: e.target.value})
  }
}

hc = this.handleChange.bind(this)
  doAction(e:any) {
    let recipe:recipe = {
      name: this.state.name,
      ingredients: this.state.ingredients,
      instructions: this.state.instructions
    }

     

    this.props.handleClose(e, true, false, recipe)
    }

  doA = this.doAction.bind(this)
    render() {
      const disabled = this.props.mode === "view" ? true : false
        return <Dialog onClose={this.props.handleClose} open={ (() => {if (this.props.mode != "list") return true; else return false}) () }>
        <DialogTitle>{this.title[this.props.mode]}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {this.description[this.props.mode]}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nombre Receta"
            type=""
            disabled={disabled}
            fullWidth
            value={this.state.name}
            onChange={this.hc}
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="ingredients"
            label="Ingredientes"
            multiline
            disabled={disabled}
            type=""
            fullWidth

            onChange={this.hc}

            value={this.state.ingredients}
            rows={2}
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="instructions"
            label="Pasos a seguir"
            multiline
            disabled={disabled}
            rows={4}
            onChange={this.hc}

            type=""
            value={this.state.instructions}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose}>Cancelar</Button>
          <Button onClick={this.doA}>Guardar Receta</Button>
        </DialogActions>
      </Dialog>
    }
}