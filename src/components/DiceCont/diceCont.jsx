import React from "react";

export default function DiceCont() {
    return(
        <>
            <div className="flex items-center justify-center w-16 h-16 rounded-full hover:animate-bounce bg-neonGreen hover:shadow-3xl hover:shadow-neonGreen">
                <svg className="hover:animate-spin" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#1f2632"/>
                </svg>
            </div>
        </>
    )
}