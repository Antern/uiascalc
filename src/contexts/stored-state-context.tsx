import React from 'react';
import {InputData} from "../types/input-data";
import useLocalStorage from "use-local-storage";
import {StoredState} from "types/stored-state";

export interface IStoredState {
    pushItem: (item: InputData) => void,
    removeItem: (item: InputData) => void,
    items: InputData[];
}

export const StoredStateContext =
    React.createContext<IStoredState | null>(null);

const StoredStateProvider: React.FC = ({ children }) => {
    const [storedState, setStoredState] =
        useLocalStorage<StoredState>(
            'input-data',
            { items: [] },
        );

    const storedStateValue: IStoredState = {
        pushItem: item => {
            setStoredState({
                ...storedState,
                items: [
                    ...(storedState?.items || []),
                    item,
                ],
            })
        },
        removeItem: srcItem => {
            const items = storedState?.items ?? [];
            const srcItemJSON = JSON.stringify(srcItem);
            const idx = items.findIndex((item) =>
                JSON.stringify(item) === srcItemJSON
            );

            if (idx < 0) {
                return;
            }

            const newItemsList = [
                ...items.slice(0, idx),
                ...items.slice(idx + 1),
            ];

            setStoredState({
                ...storedState,
                items: newItemsList,
            });
        },
        items: storedState?.items ?? [],
    }

    return <StoredStateContext.Provider value={storedStateValue}>{children}</StoredStateContext.Provider>;
};

export default StoredStateProvider;
