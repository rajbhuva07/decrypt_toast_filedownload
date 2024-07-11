import React, { useEffect, useState } from 'react';
// import 'react-circular-progressbar/dist/styles.css';
import ProgressBar from 'react-customizable-progressbar'
// import fram1815 from '../image/Frame 1815.svg'

const Progress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        var count = 60;
        const timer = setInterval(() => {
            setProgress(prevProgress => {
                if (prevProgress >= count) {
                    clearInterval(timer);
                    return count;
                }
                return prevProgress + 1;
            });
        }, 25);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className='App' style={
            { height: '200px', width: '200px', backgroundColor: 'black' }
        }>
            <ProgressBar
                radius={60}
                progress={progress}
                strokeWidth={5}
                strokeColor="#ff7f00"
                trackStrokeColor="#ffffff"
                trackStrokeWidth={10}
                cut={60}
                rotate={120}
                pointerStrokeColor="#ff7f00"
                pointerRadius={1}
                pointerStrokeWidth={10}
            >
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    lineHeight: '16px',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#f0f0f0'
                }}>
                    {`${progress}%`}
                    <p style={{ color: '#f0f0f0', fontSize: "12px" }}>Used</p>
                </div>

                <div
                    style={{
                        position: 'absolute',
                        bottom: '-5%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontSize: '15px',
                        fontWeight: 'bold',
                        color: '#f0f0f0',
                        gap: '100px',
                    }} >
                    {/* <img style={{ width: '30px' }} src={fram1815} alt='logo' ></img> */}
                </div>
            </ProgressBar>

        </div>
    )
}

export default Progress