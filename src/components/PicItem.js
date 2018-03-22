import React from 'react'

const PicItem = (props) => {
    return <a href={props.pic} target="_blank" className="item" onClick={(e) => props.openModal(e, props.pic, props.link)} style={{
        backgroundImage: `url(${props.pic || '' }?fit=crop&w=300&h=250)`
    }} />
}

export default PicItem