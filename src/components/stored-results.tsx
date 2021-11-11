import React, {useContext, useMemo} from "react";

import {FormPaper} from "styled/form-paper";
import {
    IconButton,
    styled as matStyled,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

import {calcAndFormat} from "calcs/calc-and-format";
import {StoredStateContext} from "contexts/stored-state-context";
import {InputData} from "types/input-data";

const FullHeightPaper = matStyled(FormPaper)({
    minHeight: '100%',
})

type ItemToRenderData = {
    value: string;
    label: string;
    item: InputData;
    key: string;
}

export const StoredResults = () => {
    const storedState = useContext(StoredStateContext);

    const itemsToRender = useMemo(
        (): Array<ItemToRenderData> => {
            if (storedState === null || storedState.items.length < 1) {
                return [];
            }

            const tmp = storedState.items
                .map((item) => {
                    const result = calcAndFormat(
                        item.attackType,
                        item.gias,
                        item.sias,
                        item.wsm,
                    );

                    if (result === null) {
                        return null;
                    }

                    const {value, label} = result;

                    return {
                        key: JSON.stringify(item),
                        label,
                        value,
                        item,
                    }
                });

            return tmp.filter(row => row !== null) as ItemToRenderData[];
        },
        [storedState],
    )

    return <FullHeightPaper elevation={12}>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Attack</TableCell>
                    <TableCell align="right">GIAS</TableCell>
                    <TableCell align="right">SIAS</TableCell>
                    <TableCell align="right">WSM</TableCell>
                    <TableCell align="right">FPA</TableCell>
                    <TableCell>Ctrls</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {itemsToRender.map((row) => (
                    <TableRow
                        key={row.key}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {row.label}
                        </TableCell>
                        <TableCell align="right">{row.item.gias}</TableCell>
                        <TableCell align="right">{row.item.sias}</TableCell>
                        <TableCell align="right">{row.item.wsm}</TableCell>
                        <TableCell align="right">
                            <Typography
                                variant='body1'
                                color='primary'
                            >
                                {row.value}
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <IconButton onClick={() => storedState?.removeItem(row.item)}><DeleteIcon/></IconButton>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>

        { itemsToRender?.length < 1 &&
        <p><Typography variant='body1'>No stored results</Typography></p>}
    </FullHeightPaper>
}
