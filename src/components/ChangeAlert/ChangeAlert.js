import React from "react";
import { useStorageListener } from "./useStorageListener";
import './ChangeAlert.css'

function ChangeAlert({ sincronize }) {
    const { show, toggleShow } = useStorageListener(sincronize);

    if(show) {
        return (
            <div className="ChangeAlert">
                <div className="ChangeAlertContainer">
                    <p>Hubo cambios!</p>
                    <button
                        className="ChangeAlertButton"
                        onClick={() => toggleShow(false)}
                    >
                        Refrescar la aplicación
                    </button>
                </div>
            </div>
        )
    } else {
        return null
    }
    
}

export { ChangeAlert }