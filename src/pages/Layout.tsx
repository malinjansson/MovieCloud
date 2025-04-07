import { Outlet } from "react-router";
import "./../styles/layout.scss";

export const Layout = () => {
    return (
        <>
            <header>
                <nav>
                    <h2 className="the-label">MovieCloud</h2>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <div className="footer-container">
                    <p>MovieCloud | 2025</p>
                </div>
            </footer>
        </>
    )
};