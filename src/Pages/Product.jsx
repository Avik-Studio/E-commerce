import { useParams } from "react-router-dom";
import product1 from "../assets/Images/pro-1.jpg";
import product2 from "../assets/Images/pro-2.jpg";
import product3 from "../assets/Images/pro-3.jpg";
import product4 from "../assets/Images/pro-4.jpg";
const products = [
  {
    id: 1,
    name: "Canon Camera",
    discription: "This is a section for professional photographers",
    category: "",
    imageSrc: product1,
    price: "4,680",
    discount: "10%",
    originalPrice: 5200,
  },
  {
    id: 2,
    name: "Brusial Brush",
    discription: "High-quality makeup brush for flawless application",
    category: "",
    imageSrc: product2,
    price: "1,104",
    discount: "8%",
    originalPrice: 1200,
  },
  {
    id: 3,
    name: "MacBook",
    discription: "Let's switch to premium Something",
    category: "",
    imageSrc: product3,
    price: "1,104",
    discount: "8%",
    originalPrice: 1200,
  },
  {
    id: 4,
    name: "Eye Liner",
    discription: "Waterproof eyeliner that lasts all day",
    category: "",
    imageSrc: product4,
    price: "1,104",
    discount: "8%",
    originalPrice: 1200,
  },
];

export default function Product() {
  const { categoryName } = useParams();
  const filteredProducts = products.filter(
    (product) => product.category === categoryName
  );
  return (
    <>
      <div className="bg-white my-5 py-5">
        <div className="mx-auto max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
            Our {categoryName} Products
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative p-3 border border-gray-900"
              >
                <Link to={`/productDetail/${product.id}`}>
                  <img
                    alt="product"
                    src={product.imageSrc}
                    className="aspect-square w-full bg-gray-200 object-cover lg:aspect-auto lg:h-80"
                  />
                </Link>
                <div className="flex justify-between">
                  <h3 className="text-l font-bold text-gray-900">
                    {product.name}
                  </h3>
                  <div>
                    <i className="fa-regular fa-heart fa-xl text-gray-900"></i>
                  </div>
                </div>
                <div className="my-2">
                  <p className="mt-1 text-sm text-gray-500">
                    {product.discription}
                  </p>
                </div>
                <div className="mt-4 flex justify-between">
                  <div className="flex justify-between">
                    <p className="text-xl font-medium text-gray-900">
                      <i className="fa-solid fa-rupee-sign"></i>
                      {product.price}
                    </p>
                    <div className="flex justify-between mt-2">
                      <p className="text-sm font-medium text-gray-900 mx-1">
                        {product.discount}
                      </p>
                      <del className="text-red-500">
                        <p className="text-sm font-medium text-red-500">
                          <i class="fa-solid fa-rupee-sign"></i>
                          {product.originalPrice}
                        </p>
                      </del>
                    </div>
                  </div>
                  <div>
                    <button className="text-white bg-gray-900 py-1 px-2">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="my-5 py-5"></div>
    </>
  );
}
