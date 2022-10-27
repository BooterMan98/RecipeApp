import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import * as React from 'react';


interface detailProps {
  mode: "view" | "edit" | "create" | "list",
  handleClose: any
}

interface detailState {

}
export default class RecipeDetail extends React.Component<detailProps, detailState> {
   title = {
    "view": "Ver Receta",
    "edit": "Editar Receta",
    "create": "Crear Receta",
    "list": ""
  }

  doAction() {
    this.props.handleClose()
  }
    render() {
      const disabled = this.props.mode === "view" ? true : false
        return <Dialog onClose={this.props.handleClose} open={ (() => {if (this.props.mode != "list") return true; else return false}) () }>
        <DialogTitle>{this.title[this.props.mode]}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Crea tu hermosa receta para que el mundo lo sepa!!!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nombre Receta"
            type=""
            disabled={disabled}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="Ingredientes"
            label="Ingredientes"
            multiline
            disabled={disabled}
            type=""
            fullWidth
            rows={2}
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="Pasos a seguir"
            label="Pasos a seguir"
            multiline
            disabled={disabled}
            rows={4}
            type=""
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose}>Cancelar</Button>
          <Button onClick={this.doAction}>Guardar Receta</Button>
        </DialogActions>
      </Dialog>
    }
}