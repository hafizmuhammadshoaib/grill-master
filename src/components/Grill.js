import { makeStyles } from '@material-ui/core';
import Masonry from 'masonry-layout';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import GrillItems from './GrillItems';

const useStyles = makeStyles((theme) => ({
    root: {
        border: ' 2px solid #f2f2f2',
        backgroundColor: '#f7f7f7',
        marginTop: '4px',
        marginBottom: '4px',
        fontSize: '0',
    }
}));

export default function Grill() {
    const classes = useStyles();
    const grill = useSelector(store => store?.grillMaster?.grill);

    useEffect(() => {
        if (grill?.grillItems.length) {
            new Masonry('.grid', {
                itemSelector: '.grid-item',
                columnWidth: grill?.minHeight,
                resizeContainer: false,
            });
        }
    }, [grill])


    if (grill?.width && grill?.height)
        return (
            <div className={`${classes.root} grid`} style={{ width: Number(grill?.width), height: Number(grill?.height) }} >
                {grill?.grillItems?.map(({ height, width, count, }) => {
                    let boxes = [...new Array(Number(count))];
                    return boxes.map((_, index) =>
                        <GrillItems key={index} width={width} height={height} />
                    )
                })
                }
            </div>
        )
    return <></>
}
