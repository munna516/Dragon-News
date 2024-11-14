import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Latest from "../Components/Latest";
import LeftSide from "../Components/Layout-component/LeftSide";
import RightSide from "../Components/Layout-component/RightSide";
import Navbar from "../Components/Navbar";

const HomeLayout = () => {
    return (
        <div className="font-poppins">
            {/* Header */}
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <Latest></Latest>
                </section>
            </header>

            {/* Navbar */}
            <nav className="w-11/12 mx-auto">
                <Navbar></Navbar>
            </nav>

            {/* Main */}
            <main className="w-11/12 mx-auto grid grid-cols-12 gap-3 mt-12">

                <aside className="left col-span-3">
                    <LeftSide></LeftSide>
                </aside>

                <section className="col-span-6">
                    <Outlet></Outlet>
                </section>

                <aside className="col-span-3">
                    <RightSide></RightSide>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;