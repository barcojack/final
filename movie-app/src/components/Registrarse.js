var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import axios from 'axios';
import './Registrarse.css';
const Registrarse = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const handleRegister = (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        try {
            const response = yield axios.post('http://localhost:5000/api/auth/register', { email, password });
            setMessage(response.data.message);
        }
        catch (error) { // Asegurando que el tipo de error es unknown
            if (axios.isAxiosError(error) && error.response) {
                setMessage(error.response.data.message || 'Error al registrar usuario');
            }
            else {
                setMessage('Error desconocido al registrar usuario');
            }
        }
    });
    return (_jsxs("section", { id: "registrarse", className: "registrarse", children: [_jsx("h2", { children: "Registrarse" }), _jsxs("form", { onSubmit: handleRegister, children: [_jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "email", children: "Correo Electr\u00F3nico:" }), _jsx("input", { type: "email", id: "email", value: email, onChange: (e) => setEmail(e.target.value), required: true })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "password", children: "Contrase\u00F1a:" }), _jsx("input", { type: "password", id: "password", value: password, onChange: (e) => setPassword(e.target.value), required: true })] }), _jsx("button", { type: "submit", children: "Registrarse" }), message && _jsx("p", { children: message })] })] }));
};
export default Registrarse;
