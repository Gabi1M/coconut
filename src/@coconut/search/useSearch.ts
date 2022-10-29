import React from 'react';
import { useDispatch } from 'react-redux';

import { SearchItemType } from '@coconut/models';
import { Resource, createResourceFetchAction } from '@coconut/resource';

const useSearch = () => {
    const dispatch = useDispatch();

    const [query, setQuery] = React.useState<string>();
    const [types, setTypes] = React.useState<SearchItemType[]>([]);

    const onSearch = () => {
        if (query) {
            dispatch(
                createResourceFetchAction(Resource.SEARCH, {
                    query,
                    types: types.length ? types : undefined,
                }),
            );
        }
    };

    const addType = (type: SearchItemType) => {
        if (types.includes(type)) {
            return;
        }

        setTypes([...types, type]);
    };

    const removeType = (type: SearchItemType) => {
        setTypes(types.filter((x) => x !== type));
    };

    return {
        query,
        types,
        setQuery,
        addType,
        removeType,
        onSearch,
    };
};

export default useSearch;
