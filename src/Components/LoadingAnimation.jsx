import React from 'react';
import { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react'


const LoadingAnimation = ({ onFinish }) => {

    const animation = useRef();

    useGSAP(() => {
        gsap.from(".bounce", {
            y: -50,
            opacity: 0,
            stagger: 0.2,
            duration: 1,
            ease: 'bounce.out',
            repeat: 2,
            scale: 2,
            onComplete: onFinish,
        })
    }, { scope: animation });


    return (
        <>
            <div ref={animation} className=" h-screen w-screen p-2 flex items-center justify-center   gap-2 ">
                <div className="bounce h-4 w-4 rounded-full border-2 border-black "> </div>
                <div className="bounce h-4 w-4 rounded-full border-2 border-black "> </div>
                <div className="bounce h-4 w-4 rounded-full border-2 border-black "> </div>
                <div className="bounce h-4 w-4 rounded-full border-2 border-black "> </div>
                <div className="bounce h-4 w-4 rounded-full border-2 border-black "> </div>
                <div className="bounce h-4 w-4 rounded-full border-2 border-black "> </div>
                <div className="bounce h-4 w-4 rounded-full border-2 border-black "> </div>
            </div>

        </>
    )
}

export default LoadingAnimation
