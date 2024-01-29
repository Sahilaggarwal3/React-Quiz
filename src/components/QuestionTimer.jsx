import React, { useEffect, useState } from 'react'


const QuestionTimer = ({ timeout, onTimeout }) => {

    const [remainingTime, setRemainingTime] = useState(timeout)

    useEffect(() => {
        const timer = setTimeout(onTimeout, timeout)

        return (() => {
            clearTimeout(timer)
        })
    }, [timeout, setTimeout])

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prevRemTime) => prevRemTime - 100)
        }, 100);

        return (() => {
            clearInterval(interval)
        })
    }, [])


    return (
        <progress value={remainingTime} max={timeout} />
    )
}

export default QuestionTimer
