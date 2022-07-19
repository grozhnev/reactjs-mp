import React from "react";


export function ErrorBoundary(props) {
    const ErrorMsg = () => (<h2>Error happened in Movie component!</h2>)

    let isOk = false 

    return <>{isOk ? props.children : <ErrorMsg />}</>
}

export default ErrorBoundary