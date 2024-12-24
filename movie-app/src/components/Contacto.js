import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import './Contacto.css';
const Contacto = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const handleContact = (event) => {
        event.preventDefault();
        // Aquí puedes añadir la lógica para enviar el mensaje de contacto
        alert('Mensaje enviado');
    };
    return (_jsxs("section", { id: "contacto", className: "contacto", children: [_jsx("h2", { children: "Contacto" }), _jsxs("form", { onSubmit: handleContact, children: [_jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "name", children: "Nombre:" }), _jsx("input", { type: "text", id: "name", value: name, onChange: (e) => setName(e.target.value), required: true })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "message", children: "Mensaje:" }), _jsx("textarea", { id: "message", value: message, onChange: (e) => setMessage(e.target.value), required: true })] }), _jsx("button", { type: "submit", children: "Enviar" })] })] }));
};
export default Contacto;
