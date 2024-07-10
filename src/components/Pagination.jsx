import React from 'react'

const Pagination = ({pageNumber, nextPageFn, previousPageFn}) => {
  return (
    <div className='bg-gray-400 p-4 h-[500] w-full mt-8 flex justify-center gap-2'>
        <div className='px-8' onClick={previousPageFn}><i className="fa-solid fa-arrow-left"></i></div>
        <div>{pageNumber}</div>
        <div className='px-8' onClick={nextPageFn}><i className="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination