import { Button, Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import * as React from 'react';

interface listProps {
editRecipe: any,
viewRecipe: any,
deleteRecipe: any,
}

interface listState {

}

class RecipeList extends React.Component<listProps, listState> {

render() {
    return <TableContainer component={Card}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell align='left'>
                        Nombre
                    </TableCell>
                    <TableCell colSpan={2} align='center'>
                        Acciones
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            <TableRow onClick={this.props.viewRecipe}>
                    <TableCell component="th">
                        Nombre
                    </TableCell>
                    <TableCell >
                        <Button onClick={this.props.editRecipe}>Editar</Button>
                    </TableCell>
                    <TableCell>
                        <Button>Eliminar</Button>
                    </TableCell>
                </TableRow>

            </TableBody>
        </Table>
    </TableContainer>
}
}

export default RecipeList;