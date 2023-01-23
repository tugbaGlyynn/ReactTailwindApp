import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import request from '../Request'

const Home = () => {
  return (
    <>
        <Main/>
        <Row rowID='1' title='UpComing' fetchUrl={request.requestPopuler}/>
        <Row rowID='2' title='Popular' fetchUrl={request.requestPopuler}/>
        <Row rowID='3' title='Trending' fetchUrl={request.requestTrending}/>
        <Row rowID='4' title='Top Rated' fetchUrl={request.requestTopRated}/>
        <Row rowID='5' title='Horror' fetchUrl={request.requestTrending}/>
    </>
  )
}

export default Home