import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-4xl font-bold">404 - Not Found</h2>
            <Link className="border border-blue-700 p-2 mt-4" to="/">Go back to Home</Link>
        </div>
    );
};

export default ErrorPage;