import { Link } from "react-router-dom";
import "./Auth.css";

export default function Login() {
    return (
        <div className="auth-page">
            <div className="auth-card">
                <h1>
                    Welcome back
                </h1>
                <p>
                    Login to your StudyDesk account
                </p>
                <form>
                    <div className="form-group">
                        <label>
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                        />
                    </div>
                    <button 
                        type="submit"
                        className="auth-button"
                    >
                        Login
                    </button>
                </form>
                <div className="auth-link">
                    Don't have an account?{" "}
                    <Link to="/register">
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
}