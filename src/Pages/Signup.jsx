import { useState } from "react";
import { signup } from "../services/AuthServices";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [fromData, setFromData] = useState({
    profile: null,
    Fname: "",
    Lname: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    conutry: "",
  });
  const [error, setError] = useState({});

  const validateForm = () => {
    let fromError = {};
    //email validation
    if (!fromData.email) {
      fromError.email = "Email is Requied..!";
    } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(fromData.email)) {
      fromError.email = "Email must end with @gmail.com";
    }
    //phone validation
    if (!fromData.phone) {
      fromError.phone = "Phone number is Required";
    } else if (!/^\d{10}$/.test(fromData.phone)) {
      fromError.phone = "Phone number must ne 10 digits.";
    }

    setError(fromError);
    return Object.keys(fromError).length === 0;
  };

  const handleFromChange = (e) => {
    const { name, value } = e.target;
    setFromData({ ...fromData, [name]: value });
  };
  const handleFromSubmit = async (e) => {
    e.preventDefault();
    try {
      if (validateForm()) {
        const response = await signup(fromData);
        const userData = response.data;
        if (response.status == 200) {
          alert("Successfully Signup...!");
          navigate("/signin");
        } else {
          alert("Failed to wignup New User");
        }
      }
    } catch (err) {
      console.error("Error while singup new user", err);
      alert(err.response.data.message);
    }
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* Logo */}
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Signup to your new account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto ">
          <form onSubmit={handleFromSubmit}>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base/7 font-semibold text-gray-900">
                  Profile
                </h2>
                <p className="mt-1 text-sm/6 text-gray-600">
                  This information will be displayed publicly so be careful what
                  you share.
                </p>
              </div>
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base/7 font-semibold text-gray-900">
                  Personal Information
                </h2>
                <p className="mt-1 text-sm/6 text-gray-600">
                  Use a permanent address where you can receive mail.
                </p>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  {/* first name */}
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="Fname"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        id="Fname"
                        name="Fname"
                        type="text"
                        value={fromData.Fname}
                        onChange={handleFromChange}
                        className="border-2 border-gray-600 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
                  {/* last name */}
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="Lname"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        id="Lname"
                        name="Lname"
                        type="text"
                        value={fromData.Lname}
                        onChange={handleFromChange}
                        autoComplete="family-name"
                        className="border-2 border-gray-600 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
                  {/* Phone number */}
                  <div className="sm:col-span-3">
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
                        value={fromData.phone}
                        onChange={handleFromChange}
                        className="border-2 border-gray-600 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
                      />
                    </div>
                    {error.phone && (
                      <p className="text-red-500 text-sm">{error.phone}</p>
                    )}
                  </div>
                  {/* Email */}
                  <div className="sm:col-span-3">
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
                        value={fromData.email}
                        onChange={handleFromChange}
                        className="border-2 border-gray-600 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
                      />
                    </div>
                    {error.email && (
                      <p className="text-red-500 text-sm">{error.email}</p>
                    )}
                  </div>
                  {/* Password  */}
                  <div className="col-span-full">
                    <label
                      htmlFor="password"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Strong Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        value={fromData.password}
                        onChange={handleFromChange}
                        className="border-2 border-gray-600 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
                  {/* address  */}
                  <div className="col-span-full">
                    <label
                      htmlFor="address"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Full Address
                    </label>
                    <div className="mt-2">
                      <input
                        id="address"
                        name="address"
                        type="text"
                        value={fromData.address}
                        onChange={handleFromChange}
                        className="border-2 border-gray-600 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
                  {/* City */}
                  <div className="sm:col-span-2 sm:col-start-1">
                    <label
                      htmlFor="city"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      City
                    </label>
                    <div className="mt-2">
                      <input
                        id="city"
                        name="city"
                        type="text"
                        value={fromData.city}
                        onChange={handleFromChange}
                        className="border-2 border-gray-600 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
                  {/* State */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="state"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      State / Province
                    </label>
                    <div className="mt-2">
                      <input
                        id="state"
                        name="state"
                        type="text"
                        value={fromData.state}
                        onChange={handleFromChange}
                        className="border-2 border-gray-600 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
                  {/* Pincode */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="pincode"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      ZIP / Pincode
                    </label>
                    <div className="mt-2">
                      <input
                        id="pincode"
                        name="pincode"
                        type="text"
                        value={fromData.pincode}
                        onChange={handleFromChange}
                        className="border-2 border-gray-600 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
                  {/* Country */}
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Country
                    </label>
                    <div className="mt-2 grid grid-cols-1">
                      <input
                        id="country"
                        name="country"
                        type="text"
                        value={fromData.conutry}
                        onChange={handleFromChange}
                        className="border-2 border-gray-600 col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-x-6">
              <button
                type="button"
                className="rounded-md bg-red-600 px-16 py-2 text-sm font-semibold text-white shadow-xs hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-gray-600 px-16 py-2 text-sm font-semibold text-white shadow-xs hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                Save
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-l text-gray-800">
            Already have account?{" "}
            <a
              href="/Signin"
              className="font-semibold text-gray-600 hover:text-gray-800"
            >
              Signin now
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
