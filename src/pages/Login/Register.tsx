import { Link } from "react-router-dom";


const Register = () => {
  return (
    <div className="bg-white font-poppins flex items-center justify-center h-screen">
      <div className="p-8 lg:w-1/2 mx-auto">
        <div className="bg-gray-50 rounded-b-lg py-12 px-4 lg:px-24">
          <p className="text-center  text-gray-500  text-2xl">
            sign up with <span className="text-black">credentials</span>
          </p>
          <form className="mt-6">
            <div className="relative">
              <input
                className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600 transition rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Full Name"
              />
              <div className="absolute left-0 inset-y-0 flex items-center"></div>
            </div>
            <div className="relative mt-3">
              <input
                className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600 transition rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email"
              />
              <div className="absolute left-0 inset-y-0 flex items-center"></div>
            </div>
            <div className="relative mt-3">
              <input
                className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600 transition rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
              />
              <div className="absolute left-0 inset-y-0 flex items-center"></div>
            </div>
            <p className="mt-4 italic text-gray-500 font-light text-xs">
              Already have an account Please:{" "}
              <span className="font-bold text-black text-xs">
                <Link to="/login">Login</Link>
              </span>
            </p>
            <div className="mt-4 flex items-center text-gray-500">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="mr-2"
              />
              <label className="text-sm" htmlFor="remember">
                I agree with the{" "}
                <a className="text-gray-400 hover:text-gray-500">
                  Privacy Policy
                </a>
              </label>
            </div>
            <div className="flex items-center justify-center mt-8">
              <button className="text-white py-2 px-4 uppercase rounded bg-gray-500 hover:bg-gray-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 max-w-5xl w-full">
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <Toaster richColors position="top-center" /> */}
    </div>
  );
};

export default Register;