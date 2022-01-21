import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default (props) => (
    <Zoom overlayBgColorStart="rgba(23, 23, 23, 0)" overlayBgColorEnd="rgba(23, 23, 23, 0.95)" zoomMargin={50} transitionDuration={600}>
        <img alt={props.alt} className={props.className} src={props.src}/>
    </Zoom>
)
  