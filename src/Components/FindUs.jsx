import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";


const FindUs = () => {
    return (
        <div>
            <h1 className="font-semibold mb-3">Find Us On</h1>
            <div className="join flex join-vertical">
                <button className="btn bg-base-100 join-item justify-start"><FaFacebook></FaFacebook> Facebook </button>
                <button className="btn bg-base-100 join-item justify-start"><FaInstagram></FaInstagram> Instagram </button>
                <button className="btn bg-base-100 join-item justify-start"><FaTwitter></FaTwitter> Twitter </button>

            </div>
        </div>
    );
};

export default FindUs;