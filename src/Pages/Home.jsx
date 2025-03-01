import { useState } from "react";
import { Link } from "react-router-dom";
import banner from "../assets/Images/finalbannerpic.png";
import collection1 from "../assets/Images/collection1.jpg";
import collection2 from "../assets/Images/collection2.jpg";
import collection3 from "../assets/Images/gaming3.jpg";
import collection4 from "../assets/Images/kids1.jpg";
import banner1 from "../assets/Images/banner1.jpg";
import banner2 from "../assets/Images/banner2.jpg";
import banner3 from "../assets/Images/banner3.jpg";
import banner4 from "../assets/Images/banner4.jpg";
const products = [
  {
    id: 1,
    name: "Woman Collention",
    href: "#",
    imageSrc: collection1,
  },
  {
    id: 2,
    name: "Summer Outfit",
    href: "#",
    imageSrc: collection2,
  },
  {
    id: 3,
    name: "Gaming Accesorices",
    href: "#",
    imageSrc: collection3,
  },
  {
    id: 4,
    name: "Kids Store",
    href: "#",
    imageSrc: collection4,
  },
];
export default function Home() {
  const images = [banner1, banner2, banner3, banner4];
  const [currentIndex, setcurrentIndex] = useState(0);

  const goToPrevBtn = () => {
    setcurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const goToNextBtn = () => {
    setcurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  return (
    <div className="bg-white mb-5 pb-5">
      {/* Section 1 */}
      <div>
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 flex lg:justify-between">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Everything you want to buy from our online store
            </h2>
            <p className="mt-6 text-pretty text-lg/8 text-gray-300">
              Online shopping is the activity of buying products and services
              over the internet using a web browser or mobile app.It means
              buyers have to go online to reach a seller's website and then
              select the product they want to purchase.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start pb-5">
              <Link to="/ProductFilter" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Shop Now
              </Link>
              <a href="/about" className="text-sm/6 font-semibold text-white">
                Know more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="md:py-2 sm:hidden"></div>
          <div className="hidden md:block lg:block">
            <img className="max-w-2xl" src={banner} alt="banner" />
          </div>
        </div>
      </div>
      {/*Section 2*/}
      <div className="my-5 py-5">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="pb-4 mb-4 text-center text-3xl font-bold tracking-tight text-gray-900">
            New Collection
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative border border-gray-900 rounded-xl"
              >
                <Link to={`/product/${product.name}`}>
                  <img
                    alt="pic"
                    src={product.imageSrc}
                    className="aspect-square w-full bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80 rounded-xl"
                  />
                  <div className="mt-4 px-2 pb-3">
                    <h1 className="text-l text-center font-bold text-black">
                      {product.name}
                    </h1>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Section 3 */}
      <div className="mb-5 pb-5">
        <div className="relative overflow-hidden bg-white">
          <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Summer styles are finally here
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                  This year, our new summer collection will shelter you from the
                  harsh elements of a world that doesn't care if you live or
                  die.
                </p>
              </div>
              <div>
                <div className="mt-10">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                  >
                    <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          alt=""
                          src="https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                  <a
                    href="/category"
                    className="inline-block rounded-md border border-transparent bg-gray-900 px-8 py-3 text-center font-medium text-white hover:bg-gray-600"
                  >
                    View Collections
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 4 */}
      <div className="mb-5 pb-5">
        <div className="relative w-full max-w-2xl mx-auto">
          <div className="overflow-hidden rounded-lg">
            <img src={images[currentIndex]} alt="banner" className="w-full" />
          </div>
          {/* previous Button */}
          <button
            onClick={goToPrevBtn}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-full hover:bg-gray-600 focus:outline-none"
          >
            <i class="fa-solid fa-chevron-left"></i>
          </button>

          {/* next Button */}
          <button
            onClick={goToNextBtn}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-full hover:bg-gray-600 focus:outline-none"
          >
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
