import React from "react";
import '../App/App.css'

function EmptySearchResults({ searchedText }) {
    return <p className="alertMessage">No se encontrĂ³: {searchedText}</p>;
}

export { EmptySearchResults }