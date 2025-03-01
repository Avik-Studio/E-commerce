"use client";

import { useState } from "react";
//import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from "@headlessui/react";
import { useParams } from "react-router-dom";
const product = {
  id: "1",
  name: "Basic Tee 6-Pack",
  price: "1300",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetail() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  // review
  const [reviews, setreviews] = useState([
    {
      id: 1,
      name: "Shamishta Pal",
      date: "April 15, 2024",
      title: "Nice product",
      content:
        "The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming limited release.",
    },
    {
      id: 1,
      name: "Avik Modak",
      date: "April 15, 2024",
      title: "Nice product",
      content:
        "The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming limited release.",
    },
  ]);

  //routes
  const { id } = useParams();
  // if (id !== product.id) {
  //   return <div>Product not fonund</div>;
  // }
  return (
    <>
      {id === product.id ? (
        <div>
          {/* Section 1 */}
          <div className="bg-white">
            <div className="pt-6">
              {/* Image gallery */}
              <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                <img
                  alt={product.images[0].alt}
                  src={product.images[0].src}
                  className="hidden size-full rounded-lg object-cover lg:block"
                />
                <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                  <img
                    alt={product.images[1].alt}
                    src={product.images[1].src}
                    className="aspect-[3/2] w-full rounded-lg object-cover"
                  />
                  <img
                    alt={product.images[2].alt}
                    src={product.images[2].src}
                    className="aspect-[3/2] w-full rounded-lg object-cover"
                  />
                </div>
                <img
                  alt={product.images[3].alt}
                  src={product.images[3].src}
                  className="aspect-[4/5] size-full object-cover sm:rounded-lg lg:aspect-auto"
                />
              </div>

              {/* Product info */}
              <div className="mx-auto max-w-2xl px-4 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16">
                <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    {" "}
                    {product.name}
                  </h1>
                </div>

                {/* Options */}
                <div className="mt-4 lg:row-span-3 lg:mt-0">
                  <h2 className="sr-only">Product information</h2>
                  <p className="text-3xl tracking-tight text-gray-900">
                    <i className="fa-solid fa-rupee-sign">. </i>
                    {product.price}
                  </p>

                  <form className="mt-10">
                    {/* Colors */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">
                        Color
                      </h3>

                      <fieldset aria-label="Choose a color" className="mt-4">
                        <RadioGroup
                          value={selectedColor}
                          onChange={setSelectedColor}
                          className="flex items-center gap-x-3"
                        >
                          {product.colors.map((color) => (
                            <Radio
                              key={color.name}
                              value={color}
                              aria-label={color.name}
                              className={classNames(
                                color.selectedClass,
                                "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1"
                              )}
                            >
                              <span
                                aria-hidden="true"
                                className={classNames(
                                  color.class,
                                  "size-8 rounded-full border border-black/10"
                                )}
                              />
                            </Radio>
                          ))}
                        </RadioGroup>
                      </fieldset>
                    </div>

                    {/* Sizes */}
                    <div className="mt-10">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium text-gray-900">
                          Size
                        </h3>
                        <a
                          href="#"
                          className="text-sm font-medium text-gray-900 hover:text-gray-900"
                        >
                          Size guide
                        </a>
                      </div>

                      <fieldset aria-label="Choose a size" className="mt-4">
                        <RadioGroup
                          value={selectedSize}
                          onChange={setSelectedSize}
                          className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                        >
                          {product.sizes.map((size) => (
                            <Radio
                              key={size.name}
                              value={size}
                              disabled={!size.inStock}
                              className={classNames(
                                size.inStock
                                  ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                  : "cursor-not-allowed bg-gray-50 text-gray-200",
                                "group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-gray-900 sm:flex-1 sm:py-6"
                              )}
                            >
                              <span>{size.name}</span>
                              {size.inStock ? (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-gray-900"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                                  <svg
                                    stroke="currentColor"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    className="absolute inset-0 size-full stroke-2 text-gray-200"
                                  >
                                    <line
                                      x1={0}
                                      x2={100}
                                      y1={100}
                                      y2={0}
                                      vectorEffect="non-scaling-stroke"
                                    />
                                  </svg>
                                </span>
                              )}
                            </Radio>
                          ))}
                        </RadioGroup>
                      </fieldset>
                    </div>

                    <button
                      type="submit"
                      className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-900 px-8 py-3 text-base font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                    >
                      Add to Cart
                    </button>
                  </form>
                </div>

                <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                  {/* Description and details */}
                  <div>
                    <h3 className="sr-only">Description</h3>

                    <div className="space-y-6">
                      <p className="text-base text-gray-900">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h3 className="text-sm font-medium text-gray-900">
                      Highlights
                    </h3>

                    <div className="mt-4">
                      <ul
                        role="list"
                        className="list-disc space-y-2 pl-4 text-sm"
                      >
                        {product.highlights.map((highlight) => (
                          <li key={highlight} className="text-gray-400">
                            <span className="text-gray-600">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h2 className="text-sm font-medium text-gray-900">
                      Details
                    </h2>

                    <div className="mt-4 space-y-6">
                      <p className="text-sm text-gray-600">{product.details}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Section 2 (review Section)*/}
          <div className="mb-5 pb-5">
            <div className="w-full mx-auto p-5">
              <h2 className="text-2xl font-bold mb-5">Add Review</h2>
              <form className="bg-white shadow-md rounded-lg p-6 mb-6">
                <div className="mb-4">
                  <label className="block text-gray-900 font-medium mb-2">
                    Review Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter a review Title"
                    className="w-full border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring focus:border-blue-950"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-900 font-medium mb-2">
                    Your Review
                  </label>
                  <textarea
                    type="text"
                    placeholder="Write your review"
                    className="w-full border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring focus:border-blue-950"
                  ></textarea>
                </div>
                <button className="bg-gray-900 text-white rounded-lg px-4 py-2 hover:bg-gray-600">
                  Submit review
                </button>
              </form>
              <h2 className="text-2xl font-bold mb-5">Recent Review</h2>
              <>
                {reviews.map((reviews, index) => (
                  <div
                    key="index"
                    className="bg-white shadow-md rounded-lg p-6 mb-6"
                  >
                    <h3 className="text-xl font bold mb-1">{reviews.name}</h3>
                    <p className="text-sm text-gray-500">{reviews.date}</p>
                    <h4 className="font-semibold text-lg mb-1">
                      {reviews.title}
                    </h4>
                    <p className="text-gray-800">{reviews.content}</p>
                  </div>
                ))}
              </>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <main className="h-screen grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
              <p className="text-base font-semibold text-indigo-600">404</p>
              <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                Product not found
              </h1>
              <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                Sorry, we couldn’t find the page you’re looking for.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Go back home
                </a>
                <a href="/contact" className="text-sm font-semibold text-gray-900">
                  Contact support <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </main>
        </div>
      )}
    </>
  );
}
