import React from 'react'

export default function ItemSkill({ label, onPress }) {
  return (
    <button onClick={onPress}  data-remove={label}
      className="z-10 flex justify-center items-center m-1 p-1 text-base text-white bg-red-700 hover:text-red-700 hover:bg-transparent hover:border hover:border-red-500 transition duration-300">
      <span>{label}</span>
      <span className="ml-1" >
        <svg className='h-4 w-4' viewBox="0 0 24 24">
          <path d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m2.59 6L12 10.59L9.41 8L8 9.41L10.59 12L8 14.59L9.41 16L12 13.41L14.59 16L16 14.59L13.41 12L16 9.41L14.59 8z" fill="currentColor">
          </path>
        </svg>
      </span>
    </button>
  )
}

