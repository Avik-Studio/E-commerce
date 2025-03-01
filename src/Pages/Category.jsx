import { Link } from "react-router-dom";
import collection1 from "../assets/Images/collection1.jpg";
import collection2 from "../assets/Images/collection2.jpg";
import collection3 from "../assets/Images/gaming3.jpg";
import collection4 from "../assets/Images/kids1.jpg";
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
export default function Category() {
  return (
    <>
      {/*Section 1*/}
      <div className="my-5 py-5">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="pb-4 mb-4 text-center text-3xl font-bold tracking-tight text-gray-900">
            Our Categories
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative border border-gray-900 rounded-xl"
              >
                <Link to={`/product/${products.name}`}>
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
      <div className="my-5 py-5"></div>
    </>
  );
}
