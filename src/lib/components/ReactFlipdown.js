import React, { useEffect, useState } from 'react'
import { FlipDown, pad, appendChildren } from './flipdown'
import './flipdown.css'

const ReactFlipdown = ({ endTime, theme = "dark", headings = ["Days", "Hours", "Minutes", "Seconds"] }) => {

    const [containerId, setContainerId] = useState(`Flipdown-${[...Array(10)].map(() => Math.random().toString(36)[2]).join('')}`)

    useEffect(() => {
        let container = document.getElementById(containerId)
        // create element with id=element_id class=flipdown
        let element_id = [...Array(10)].map(() => Math.random().toString(36)[2]).join('')
        let el = document.createElement('div')
        el.id = element_id
        el.className = 'flipdown'
        // clear container
        container.innerHTML = ''
        // append element to container
        container.appendChild(el)
        // init flipdown
        new FlipDown(
            endTime,
            element_id,
            {
                theme: theme,
                headings: headings
            }
        ).start()
    }, [endTime, theme, headings])

    return (
        <div id={containerId}></div>
    )
}

export default ReactFlipdown