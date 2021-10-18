import React from 'react'
import Button from './Button'
import Title from './Title'
import NotePad from './NotePad'
export default function RightColumn() {
    return (
        <div className="d-flex flex-column">
            <Title/>
            <NotePad/>
            <Button/>
        </div>
    )
}
