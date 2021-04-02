import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useSelector} from "react-redux";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, value) {
    return { name, value };
}


export default function UserInfo() {
    const classes = useStyles();
    const userStat = useSelector(state=> state.userStats);
    const power = useSelector( state=> state.machines.power);
    const powerStr = `${power.current} / ${power.capacity} MW`;
    const moneyStr = `$ ${userStat.currency}`;

    const rows = [
        createData("Power:", powerStr),
        createData("Money:", moneyStr),
        createData("Tier:", userStat.tier)
    ];

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.value}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}