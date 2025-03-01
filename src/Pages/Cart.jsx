import { useState } from "react";
// import { toast } from "react-hot-toast";
import swal from "sweetalert2";
import { Link , useNavigate} from "react-router-dom";
const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$32.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
];

export default function Cart() {
  const navigate = useNavigate();
  // Offers
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [offercode, setOfferCode] = useState("");
  const [offer, setoffers] = useState([
    {
      id: 1,
      code: "SAVE50",
      discount: 50,
    },
    {
      id: 2,
      code: "SAVE100",
      discount: 100,
    },
    {
      id: 3,
      code: "SAVE500",
      discount: 500,
    },
    {
      id: 4,
      code: "SAVE1000",
      discount: 1000,
    },
  ]);

  const handleAddoffer = () => {
    if(offercode.trim()){
      if(offercode == "SAVE200"){
        setOfferCode("SAVE200");
        swal.fire("Success", "Coupon Applied", "success");
      }
      else{
        swal.fire("Error", "Code Invalid.....!", "error");
      }
    }
  }
  const placeOrder = () => {
    navigate("/checkout");
  }
  return (
    <>

      <div className="h-screen my-5 py-5 bg-white">
        <div className="grid grid-cols-12 gap-4 p-4">
          {/* product Details */}
          <div className="col-span-6 p-4">
            <div className="p-5">
              <div className="flex justify-between text-right mb-3">
                <u>
                  <h2 className="text-2xl font-bold text-gray-950">
                    Product Details
                  </h2>
                </u>
                <div className="text-right mb-3">
                  <button
                    type="button"
                    className="font-medium p-1 rounded-xl bg-red-600 text-white hover:text-gray-700"
                  >
                    Remove All
                  </button>
                </div>
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
                            <button className="mx-3 text-white bg-gray-900 rounded-xl p-2 hover:bg-gray-400">
                              -
                            </button>
                            <p className="text-gray-900 text-xl mt-2">
                              Qty: {product.quantity}
                            </p>
                            <button className="mx-3 text-white bg-gray-900 rounded-xl p-2 hover:bg-gray-400">
                              +
                            </button>
                          </div>
                          <div className="flex">
                            <button
                              type="button"
                              className="font-medium text-red-600 hover:text-gray-600"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
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
              <button
                onClick={openModal}
                type="button"
                className="font-medium p-1 rounded-xl bg-gray-900 text-white hover:text-gray-600"
              >
                Add Offer
              </button>
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
              <div className="my-4">
                <button onClick={placeOrder} className="text-white bg-gray-900 hover:text-gray-600 p-2 w-full rounded-xl">
                  Place Order
                </button>
              </div>
            </div>
          </div>
          {/* space */}
          <div className="col-span-1 p-4"></div>

          {/* Modal */}
          <>
            {isModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-lg shadow-lg w-1/3 p-6 overflow-auto ">
                  <h2>Offers</h2>
                  <div className="mt-4">
                    <div className="flex items-center gap-4">
                      <input value={offercode} onChange={(e)=>setOfferCode(e.target.value)}
                        type="text"
                        className="flex-grow px-4 py-2 border rounded"
                        placeholder="Enter offer code here...."
                      />
                      <button onClick={handleAddoffer} className="p-4 py-2 text-white bg-gray-900 rounded hover:bg-gray-600">
                        Add
                      </button>
                    </div>
                  </div>
                  <h2>Recent Offers</h2>
                  <hr></hr>
                  <table className="w-full mt-4 text-left border-collapse">
                    <thead>
                      <tr className="text-gray-900 border-b">
                        <td className="p-2">Sr.No</td>
                        <td className="p-2">Offer</td>
                        <td className="p-2">Discount</td>
                        <td className="p-2">Action</td>
                      </tr>
                    </thead>
                    <tbody>
                      {offer.map((offer, index) => (
                        <tr key={index} className="border-b hover:bg-gray-100">
                          <td className="p-2">{index + 1}</td>
                          <td className="p-2">{offer.code}</td>
                          <td className="p-2">{offer.discount}</td>
                          <td className="p-2">
                            <button className="px-3 py-1 text-white bg-gray-900">
                              Apply
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="flex justify-end mt-4">
                    <button
                      onClick={closeModal}
                      className="px-4 py-2 text-white rounded bg-red-600 hover:bg-gray-600"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        </div>
      </div>
    </>
  );
}

