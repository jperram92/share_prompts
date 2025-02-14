'use client';

import { useEffect } from "react";

        const Error = ({ error, reset}) => {

        useEffect(() => {
            //log the error to console
            console.error(error);
        }, [error]);


    return(
        <div>
            <h2>Something went wrong!</h2>
            <p>Redirecting...</p>
            <button
                onClick={

                    () => reset()
                }
            >
                Try Again
            </button>
        </div>
    );
}