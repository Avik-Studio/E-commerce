import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel, Input } from "@headlessui/react";
// import pic from "../assets/Images/profile.jpg";
// import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
// import { ChevronDownIcon } from "@heroicons/react/16/solid";
const subCategories = [
  { name: "Profile", href: "/profile" },
  { name: "Orders", href: "/order" },
  { name: "Address", href: "/address" },
  { name: "LogOut", href: "/SignIn" },
];

export default function Address() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  //Address
  const [currentAddress, setCurrentAddress] = useState("view");

  const addAddress = () => setCurrentAddress("add");
  const editAddress = () => setCurrentAddress("edit");
  const viewAddress = () => setCurrentAddress("view");

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

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:col-span-3">
                <div className="mb-5 pb-5">
                  {currentAddress === "view" && (
                    <>
                      <div className="my-2 text-right">
                        <button
                          onClick={addAddress}
                          className="bg-gray-900 text-white hover:bg-gray-600 p-2 rounded-xl"
                        >
                          Add Address
                        </button>
                      </div>

                      <div className="my-2 grid grid-cols-1 md:grid-cols-1 gap-8 p-5 border-2 border-gray- shadow-md shadow-gray-900">
                        <div className="md:col-span-3">
                          <div className="flex justify-between">
                            <h1 className="text-4xl font-bold text-gray-900">
                              Misti Modak.
                            </h1>
                            <button
                              onClick={editAddress}
                              className=" border-2 border-black hover:bg-black hover:text-white p-1 rounded-xl"
                            >
                              Edit Address
                            </button>
                          </div>
                          <h3 className="text-xl mt-2 font-bold text-gray-900">
                            P/H : 8617346696.
                          </h3>
                          <h3 className="text-xl mb-2 font-bold text-gray-900">
                            Email: shamishtapal2004@gmail.com
                          </h3>
                          <p className="text-gray-900 ">
                            <span className="font-bold">
                              Default Address :{" "}
                            </span>
                            c/o reba pal , Gangsara Road , 287 house n/o.
                          </p>
                          <p>Gangsara , Majhergram , Nadia ,West-Bengal</p>
                          <p>PinCode: 741201.</p>
                        </div>
                      </div>
                      <div className="my-5 grid grid-cols-1 md:grid-cols-4 gap-8 border-2 items-center">
                        <div className="p-5 md:col-span-2 border-2 border-gray-200 shadow-lg">
                          <div className="flex justify-between">
                            <h1 className="text-4xl font-bold text-gray-900">
                              Avik Modak.
                            </h1>
                            <button
                              // onClick={}
                              className=" border-2 border-black hover:bg-black hover:text-white p-1 rounded-xl"
                            >
                              Set Default
                            </button>
                          </div>
                          <h3 className="text-xl mt-2 font-bold text-gray-900">
                            P/H : 8617346696.
                          </h3>
                          <h3 className="text-xl mb-2 font-bold text-gray-900">
                            Email: shamishtapal2004@gmail.com
                          </h3>
                          <p className="text-gray-900 ">
                            <span className="font-bold">
                              Default Address :{" "}
                            </span>
                            c/o reba pal , Gangsara Road , 287 house n/o.
                          </p>
                          <p>Gangsara , Majhergram , Nadia ,West-Bengal</p>
                          <p>PinCode: 741201.</p>
                        </div>

                        <div className="p-5 md:col-span-2 border-2 border-gray-200 shadow-lg">
                          <div className="flex justify-between">
                            <h1 className="text-4xl font-bold text-gray-900">
                              Archana Modak.
                            </h1>
                            <button
                              // onClick={}
                              className=" border-2 border-black hover:bg-black hover:text-white p-1 rounded-xl"
                            >
                              Set Default
                            </button>
                          </div>
                          <h3 className="text-xl mt-2 font-bold text-gray-900">
                            P/H : 8617346696.
                          </h3>
                          <h3 className="text-xl mb-2 font-bold text-gray-900">
                            Email: shamishtapal2004@gmail.com
                          </h3>
                          <p className="text-gray-900 ">
                            <span className="font-bold">
                              Default Address :{" "}
                            </span>
                            c/o reba pal , Gangsara Road , 287 house n/o.
                          </p>
                          <p>Gangsara , Majhergram , Nadia ,West-Bengal</p>
                          <p>PinCode: 741201.</p>
                        </div>
                      </div>
                    </>
                  )}
                  {/* Add address */}
                  {currentAddress === "add" && (
                    <>
                      <div className="my-2 text-right">
                        <button
                          onClick={viewAddress}
                          className="bg-gray-900 text-white hover:bg-gray-600 p-2 rounded-xl"
                        >
                          View Address
                        </button>
                      </div>
                      <div className="">
                        <form>
                          <div className="space-y-12">
                            <div className="border-b border-gray-900/10 pb-12">
                              <h2 className="text-base/7 font-semibold text-gray-900">
                                Add New Address
                              </h2>
                              <p className="mt-1 text-sm/6 text-gray-600">
                                Use a permanent address where you can receive
                                product.
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
                                    <input
                                      id="country"
                                      name="country"
                                      type="text"
                                      autoComplete="country-name"
                                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6 border-2 border-gray-300"
                                    ></input>
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

                                <div className="sm:col-span-3 ">
                                  <div className="flex">
                                    <input
                                      value="yes"
                                      type="radio"
                                      name="defaultAdress"
                                    ></input>
                                    <label
                                      htmlFor="defaultAdress"
                                      className="mx-3 block text-sm/6 font-medium text-gray-900"
                                    >
                                      Set as Default Address
                                    </label>
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
                    </>
                  )}
                  {/* Edit Address */}
                  {currentAddress == "edit" && (
                    <>
                      <div className="my-2 text-right">
                        <button
                          onClick={viewAddress}
                          className="bg-gray-900 text-white hover:bg-gray-600 p-2 rounded-xl"
                        >
                          View Address
                        </button>
                      </div>
                      <div className="">
                        <form>
                          <div className="space-y-12">
                            <div className="border-b border-gray-900/10 pb-12">
                              <h2 className="text-base/7 font-semibold text-gray-900">
                                Edit Address
                              </h2>
                              <p className="mt-1 text-sm/6 text-gray-600">
                                Use a permanent address where you can receive
                                product.
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
                                    <input
                                      id="country"
                                      name="country"
                                      type="text"
                                      autoComplete="country-name"
                                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6 border-2 border-gray-300"
                                    ></input>
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
                                <div className="sm:col-span-3 ">
                                  <div className="flex">
                                    <input
                                      value="yes"
                                      type="radio"
                                      name="defaultAdress"
                                    ></input>
                                    <label
                                      htmlFor="defaultAdress"
                                      className="mx-3 block text-sm/6 font-medium text-gray-900"
                                    >
                                      Set as Default Address
                                    </label>
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
                    </>
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
