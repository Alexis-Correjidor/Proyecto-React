import { useState } from "react"
import { useNavigate ,Navigate} from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext/useAuthContext"
import "./Login.css"

export const Login = () => {
    const [userForm,setUserForm] = useState({name: "",password: "" });
    const { user,login } = useAuthContext();
    const navigate = useNavigate()

    if(user) {
        return <Navigate to="/admin/alta-productos" replace />;

    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserForm({...userForm, [name]: value});    
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const success = login(userForm.name, userForm.password);
        if(success){
            navigate("/admin/alta-productos");
        }else{
            alert ("Credencial incorrecta");
            setUserForm({ name: "",password:"" });
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Usuario"
                value={userForm.name}
                onChange={(e) => setUserForm({ ...userForm, name: e.target.value })}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={userForm.password}
                onChange={(e) =>
                setUserForm({ ...userForm, password: e.target.value })
                }
            />
            <button type="submit">Ingresar</button>
            </form>
        </div>
        );

};

