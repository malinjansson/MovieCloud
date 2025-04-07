import { Outlet } from "react-router";

export const Layout = () => {
    return (
        <>
            <header>
                <nav>
                    <h2 className="the-label">
                        <h2>MovieCloud</h2>
                    </h2>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <div className="info-container">
                    <div className="copyright-container">
                        <div className="copyright">
                            <p>MovieCloud | 2025</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
};