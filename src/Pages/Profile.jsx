import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import pic from "../assets/Images/profile.jpg";
// import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
// import { ChevronDownIcon } from "@heroicons/react/16/solid";
const subCategories = [
  { name: "Profile", href: "/profile" },
  { name: "Orders", href: "/order" },
  { name: "Address", href: "/address" },
  { name: "LogOut", href: "/SignIn" },
];

export default function Profile() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [showProfileDEditv, setShowProfileDEditiv] = useState(true);

  const editprofile = () => {
    setShowProfileDEditiv(!showProfileDEditv);
  };

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Dialog
          open={mobileFiltersOpen}
          onClose={setMobileFiltersOpen}
          className="relative z-40 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <i className="fa-solid fa-x size-6" aria-hidden="true"></i>
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href} className="block px-2 py-3">
                        {category.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-5 py-5">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Account
            </h1>
            <div className="flex items-center">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <i
                  className="fa-solid fa-filter-circle-dollar size-5"
                  aria-hidden="true"
                ></i>
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="space-y-4  border-gray-200 pb-6 text-sm font-medium text-gray-900"
                >
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul>
              </form>
              {/* Product grid */}
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:col-span-3">
                {/* Our Product */}
                <div className="mb-5 pb-5">
                  <div className="my-2 text-right">
                    <button
                      onClick={editprofile}
                      className="bg-gray-900 text-white hover:bg-gray-600 p-2 rounded-xl"
                    >
                      Edit Profile
                    </button>
                  </div>
                  {showProfileDEditv ? (
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-8 p-5 items-center border-2 border-white shadow-2xl shadow-black">
                        <div className="flex justify-evenly">
                          <img
                            src={pic}
                            className="rounded-full max-w-xs max-h-48 border-2 bg-white"
                          />
                          </div>
                      <div className="md:col-span-2">
                            <h1 className="text-4xl font-bold text-gray-900">Avik Modak.</h1>
                            <h3 className="text-xl mt-2 font-bold text-gray-900">P/H : 8617346696.<br></br>Email: avikmodak83@gmail.com</h3>
                           <div className="pl-5 mt-3 text-l text-gray-600">
                            <p>Default Address: kolkata , kolkata</p>
                             <p>kolkata , West-Bengal.</p> 
                            <p>PinCode: 700099.</p>
                          </div>
                        </div>
                      
                      </div>
                  ) : (
                    <div className="">
                      <form>
                        <div className="space-y-12">
                          <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base/7 font-bold text-gray-900">
                              Profile
                            </h2>
                            <p className="mt-1 text-sm/6 text-gray-600">
                              This information will be displayed publicly so be
                              careful what you share.
                            </p>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                              <div className="col-span-full">
                                <label
                                  htmlFor="photo"
                                  className="block text-sm/6 font-bold text-gray-900"
                                >
                                  Photo
                                </label>
                                <div className="mt-2 flex items-center gap-x-3">
                                  <i
                                    className="fa-solid fa-circle-user fa-2xl text-gray-300"
                                    aria-hidden="true"
                                  ></i>
                                  <button
                                    type="button"
                                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
                                  >
                                    Change
                                  </button>
                                </div>
                              </div>
                              <div className="col-span-full">
                                <label
                                  htmlFor="cover-photo"
                                  className="block text-sm/6 font-bold text-gray-900"
                                >
                                  Cover photo
                                </label>
                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                  <div className="text-center">
                                    <i
                                      aria-hidden="true"
                                      className="fa-solid fa-user mx-auto size-12 text-gray-300"
                                    ></i>
                                    <div className="mt-4 flex text-sm/6 text-gray-600">
                                      <label
                                        htmlFor="file-upload"
                                        className="relative cursor-pointer rounded-md bg-white font-semibold text-gray-600 focus-within:ring-2 focus-within:ring-gray-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-gray-500"
                                      >
                                        <span>Upload a file</span>
                                        <input
                                          id="file-upload"
                                          name="file-upload"
                                          type="file"
                                          className="sr-only"
                                        />
                                      </label>
                                      <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs/5 text-gray-600">
                                      PNG, JPG, GIF up to 10MB
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base/7 font-semibold text-gray-900">
                              Personal Information
                            </h2>
                            <p className="mt-1 text-sm/6 text-gray-600">
                              Use a permanent address where you can receive
                              mail.
                            </p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                              <div className="sm:col-span-3">
                                <label
                                  htmlFor="first-name"
                                  className="block text-sm/6 font-medium text-gray-900"
                                >
                                  First name
                                </label>
                                <div className="mt-2">
                                  <input
                                    id="first-name"
                                    name="first-name"
                                    type="text"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-900 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6 border-2 border-gray-300"
                                  />
                                </div>
                              </div>

                              <div className="sm:col-span-3">
                                <label
                                  htmlFor="last-name"
                                  className="block text-sm/6 font-medium text-gray-900"
                                >
                                  Last name
                                </label>
                                <div className="mt-2">
                                  <input
                                    id="last-name"
                                    name="last-name"
                                    type="text"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6 border-2 border-gray-300"
                                  />
                                </div>
                              </div>

                              <div className="sm:col-span-4">
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
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6 border-2 border-gray-300"
                                  />
                                </div>
                              </div>

                              <div className="sm:col-span-3">
                                <label
                                  htmlFor="country"
                                  className="block text-sm/6 font-medium text-gray-900"
                                >
                                  Country
                                </label>
                                <div className="mt-2 grid grid-cols-1">
                                  <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6 border-2 border-gray-300"
                                  >
                                    <option>United States</option>
                                    <option>India</option>
                                    <option>Mexico</option>
                                  </select>
                                  <i
                                    aria-hidden="true"
                                    className="fa-solid fa-chevron-down pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4 "
                                  ></i>
                                </div>
                              </div>

                              <div className="col-span-full">
                                <label
                                  htmlFor="street-address"
                                  className="block text-sm/6 font-medium text-gray-900"
                                >
                                  Street address
                                </label>
                                <div className="mt-2">
                                  <input
                                    id="street-address"
                                    name="street-address"
                                    type="text"
                                    autoComplete="street-address"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6 border-2 border-gray-300"
                                  />
                                </div>
                              </div>

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
                                    autoComplete="address-level2"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6 border-2 border-gray-300"
                                  />
                                </div>
                              </div>

                              <div className="sm:col-span-2">
                                <label
                                  htmlFor="region"
                                  className="block text-sm/6 font-medium text-gray-900"
                                >
                                  State / Province
                                </label>
                                <div className="mt-2">
                                  <input
                                    id="region"
                                    name="region"
                                    type="text"
                                    autoComplete="address-level1"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6 border-2 border-gray-300"
                                  />
                                </div>
                              </div>
                              <div className="sm:col-span-2">
                                <label
                                  htmlFor="postal-code"
                                  className="block text-sm/6 font-medium text-gray-900"
                                >
                                  ZIP / Postal code
                                </label>
                                <div className="mt-2">
                                  <input
                                    id="postal-code"
                                    name="postal-code"
                                    type="text"
                                    autoComplete="postal-code"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6 border-2 border-gray-300"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 flex items-center justify-center max-w-full overflow-hidden">
                          <button
                            type="submit"
                            className="rounded-md w-full bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                          >
                            Save
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
