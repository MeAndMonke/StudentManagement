import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    StudyDesk
                </div>
                <div className="nav-links">
                    <Link to="/login">
                        Login
                    </Link>
                    <Link to="/register" className="nav-button">
                        Register
                    </Link>
                </div>
            </nav>
            <main>
                <section className="hero">
                    <div className="hero-content">
                        <h1>
                            Manage your school,
                            <span> smarter.</span>
                        </h1>
                        <p>
                            StudyDesk helps teachers, students, and administrators
                            manage education in one simple platform.
                        </p>
                        <div className="hero-buttons">
                            <Link 
                                to="/register" 
                                className="cta-button"
                            >
                                Get Started
                            </Link>
                            <Link 
                                to="/login" 
                                className="secondary-button"
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="features">
                    <div className="feature">
                        <h3>
                            For Teachers
                        </h3>
                        <p>
                            Manage classes, track students,
                            and organize your workflow.
                        </p>
                    </div>
                    <div className="feature">
                        <h3>
                            For Students
                        </h3>
                        <p>
                            Access learning materials and
                            monitor your progress.
                        </p>
                    </div>
                    <div className="feature">
                        <h3>
                            For Administrators
                        </h3>
                        <p>
                            Manage users, permissions,
                            and school operations.
                        </p>
                    </div>
                </section>
                <section className="bottom-cta">
                    <h2>
                        Ready to get started?
                    </h2>
                    <Link 
                        to="/register" 
                        className="cta-button"
                    >
                        Create Account
                    </Link>
                </section>
            </main>
            <footer>
                © {new Date().getFullYear()} StudyDesk
            </footer>
        </>
    );
}