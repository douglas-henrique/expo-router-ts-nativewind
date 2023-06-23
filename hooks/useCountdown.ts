import { useState, useEffect } from 'react'

export default function useCountdown() {
    const [secondsLeft, setSecondsLeft] = useState(0)

    useEffect(() => {
        if (secondsLeft <= 0) return
        const timeout = setTimeout(() => {
            setSecondsLeft(secondsLeft - 1)
        }, 1000)

        return () => clearInterval(timeout)
    }, [secondsLeft])

    function start(seconds: number) {
        setSecondsLeft(seconds)
    }

    return { secondsLeft, start }
}