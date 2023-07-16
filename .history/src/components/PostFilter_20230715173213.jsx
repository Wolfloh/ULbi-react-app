import React from 'react'
import { MyInput } from "./UI/input/MyInput";
import { MySelect } from "./UI/select/MySelect";




export const PostFilter = ({ filter, setFilter }) => {
    return (
        <div className='filter-sort__wrapper'>
            <MyInput
                value={filter.query}
                onInput={e => setFilter({ ...filter, query: e.target.value })}
                placeholder='Поиск'
            />
            <MySelect
                value={filter.sort}
                onChange={choice => setFilter({ ...filter, sort: choice })}
                defaultValue='Сортировка по'
                options={[
                    { value: 'title', name: 'По названию' },
                    { value: 'body', name: 'По описанию' },
                ]}
            />
        </div>
    )
}

