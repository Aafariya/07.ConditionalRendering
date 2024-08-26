import { useState } from "react";

function Form(props) {
    const [isVisible, setIsVisible] = useState(false);

    function toggleVisibility() {
        setIsVisible(!isVisible);
    }

    return (
        <div className="flex flex-col gap-4">
            <input type="text" placeholder="Username" className="px-4 py-2 rounded" />
            <div className="relative">
                <input
                    type={isVisible ? 'text' : 'password'}
                    placeholder="Password"
                    className="px-4 py-2 rounded pr-12" 
                />
                <button
                    onClick={toggleVisibility}
                    className="absolute inset-y-0 right-0 px-3 py-2 text-sm text-gray-500 bg-gray-200 rounded-r-md border border-gray-300"
                >
                    {isVisible ? 'Hide' : 'Show'}
                </button>
            </div>
            {!props.isRegistered && (
                <input
                    type="text"
                    placeholder="Confirm Password"
                    className="px-4 py-2 rounded"
                />
            )}

            <button
                type="submit"
                className="px-4 py-2 rounded border-black border-2 text-white font-bold hover:shadow-2xl hover:font-extrabold"
            >
                {props.isRegistered ? 'Login' : 'Register'}
            </button>
        </div>
    );
}

export default Form;
