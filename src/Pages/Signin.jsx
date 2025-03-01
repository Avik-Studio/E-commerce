import { useState } from "react";
// import firebase from "../Utils/firebaseconfig";


export default function Signin() {
  const [LoginwithEmail, SetloginwithEmail] = useState(true);
  
    const loginwithPhone = () => {
      SetloginwithEmail(!LoginwithEmail);
    };

    const [PhonefromData , setPhoneFromData] = useState({
      phone:'',
      otp:'',
    })

    const handlePhonefromData = (e) => {
      const {name , value} = e.target;
      setPhoneFromData({...PhonefromData, [name]:value});
    }
    //otp verification 
    const [verification , setverification] = useState("");
    const[ErrorMsg, setErrorMsg] = useState("");
    const sendOTPfun = () => {

    }
    const handleSubmitPhoneFromdata = (e) => {
      e.preventDefault();
      try {
        console.log("Succesfully Login");
      } catch (err) {
        console.log("Error while OTP Login",err);
      }
    }
  return (
    <>
      <div className="h-screen flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-5 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        { LoginwithEmail ? (
            // Login with passsword
        <>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                className="border-2 border-gray-600 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-gray-600 hover:text-gray-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                className="border-2 border-gray-600 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
            >
              Sign in
            </button>
          </div>
          <p className="mt-10 text-center text-l text-gray-800">
          Login With Phone number?{" "}
          <button onClick={loginwithPhone} className="font-semibold text-gray-800 hover:text-gray-500">
            Login now
          </button>
        </p>
        </form>
      </div>
        </>
        ) : (
          // Mobile Login with otp
        <>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmitPhoneFromdata} className="space-y-6">
          <div>
            <label
              htmlFor="phone"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Phone Number
            </label>
            <div className="mt-2">
              <input
                id="phone"
                name="phone"
                type="number"
                required
                autoComplete="number"
                value={PhonefromData.otp}
                className="border-2 border-gray-600 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="OTP"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Enter OTP
              </label>
            </div>
            <div className="mt-2">
              <input
                id="OTP"
                name="OTP"
                type="text"
                required
                value={PhonefromData.otp}
                onChange={handlePhonefromData}
                className="border-2 border-gray-600 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
              />
            </div>
            <div className="text-sm text-right">
              <button onClick={sendOTPfun} href="#" className="font-semibold border-2 p-1 mt-2 te border-gray-900 hover:bg-black text-gray-900 rounded-md hover:text-white">
              Send OTP
              </button >
              </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
            >
              Sign in
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-l text-gray-800">
          Login With Password?{" "}
          <button onClick={loginwithPhone} className="font-semibold text-gray-800 hover:text-gray-500">
            Login now
          </button>
        </p>
      </div>
        </>
        )}
          {/* signin or sign out */}
        <p className="mt-10 text-center text-l text-gray-800">
            Don't have account?{" "}
            <a
              href="Signup"
              className="font-semibold text-gray-800 hover:text-gray-500"
            >
              Create new account
            </a>
          </p>
      </div>

    </>
  );
}
