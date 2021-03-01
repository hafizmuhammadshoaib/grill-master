import React from 'react';
import { makeStyles, } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        backgroundColor: 'green',
        // border: '1px solid #fff',
        borderRadius: '3px',
        float: 'left'
    }
});
export default function GrillItems({ width, height }) {
    const classes = useStyles();
    return (
        <div className={`${classes.root} grid-item`} style={{ width: Number(width), height: Number(height) }} >

        </div>
    )
}