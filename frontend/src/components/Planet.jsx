import React from "react";

export const Planet = ({name, image }) => (
    <div className="planet">
        <img src={`/images/${image}`} alt="" />
        <h1>{name}</h1>
    </div>
)