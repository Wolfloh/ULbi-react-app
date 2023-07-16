import React from 'react'
import { usePagination } from '../../../hooks/usePagination';

export const Pagination = ({ totalPages, page, setPage, observe }) => {
    const pagesArr = usePagination(totalPages);
    return (
        <>
            {observe
                ?
                void 0
                :
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
            }
        </>
    )
}
