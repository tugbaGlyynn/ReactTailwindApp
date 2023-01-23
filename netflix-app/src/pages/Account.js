import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
  <div className='w-full text-white'>
  <img className='w-full h-[400px] object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/935156fb-9579-4fc2-ad94-70680402b8ef/21acfee3-8c9c-499d-8128-e7252cea4753/TR-tr-20230109-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='/'></img>
    <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
    <div className='absolute top-[20%] p-4 md:p-8'>
      <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
    </div>
  </div>
  <SavedShows/>
    </>
  )
}

export default Account