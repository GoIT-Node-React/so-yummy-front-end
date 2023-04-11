import React from 'react';
import { Form, SearchFormField } from '../../SearchForm/SearchForm.styled.js';
import { SearchFormButton, FormWrapper } from './MainPageSearchForm.styled.js';
import { useSearchContext } from '../../../contexts/Search.context.jsx';
import { warnNotification } from '../../../helpers';

export default function MainPageSearchForm() {
    const { query, updateQuery, fetchData } = useSearchContext();

    const handleChange = event => {
        const { value } = event.target;
        updateQuery(value.trim());
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (query.length === 0) {
            return warnNotification(
                'Enter the name of the parameter in the search!'
            );
        }

        fetchData();
    };

    return (
        <FormWrapper>
            <Form onSubmit={handleSubmit}>
                <SearchFormField
                    type="text"
                    name="name"
                    value={query}
                    onChange={handleChange}
                    placeholder="Search..."
                />
                <SearchFormButton>Search</SearchFormButton>
            </Form>
        </FormWrapper>
    );
}
