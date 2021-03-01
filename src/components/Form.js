import React, { useState } from 'react';
import { Button, makeStyles, TextField, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {
    setGrillDimension as actionSetGrillDimension,
    setGrillItem as actionSetGrillItem,
    setItemsOutOfGrill
} from '../store/grillMaster.slice'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '45ch',
        },
    },
    grillTextFieldsContainer: {
        height: '120px',
    },
    itemsTextFieldsContainer: {
        height: '260px',
    },
    textFieldsMargin: {
        marginTop: theme.spacing(1),
        width: '45ch',
    }
}));
export default function Form() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const grill = useSelector(store => store?.grillMaster?.grill);

    const [grillDimension, setGrillDimensions] = useState({ height: 0, width: 0 })
    const [grillItem, setGrillItem] = useState({ height: 0, width: 0, title: '', count: 0, });

    const [grillArea, setGrillArea] = useState(0);

    const onClickSet = () => {
        const grillArea = grillDimension.width * grillDimension.height;
        setGrillDimensions({ height: 0, width: 0 });
        setGrillArea(grillArea);
        dispatch(actionSetGrillDimension(grillDimension));
    }



    const onClickAdd = () => {
        let grillItems = [...grill?.grillItems];
        let itemsOutOfGrill = [];
        let remainingArea;
        const { height, width, count } = grillItem;
        let itemArea = ((height * width) + 1) * count;
        remainingArea = grillArea - itemArea
        console.log(remainingArea);
        if (remainingArea > 0) {
            grillItems.push(grillItem)
        } else {
            let updateItemCount = Math.floor(grillArea / ((height * width) + 1));
            console.log({ updateItemCount });
            grillItems.push({ ...grillItem, count: updateItemCount })
            let countOfOutOfGrillItems = count - updateItemCount;
            console.log({ countOfOutOfGrillItems })
            itemsOutOfGrill = new Array(countOfOutOfGrillItems).fill(grillItem);
        }
        setGrillItem({ height: 0, width: 0, title: '', count: 0, });
        setGrillArea(remainingArea);
        dispatch(setItemsOutOfGrill({ itemsOutOfGrill, }))
        dispatch(actionSetGrillItem({ grillItems }));
    }




    return (
        <>
            <Typography variant="h5">
                Enter grill width and height
            </Typography>
            <form className={classes.root} noValidate autoComplete="off">
                <div className={classes.grillTextFieldsContainer} >
                    <TextField
                        className={classes.textFieldsMargin}
                        label="Height"
                        variant="outlined"
                        value={grillDimension.height}
                        onChange={(e) =>
                            setGrillDimensions({ ...grillDimension, height: e.target.value })
                        }
                    />
                    <TextField
                        className={classes.textFieldsMargin}
                        label="Width"
                        variant="outlined"
                        value={grillDimension.width}
                        onChange={(e) =>
                            setGrillDimensions({ ...grillDimension, width: e.target.value })
                        }
                    />
                </div>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={onClickSet}
                >
                    Set
                </Button>
            </form>

            <Typography variant="h5">
                Enter grill items
            </Typography>
            <form className={classes.root} noValidate autoComplete="off">
                <div className={classes.itemsTextFieldsContainer} >
                    <TextField
                        className={classes.textFieldsMargin}
                        label="Title"
                        variant="outlined"
                        value={grillItem.title}
                        onChange={(e) =>
                            setGrillItem({ ...grillItem, title: e.target.value })
                        }
                    />
                    <TextField
                        className={classes.textFieldsMargin}
                        label="Count"
                        variant="outlined"
                        value={grillItem.count}
                        onChange={(e) =>
                            setGrillItem({ ...grillItem, count: e.target.value })
                        }
                    />
                    <TextField
                        className={classes.textFieldsMargin}
                        label="Height"
                        variant="outlined"
                        value={grillItem.height}
                        onChange={(e) =>
                            setGrillItem({ ...grillItem, height: e.target.value })
                        }
                    />
                    <TextField
                        className={classes.textFieldsMargin}
                        label="Width"
                        variant="outlined"
                        value={grillItem.width}
                        onChange={(e) =>
                            setGrillItem({ ...grillItem, width: e.target.value })
                        }
                    />
                </div>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={onClickAdd}
                >
                    Add
                </Button>
            </form>
        </>
    )
}
