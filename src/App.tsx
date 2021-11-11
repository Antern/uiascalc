import React from 'react';
import '@fontsource/roboto';
import {Typography} from "@mui/material";
import styled from "styled-components";

import {MainCalc} from "./components/main-calc";
import {StoredResults} from "./components/stored-results";
import StoredStateProvider from "./contexts/stored-state-context";

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

const ColumnWrapper = styled.div<{minWidth?: string}>`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  min-width: ${props => props?.minWidth ?? '320px'};
`;

function App() {


    return (
        <StoredStateProvider>
            <AppWrapper>
                <RowWrapper>
                    <Typography variant={'h3'}>
                        Uncapped IAS Calculator
                    </Typography>
                </RowWrapper>

                <RowWrapper>
                    <ColumnWrapper>
                        <MainCalc/>
                    </ColumnWrapper>

                    <ColumnWrapper>
                        <StoredResults/>
                    </ColumnWrapper>
                </RowWrapper>
            </AppWrapper>
        </StoredStateProvider>
    );
}

export default App;
