import React, {useContext, useMemo, useState} from "react";
import {Box, Button, FormControl, InputLabel, MenuItem, SelectChangeEvent} from "@mui/material";

import {AttackTypes, attackTypesList} from "types/attack-types";
import {InputData} from "types/input-data";
import {calcAndFormat} from "calcs/calc-and-format";

import {FormPaper} from "styled/form-paper";
import {FormFieldsLayout} from "styled/form-fields-layout";
import {StyledSelect} from "styled/select";
import {OutputField, StyledField} from "styled/field";
import {StoredStateContext} from "contexts/stored-state-context";

const makeMenuItems = (srcArray: Array<string | { label: string; value: any; }>) => {
    return srcArray.map(item => {
        const [label, value] =
            (Object.hasOwnProperty.call(item, 'label') && Object.hasOwnProperty.call(item, 'value'))
                ? [
                    (item as { label: string; value: any; }).label,
                    (item as { label: string; value: any; }).value,
                ]
                : [item, item];

        return <MenuItem key={value} value={value}>{label}</MenuItem>;
    });
}

const wsmMenuItems = makeMenuItems([
    '-60',
    '-50',
    '-40',
    '-30',
    '-20',
    '-15',
    '-10',
    '0',
    '5',
    '10',
    '20',
    '30',
])

const attackTypeMenuItems = makeMenuItems(attackTypesList);

type FieldType = 'integer' | 'attackTypes';

export const MainCalc = () => {
    const storedState = useContext(StoredStateContext);

    const [inputDataState, setInputDataState] = useState<InputData>({
        gias: '',
        sias: '',
        wsm: '',
        attackType: AttackTypes.SMITE,
    });

    const handleFormStateInput = (field: keyof InputData, fieldType: FieldType, rawValue: string) => {
        if (typeof rawValue === 'undefined' || rawValue?.length < 1) {
            setInputDataState({
                ...inputDataState,
                [field]: '',
            })
            return;
        }

        switch (fieldType) {
            case 'attackTypes':
                setInputDataState({
                    ...inputDataState,
                    [field]: rawValue,
                });
                break;

            case 'integer':
            default:
                (() => {
                    const intValue = parseInt(rawValue);
                    let targetValue = '' + intValue;
                    if (isNaN(intValue)) {
                        targetValue = '';
                    }

                    setInputDataState({
                        ...inputDataState,
                        [field]: targetValue,
                    });
                })()
        }
    }

    const handleChange = (field: keyof InputData, fieldType: FieldType = 'integer') =>
        (event: React.ChangeEvent<HTMLInputElement>) =>
            handleFormStateInput(field, fieldType, event.target.value);

    const handleSelectChange = (field: keyof InputData, fieldType: FieldType = 'integer') =>
        (event: SelectChangeEvent<unknown>) =>
            handleFormStateInput(field, fieldType, event.target.value as string);

    const resultText = useMemo(
        () => {
            return calcAndFormat(inputDataState);
        },
        [inputDataState],
        )

    return <>
        <FormPaper elevation={12}>
            <Box
                component="form"
                noValidate
                autoComplete="off"
            >
                <FormFieldsLayout>
                    <FormControl>
                        <InputLabel id="attack-type-label">Attack Type</InputLabel>
                        <StyledSelect
                            labelId='attack-type-label'
                            value={inputDataState.attackType}
                            label='Attack Type'
                            onChange={handleSelectChange('attackType', 'attackTypes')}
                        >
                            {attackTypeMenuItems}
                        </StyledSelect>
                    </FormControl>

                    <FormControl>
                        <InputLabel id="wsm-label">Weapon Speed</InputLabel>
                        <StyledSelect
                            labelId="wsm-label"
                            value={inputDataState.wsm}
                            label="Weapon Speed"
                            onChange={handleSelectChange('wsm')}
                        >
                            {wsmMenuItems}
                        </StyledSelect>
                    </FormControl>

                    <FormControl>
                        <StyledField
                            label="Items IAS"
                            variant="outlined"
                            type={'number'}
                            onChange={handleChange('gias')}
                            value={inputDataState.gias}
                        />
                    </FormControl>

                    <FormControl>
                        <StyledField
                            label="Skills IAS"
                            variant="outlined"
                            type={'number'}
                            onChange={handleChange('sias')}
                            value={inputDataState.sias}
                        />
                    </FormControl>
                </FormFieldsLayout>
            </Box>
        </FormPaper>

        <FormPaper elevation={12}>
            <FormFieldsLayout>
                <OutputField
                    placeholder={'Please fill out the form'}
                    label={resultText?.label ?? ''}
                    value={resultText?.value ?? ''}
                />

                <Button
                    disabled={!resultText?.value}
                    onClick={() => storedState?.pushItem(inputDataState)}
                >
                    Store
                </Button>
            </FormFieldsLayout>
        </FormPaper>
    </>;
}
