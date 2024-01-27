// Create a file, e.g., LoginForm.tsx
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { verifyToken } from "../../utils/verifyToken";
import { IUser } from "../../interface/user";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/features/auth/authSlice";

interface LoginFormProps {
  // Define any props needed for the form
}

const Login: React.FC<LoginFormProps> = () => {
  const { register, handleSubmit } = useForm();
  const [userLogin] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleUserLogin = async (data: unknown) => {
    const toastId = toast.loading("Login is processing ...");

    try {
      const res = await userLogin(data).unwrap();
      const user = verifyToken(res.data.accessToken) as IUser;
      dispatch(setUser({ user, token: res.data.accessToken }));
      toast.success("User Login Successfully !", { id: toastId });
      navigate("/dashboard");
    } catch (error) {
      toast.error("Something went wrong !", { id: toastId });
    }
  };
  return (
    <div className="bg-white font-poppins h-screen flex items-center justify-center">
      <div className="p-8 lg:w-1/2 mx-auto">
        <div className="bg-gray-50 rounded-b-lg py-12 px-4 lg:px-24">
          <p className="text-center  text-gray-500 font-light text-2xl py-3">
            Login with <span className="text-black">credentials</span>
          </p>
          <form onSubmit={handleSubmit(handleUserLogin)} className="mt-6">
            <div className="relative">
              <input
                className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600 transition rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                {...register("email")}
              />
            </div>
            <div className="relative mt-3">
              <input
                className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600 transition rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                {...register("password")}
              />
            </div>
            <p className="mt-4 italic text-gray-500 font-light text-xs">
              New to Garden | Glance Please:{" "}
              <span className="font-bold text-black">
                <Link to="/register">Register</Link>
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
              <button
                type="submit"
                className="text-white py-2 px-4 uppercase rounded bg-gray-500 hover:bg-gray-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 max-w-5xl  w-full"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <Toaster richColors position="top-center" /> */}
    </div>
  );
};

export default Login;
