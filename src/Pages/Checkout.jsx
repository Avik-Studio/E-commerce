import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "900",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "320",
    quantity: 2,
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

export default function Checkout() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePaymentMethod = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handlePayOnline = () => {
    Swal.fire("Success", "Online Order Submitted..!", "success");
  };

  const handlePayCOD = () => {
    Swal.fire("Success", "COD Order Submitted..!", "success");
  };

  const changeAddressFun = () => {
    navigate("/address");
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Address and Product Details */}
          <div className="md:col-span-7 lg:col-span-8 p-4">
            {/* Address Section */}
            <div className="mb-4 bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">Address</h2>
                <button
                  onClick={changeAddressFun}
                  className="text-white bg-gray-900 px-4 py-2 rounded-lg hover:bg-gray-700"
                >
                  Change Address
                </button>
              </div>
              <div className="mt-4 text-gray-700">
                <p className="font-bold">Misti Modak</p>
                <p>C/O Reba Pal</p>
                <p>741201 - Majhergram Puraba Simulia Gansara</p>
                <p>Nadia, West Bengal</p>
              </div>
            </div>

            {/* Product Details Section */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Product Details</h2>
              </div>
              <hr className="mb-4" />
              <ul role="list" className="divide-y divide-gray-200">
                {products.map((product) => (
                  <li key={product.id} className="flex py-6">
                    <div className="w-24 h-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        alt={product.imageAlt}
                        src={product.imageSrc}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href={product.href}>{product.name}</a>
                          </h3>
                          <p className="ml-4">₹{product.price}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-900">Qty: {product.quantity}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="md:col-span-5 lg:col-span-4 p-4">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <h3 className="text-xl font-bold">Subtotal</h3>
                  <h3 className="text-xl">₹1900</h3>
                </div>
                <div className="flex justify-between">
                  <h3 className="text-xl font-bold">Shipping estimate</h3>
                  <h3 className="text-xl">₹50</h3>
                </div>
                <div className="flex justify-between">
                  <h3 className="text-xl font-bold">GST</h3>
                  <h3 className="text-xl">₹50</h3>
                </div>
                <div className="flex justify-between">
                  <h3 className="text-xl font-bold">Coupon</h3>
                  <h3 className="text-xl text-green-400">SAVE200</h3>
                </div>
                <div className="flex justify-between">
                  <h3 className="text-xl font-bold">Discount</h3>
                  <h3 className="text-xl">-₹90</h3>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between">
                  <h3 className="text-xl font-bold">Total</h3>
                  <h3 className="text-xl">₹1910/-</h3>
                </div>
              </div>

              {/* Payment Method Section */}
              <div className="mt-6">
                <div className="space-y-4">
                  <label className="flex items-center text-xl font-bold">
                    <input
                      value="online"
                      onChange={handlePaymentMethod}
                      type="radio"
                      className="mr-2"
                      name="paymentMethod"
                    />
                    Pay Now
                  </label>
                  <label className="flex items-center text-xl font-bold">
                    <input
                      value="cod"
                      onChange={handlePaymentMethod}
                      type="radio"
                      className="mr-2"
                      name="paymentMethod"
                    />
                    Order COD
                  </label>
                </div>
              </div>

              {/* Payment Buttons */}
              <div className="mt-6">
                {paymentMethod === "online" && (
                  <button
                    onClick={handlePayOnline}
                    className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-700"
                  >
                    Pay Now
                  </button>
                )}
                {paymentMethod === "cod" && (
                  <button
                    onClick={handlePayCOD}
                    className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-700"
                  >
                    Order Now
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}