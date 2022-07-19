import React from "react";
export default function UserPicture({ src, width }) {
    return (
        <>
            <img className="rounded-circle" src={src} width={width} />
        </>
    );
}
