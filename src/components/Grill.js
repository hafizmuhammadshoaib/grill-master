import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import GrillItems from './GrillItems';

const useStyles = makeStyles((theme) => ({
    root: {
        flexWrap: 'wrap',
        display: 'flex',
        border: ' 2px solid #f2f2f2',
        backgroundColor: '#f7f7f7',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        fontSize: '0',
        gap: '1px'
    }
}));

export default function Grill() {
    const classes = useStyles();
    const grill = useSelector(store => store?.grillMaster?.grill);


    if (grill?.width && grill?.height)
        return (
            <div className={`${classes.root} grid`} style={{ width: Number(grill?.width), height: Number(grill?.height) }} >
                {grill?.grillItems?.map(({ height, width, count, title }) => {
                    let boxes = [...new Array(Number(count))];
                    return boxes.map((_, index) =>
                        <GrillItems key={index} width={width} height={height} title={title} />
                    )
                })
                }
            </div>
        )
    return <></>
}
