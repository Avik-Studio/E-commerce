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


  const [paymentMethod, setpaymentMethod] = useState("");
  const handlePaymentMethod = (e) => {
    setpaymentMethod(e.target.value);
  };
  const handlepayOnline = () => {
    Swal.fire("Success", "Online Order Submitted..!", "success");
  };
  const handlepayCOD = () => {
    Swal.fire("Success", "COD Order Submitted..!", "success");
  };
  const changeAddressFun = () => {
    navigate("/address");
  }
  return (
    <>
      <div className="h-screen my-5 py-5 bg-white">
        <div className="grid grid-cols-12 gap-4 p-4">
          {/* product Details */}
          <div className="col-span-6 p-4">
            <div className="mb-4 bg-white rounded-lg shadow-lg">
              <div className="flex justify-between">
                <h2 className="text-2xl text-gray-900 font-bold">Address</h2>
                <button onClick={changeAddressFun} type=" " className="text-white bg-gray-900 p-1 rounded">Change Address</button>
              </div>
              <div className="mt-4 p-2 text-gray-700">
                <p className="font-bold">Misti Modak</p>
                <p>C/O Reba Pal</p>
                <p>741201 - Majhergram Puraba Simulia Gansara</p>
                <p>Nadia , West Bengal</p>
              </div>
            </div>
            <br></br>
            <div className=" ">
              <div className="p-5">
                <div className="flex justify-between text-right mb-3">
                  <u>
                    <h2 className="text-2xl font-bold text-gray-950">
                      Product Details
                    </h2>
                  </u>
                  <div className="text-right mb-3"></div>
                </div>
                <hr></hr>
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {products.map((product) => (
                      <li key={product.id} className="flex py-6">
                        <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            alt={product.imageAlt}
                            src={product.imageSrc}
                            className="size-full object-cover"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                <a href={product.href}>{product.name}</a>
                              </h3>
                              <p className="ml-4">
                                <i className="fa-solid fa-rupee-sign"></i>{" "}
                                {product.price}
                              </p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">
                              {product.color}
                            </p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <div className="flex">
                              <p className="text-gray-900 text-l mt-2">
                                Qty: {product.quantity}
                              </p>
                            </div>
                            <div className="flex"></div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 p-4">{/* space */}</div>
          {/* Order Summary */}
          <div className="col-span-4">
            <u className="flex justify-between">
              <h2 className="text-2xl font-bold text-gray-950">
                Order Summary
              </h2>
            </u>
            <div className="py-5">
              <div className="flex justify-between">
                <h3 className="text-xl font-bold">Subtotal</h3>
                <h3 className="text-xl ">1900</h3>
              </div>
              <div className="flex justify-between">
                <h3 className="text-xl font-bold">Shipping estimate</h3>
                <h3 className="text-xl ">50</h3>
              </div>
              <div className="flex justify-between">
                <h3 className="text-xl font-bold">GST</h3>
                <h3 className="text-xl ">50</h3>
              </div>
              <div className="flex justify-between">
                <h3 className="text-xl font-bold">Coupon</h3>
                <h3 className="text-xl text-green-400">SAVE200</h3>
              </div>

              <div className="flex justify-between">
                <h3 className="text-xl font-bold">Discount</h3>
                <h3 className="text-xl ">-90</h3>
              </div>
              <br></br>
              <hr></hr>
              <div className="flex justify-between">
                <h3 className="text-xl font-bold">Total</h3>
                <h3 className="text-xl ">1910/-</h3>
              </div>
              <div className="mt-4 ">
                <div className="flex items-center space-x-4">
                  <label className="flex items-center text-xl mr-3 font-bold">
                    <input
                      value="online"
                      onChange={handlePaymentMethod}
                      type="radio"
                      className="mr-2"
                      name="paymentMethod"
                    />
                    Pay Now
                  </label>
                  <label className="flex items-center text-xl mr-3 font-bold">
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
              <div className="my-4">
                {paymentMethod === "online" && (
                  <button
                    onClick={handlepayOnline}
                    className="text-white bg-gray-900 hover:text-gray-600  p-2 w-full rounded-xl my-2"
                  >
                    Pay Now
                  </button>
                )}
                {paymentMethod === "cod" && (
                  <button
                    onClick={handlepayCOD}
                    className="text-white bg-gray-900 hover:text-gray-600 p-2 w-full rounded-xl my-2"
                  >
                    Order Now
                  </button>
                )}
              </div>
            </div>
          </div>
          {/* space */}
          <div className="col-span-1 p-4"></div>
        </div>
      </div>
    </>
  );
}
