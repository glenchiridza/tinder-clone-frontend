import { IconButton } from '@material-ui/core'
import { Replay, Close, Favorite, FlashOn, StarRate } from '@material-ui/icons'
import React from 'react'
import './SwipeButtons.css'

function SwipeButtons() {
    function swiped (){

    }

  return (
    <div className='swipeButtons'>
        <IconButton onClick={swiped}>
            <Replay fontSize="large" className="btn-replay"/>
        </IconButton>
        <IconButton onClick={swiped}>
            <Close fontSize="large" className="btn-close"/>
        </IconButton>
        <IconButton onClick={swiped}>
            <StarRate  fontSize="large" className="btn-rate"/>
        </IconButton>
        <IconButton onClick={swiped}>
            <Favorite  fontSize="large" className="btn-fav"/>
        </IconButton>
        <IconButton onClick={swiped}>
            <FlashOn fontSize="large" className="btn-flashon"/>
        </IconButton>
    </div>
  )
}

export default SwipeButtons