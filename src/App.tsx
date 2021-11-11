import React, {useMemo, useState} from 'react';
import '@fontsource/roboto';
import {Box, FormControl, InputLabel, MenuItem, SelectChangeEvent, Typography} from "@mui/material";

import styled from "styled-components";
import {FormPaper} from "styled/form-paper";
import {OutputField, StyledField} from "styled/field";
import {StyledSelect} from "styled/select";
import {AttackTypes, attackTypesList} from "./calcs/attack-types";
import {calcAndFormat} from "./calcs/calc-and-format";
import {FormFieldsLayout} from "./styled/form-fields-layout";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  row-gap: 24px;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 24px;
  justify-content: center;
`

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  min-width: calc(390px + 48px);
`;

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
    '-10',
    '0',
    '10',
    '20',
    '30',
])

const attackTypeMenuItems = makeMenuItems(attackTypesList);

interface InputData {
    gias: string;
    sias: string;
    wsm: string;
    attackType: AttackTypes;
}

type FieldType = 'integer' | 'attackTypes';

function App() {
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
            return calcAndFormat(
                inputDataState.attackType,
                inputDataState.gias,
                inputDataState.sias,
                inputDataState.wsm,
            );
        },
        [inputDataState],
    )

    return (
        <AppWrapper>
            <RowWrapper>
                <Typography variant={'h3'}>
                    Uncapped IAS Calculator
                </Typography>
            </RowWrapper>

            <RowWrapper>
                <ColumnWrapper>
                    <FormPaper elevation={12}>
                        <Box
                            component="form"
                            noValidate
                            autoComplete="off"
                        >
                            <FormFieldsLayout>
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
                            </FormFieldsLayout>
                        </Box>
                    </FormPaper>

                    <FormPaper elevation={12}>
                        <FormFieldsLayout>
                            <OutputField
                                placeholder={'Please fill out the form'}
                                value={resultText ?? ''}
                            />
                        </FormFieldsLayout>
                    </FormPaper>
                </ColumnWrapper>

                {/*<ColumnWrapper>*/}
                {/*    <FormPaper elevation={12}>*/}
                {/*        Test*/}
                {/*    </FormPaper>*/}
                {/*</ColumnWrapper>*/}
            </RowWrapper>
        </AppWrapper>
    );
}

export default App;
