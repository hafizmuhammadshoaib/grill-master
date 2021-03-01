import React from 'react';
import { makeStyles } from '@material-ui/core';
import Form from '../components/Form';
import Grill from '../components/Grill';
import Sidebar from '../components/Sidebar';

const useStyles = makeStyles({
    grillContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    }
});
export default function GrillMaster() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.grillContainer} >
                <Grill />
                <Sidebar />
            </div>
            <Form />
        </>
    )
}