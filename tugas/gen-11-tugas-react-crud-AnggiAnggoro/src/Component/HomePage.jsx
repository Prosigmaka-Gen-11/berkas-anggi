import { Link, Outlet } from "react-router-dom";

export default function HomePage() {
    return (
        <>
        <h1>Selamat Datang!</h1>
        <button>
            <Link to="/list">Melihat daftar kandidat</Link>
            </button>
            <button>
            <Link to="/form">Mendaftar</Link>
            </button>
            <Outlet />
        </>
    )
}