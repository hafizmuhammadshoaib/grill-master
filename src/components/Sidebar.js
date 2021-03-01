import React from 'react';
import {
    Divider, makeStyles, Paper, Table,
    TableBody, TableCell, TableContainer,
    TableHead, TableRow, Typography
} from '@material-ui/core';
import { useSelector } from 'react-redux';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: theme.spacing(2)
    },
    heading: {
        backgroundColor: '#f7f7f7',
        fontWeight: '400',
        color: '#383535',
        borderRadius: '4px'
    },
    paper: {
        width: '30rem',
    },
}));
export default function Sidebar() {
    const classes = useStyles();
    const itemsOutOfGrill = useSelector(store => store?.grillMaster?.itemsOutOfGrill);
    if (itemsOutOfGrill.length)
        return (
            <div className={classes.root} >
                <Typography variant="h6" className={classes.heading} >Items out of grill</Typography>
                <Divider />
                <TableContainer component={Paper} className={classes.paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Type</TableCell>
                                <TableCell >Size</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {itemsOutOfGrill.map(({ title, height, width }, index) => (
                                <TableRow key={index}>
                                    <TableCell >{title}</TableCell>
                                    <TableCell >{height}x{width}</TableCell>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    else
        return <></>
}
