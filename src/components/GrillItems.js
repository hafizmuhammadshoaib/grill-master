import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        backgroundColor: 'green',
        borderRadius: '3px',
        marginRight: '1px',
        marginTop: '1px',
        // display:'block'
    }
});
export default function GrillItems({ width, height, title }) {
    const classes = useStyles();
    return (
        <div className={`${classes.root} grid-item`} style={{ width: Number(width), height: Number(height) }} >

        </div>
    )
}