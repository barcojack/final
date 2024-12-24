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
import { useEffect, useState } from 'react';
import axios from 'axios';
import './VerUsuarios.css';
const VerUsuarios = () => {
    const [users, setUsers] = useState([]); // Usar la interfaz para definir el tipo
    useEffect(() => {
        const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const response = yield axios.get('http://localhost:5000/api/auth/users');
                setUsers(response.data);
            }
            catch (error) {
                console.error('Error fetching users:', error);
            }
        });
        fetchUsers();
    }, []);
    return (_jsxs("div", { className: "user-list", children: [_jsx("h2", { children: "Usuarios Registrados" }), _jsx("ul", { children: users.map((user, index) => (_jsx("li", { children: user.email }, index))) })] }));
};
export default VerUsuarios;
