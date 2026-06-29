import { Link } from "react-router-dom";
import "./Auth.css";

export default function Register() {
    return (
        <div className="auth-page">
            <div className="auth-card">
                <h1>
                    Create account
                </h1>
                <p>
                    Join StudyDesk today
                </p>
                <form>
                    <div className="form-group">
                        <label>
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Your name"
                        />
                    </div>
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
                            placeholder="Create a password"
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            Account type
                        </label>

                        <select>
                            <option value="student">
                                Student
                            </option>

                            <option value="teacher">
                                Teacher
                            </option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="auth-button"
                    >
                        Register
                    </button>
                </form>
                <div className="auth-link">
                    Already have an account?{" "}
                    <Link to="/login">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}