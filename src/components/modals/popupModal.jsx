import React, { useState, useEffect } from 'react';
import { RiStarSFill } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';

const OpeningModal = ({ isOpen, onClose }) => {
    const [timeLeft, setTimeLeft] = useState({ minutes: 9, seconds: 32 });
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (!isOpen) return;

        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds === 0) {
                    if (prev.minutes === 0) {
                        clearInterval(timer);
                        return prev;
                    }
                    return { minutes: prev.minutes - 1, seconds: 59 };
                }
                return { ...prev, seconds: prev.seconds - 1 };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Email submitted:', email);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose} style={{ zIndex: '999' }}>
            <div className="relative bg-white rounded-lg p-8 w-full max-w-md" onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
                    <RxCross2 className="w-6 h-6" />
                </button>

                {/* Avatar Grid */}
                {/* <div className="relative h-32 mb-4">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <img src="/placeholder.svg?height=80&width=80" alt="" className="w-20 h-20 rounded-full border-4 border-white shadow-lg" />
                    </div>
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-12 h-12"
                            style={{
                                left: `${50 + 35 * Math.cos(i * Math.PI / 3)}%`,
                                top: `${50 + 35 * Math.sin(i * Math.PI / 3)}%`,
                                transform: 'translate(-50%, -50%)'
                            }}
                        >
                            <img src={`/placeholder.svg?height=48&width=48`} alt="" className="w-full h-full rounded-full border-2 border-white shadow-md" />
                        </div>
                    ))}
                </div> */}

                {/* Content */}
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold">Act Fast!</h2>
                    <div className="text-xl">
                        Get <span className="text-[#ff4800] font-semibold">10%</span> Off Any Service
                    </div>
                    <p className="text-gray-600">
                        Enter your details to redeem your discount before time runs out!
                    </p>

                    {/* Timer */}
                    <div className="my-6">
                        <p className="text-gray-500 mb-2">Hurry, time is running out!</p>
                        <div className="text-5xl font-bold text-[#ff4800]">
                            {String(timeLeft.minutes).padStart(2, '0')}:
                            {String(timeLeft.seconds).padStart(2, '0')}
                            <div className="flex justify-center text-sm font-normal text-gray-500 mt-1">
                                <span className="w-16">MIN</span>
                                <span className="w-16">SEC</span>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="mb-2">
                            <input
                                id="name"
                                type="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Email *"
                                required />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-[#ff4800] text-white rounded-lg font-semibold hover:bg-[#ff3300] transition-colors"
                        >
                            CLAIM 10 OFF
                        </button>
                    </form>

                    {/* Trust Indicators */}
                    <div className="pt-6 flex items-center justify-between">
                        <div className="flex flex-col items-center space-x-2">
                            <div className="text-sm font-semibold text-gray-600">
                                TrustPilot
                            </div>
                            <div className="mb-1 text-sm text-gray-500">
                                TrustScore 4.8 | 132 Reviews
                            </div>
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <RiStarSFill className="p-[1px] w-5 h-5 bg-green-500 text-[#fff] mx-[2px]" />
                                ))}
                            </div>
                        </div>
                        <h4 className="flex items-center">
                            <img
                                className="w-10"
                                src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/aaa.png?v=1713875658"
                                alt="logo"
                            />
                            <h2 className="poppins text-gray-800 dark:text-gray-200 text-lg font-semibold tracking-wide">
                                StudyWello
                            </h2>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OpeningModal;

