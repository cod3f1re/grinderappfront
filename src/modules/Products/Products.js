import React from "react";
import CardExpandable from "../../library/common/components/cards/CardExpandable";


export default function Products() {
    return (
        <>
            <p style={{marginBottom: '30px'}}>
                Productos
            </p>
            <p>
                <CardExpandable/>
            </p>
            <p>
                <CardExpandable/>
            </p>
            <p>
                <CardExpandable/>
            </p>
        </>
    );
}