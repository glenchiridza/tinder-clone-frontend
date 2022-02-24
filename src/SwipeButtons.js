import { IconButton } from '@material-ui/core'
import { Replay, Close, Favorite, FlashOn, StarRate } from '@material-ui/icons'
import React from 'react'
import './SwipeButtons.css'

function SwipeButtons() {
    function swiped (){

    }

  return (
    <div className='swipeButtons'>
        <IconButton>
            <Replay onClick={swiped} fontSize="large" className="btn-replay"/>
        </IconButton>
        <IconButton>
            <Close onClick={swiped} fontSize="large" className="btn-close"/>
        </IconButton>
        <IconButton>
            <StarRate onClick={swiped} fontSize="large" className="btn-rate"/>
        </IconButton>
        <IconButton>
            <Favorite onClick={swiped} fontSize="large" className="btn-fav"/>
        </IconButton>
        <IconButton>
            <FlashOn onClick={swiped} fontSize="large" className="btn-flashon"/>
        </IconButton>
    </div>
  )
}

export default SwipeButtons