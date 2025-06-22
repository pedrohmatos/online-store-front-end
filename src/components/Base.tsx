import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Base() {
    return (
        <div className="flex flex-col min-h-screen justify-between text-base-text">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Base;