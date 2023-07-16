import React from 'react'
import { usePagination } from '../../../hooks/usePagination';

export const Pagination = ({ totalPages, page, setPage }) => {
    const pagesArr = usePagination(totalPages);
    return (
        <div className="pages__wrapper">
            {pagesArr.map(n => {
                return <button
                    key={n}
                    className={page === n ? 'page page__current' : 'page'}
                    onClick={() => {
                        setPage(n)
                    }}
                >
                    {n}
                </button>
            })}
        </div>
    )
}
