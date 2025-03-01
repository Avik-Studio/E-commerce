import { useState } from "react";
import product1 from "../assets/Images/pro-1.jpg";
import product2 from "../assets/Images/pro-2.jpg";
import product3 from "../assets/Images/pro-3.jpg";
import product4 from "../assets/Images/pro-4.jpg";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Radio,
  RadioGroup,
} from "@headlessui/react";

const orders = [
  {
    id: 1,
    name: "Canon Camera",
    discription: "This is a section for professional photographers",
    category: "Gadget",
    imageSrc: product1,
    price: "4,680",
    discount: "10%",
    originalPrice: 5200,
    color: "black",
    sizes: "XL",
  },
];

// const product = {
//   name: "Basic Tee 6-Pack ",
//   price: "$192",
//   rating: 3.9,
//   reviewCount: 117,
//   href: "#",
//   imageSrc:
//     "https://tailwindui.com/plus/img/ecommerce-images/product-quick-preview-02-detail.jpg",
//   imageAlt: "Two each of gray, white, and black shirts arranged on table.",
//   colors: [
//     { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
//     { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
//     { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
//   ],
//   sizes: [
//     { name: "XXS", inStock: true },
//     { name: "XS", inStock: true },
//     { name: "S", inStock: true },
//     { name: "M", inStock: true },
//     { name: "L", inStock: true },
//     { name: "XL", inStock: true },
//     { name: "XXL", inStock: true },
//     { name: "XXXL", inStock: false },
//   ],
// };

const subCategories = [
  { name: "Profile", href: "/profile" },
  { name: "Orders", href: "/order" },
  { name: "Address", href: "/address" },
  { name: "LogOut", href: "/SignIn" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Order() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [open, setOpen] = useState(false);
  // const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  // const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    <>
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
                  <ul
                    role="list"
                    className="px-2 py-3 font-medium text-gray-900"
                  >
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
                {/* Our Product */}
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:col-span-3">
                  <div className="">
                    <div className="p-5 mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                      {orders.map((product) => (
                        <div
                          key={product.id}
                          className="group relative p-3 border border-gray-900 rounded-lg"
                        >
                          <img
                            alt="product"
                            src={product.imageSrc}
                            className="aspect-square w-full bg-gray-200 object-cover lg:aspect-auto lg:h-80"
                          />
                          <div className="my-2">
                            <div className="flex justify-between">
                              <h3 className="text-l font-bold text-gray-900">
                                {product.name}
                              </h3>
                              <p className="p-1 text-l text-white border-b bg-yellow-500 rounded-sm">
                                pending
                              </p>
                            </div>
                            <div className="mt-4 flex justify-between">
                              <p className="text-xl font-medium text-gray-900">
                                <i className="fa-solid fa-rupee-sign">.</i>
                                {product.price}
                              </p>
                              <button
                                onClick={() => setOpen(true)}
                                className="text-white bg-gray-900 py-2 px-3 rounded-md"
                              >
                                View In Details
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Dialog
                    open={open}
                    onClose={setOpen}
                    className="relative z-10"
                  >
                    <DialogBackdrop
                      transition
                      className="fixed inset-0 hidden bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:block"
                    />
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                      <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                        <DialogPanel
                          transition
                          className="flex w-full transform text-left text-base transition data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:my-8 md:max-w-2xl md:px-4 data-closed:md:translate-y-0 data-closed:md:scale-95 lg:max-w-4xl"
                        >
                          <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                            <button
                              type="button"
                              onClick={() => setOpen(false)}
                              className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                            >
                              <span className="sr-only">Close</span>
                              <i
                                className="fa-solid fa-xmark size-6"
                                aria-hidden="true"
                              ></i>
                            </button>
                            {/* Order display */}
                            {orders.map((product) => (
                              <div
                                key={product.id}
                                className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8"
                              >
                                <img
                                  alt=""
                                  src={product.imageSrc}
                                  className="aspect-2/3 w-full rounded-lg bg-gray-100 object-cover sm:col-span-4 lg:col-span-5"
                                />
                                <div className="sm:col-span-8 lg:col-span-7">
                                  <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                                    {product.name}
                                  </h2>

                                  <section
                                    aria-labelledby="information-heading"
                                    className="mt-2"
                                  >
                                    <h3
                                      id="information-heading"
                                      className="sr-only"
                                    >
                                      Product information
                                    </h3>
                                    <p className="">{product.discription}</p>
                                    <div className="mt-2 flex justify-start">
                                    <p className="text-2xl text-gray-900">
                                      <i className="fa-solid fa-rupee-sign">.</i>
                                      {product.price}
                                    </p>
                                    <p className="text-l text-gray-700 mx-2 mt-1">{product.discount}</p>
                                    <p className="text-l text-red-700 mt-1 line-through"><i className="fa-solid fa-rupee-sign">.</i>{product.originalPrice}</p>
                                    </div>
                                    <p className="mt-3 text-l">Status:  <span className="p-1 text-l text-white border-b bg-yellow-400 rounded-xl">pending</span></p>
                                  </section>

                                  <section
                                    aria-labelledby="options-heading"
                                    className="mt-10"
                                  >
                                    <h3
                                      id="options-heading"
                                      className="sr-only"
                                    >
                                      Product options
                                    </h3>
                                    {/* colours */}
                                    <form>
                                      {product.color && (
                                        <fieldset
                                          aria-label="Color"
                                          className="mt-3"
                                        >
                                          <legend className="text-sm font-medium text-gray-900">
                                            Color
                                          </legend>
                                          <div className="mt-2">
                                            <span
                                              className={
                                                "inline-block h-6 w-6 rounded-full border border-gray-300"
                                              }
                                              style={{
                                                backgroundColor:
                                                  product.color.toLowerCase(),
                                              }}
                                            ></span>
                                          </div>
                                        </fieldset>
                                      )}
                                      {/* size */}
                                      {product.sizes && (
                                        <fieldset
                                          aria-label="Size"
                                          className="mt-3"
                                        >
                                          <div className="text-sm font-medium text-gray-900">
                                            Size
                                          </div>
                                          <div className="mt-2">
                                            <span className="inline-block rounded-md bg-gray-200 px-3 py-1 text-sm font-medium uppercase">
                                              {product.sizes}
                                            </span>
                                          </div>
                                        </fieldset>
                                      )}
                                    </form>
                                  </section>
                                  <button
                                    onClick={() => setOpen(false)}
                                    type="submit"
                                    className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-600 px-8 py-3 text-base font-medium text-white hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-hidden"
                                  >
                                    View Product
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </DialogPanel>
                      </div>
                    </div>
                  </Dialog>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
