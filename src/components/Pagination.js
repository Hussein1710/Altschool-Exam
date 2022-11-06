import React from 'react'

const Pagination = ({userPerPage, totalPage}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPage / userPerPage); i++) {
        pageNumbers.push(i)
    }
  return (
    <div className='pages'>
      <ul className='page-number'>
        {pageNumbers.map(number => (
        <li key={number}>
            <a href="!#">{number}</a>
            
        </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination
