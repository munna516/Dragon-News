import { Link, useLoaderData } from "react-router-dom";
import Header from "../Components/Header";
import RightSide from "../Components/Layout-component/RightSide";


const NewsDetails = () => {
    const data = useLoaderData()
    const news = data.data[0]
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
                <section className="col-span-9">
                    <h2 className="text-2xl font-semibold mb-6">Dragon News</h2>
                    <div className="card bg-base-100  shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src={news?.image_url}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold">{news?.title}</h2>
                            <p className="text-gray-400">{news?.details}</p>
                            <div className="card-actions">
                                <Link to={`/category/${news?.category_id}`} className="btn btn-primary">Back to category</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className="col-span-3">
                    <RightSide></RightSide>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;