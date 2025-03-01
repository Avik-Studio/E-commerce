// import footerpic from "../assets/Images/footerpic.jpg";
import { Link }  from "react-router-dom";
const navigation1 = [
  { name: "Home", href: "/", current: false },
  { name: "Category", href: "/Category", current: false },
  { name: "Product", href: "/ProductFilter", current: false },
  { name: "About", href: "/About", current: false },
  { name: "Contact", href: "/Contact", current: false },
];
const navigation2 = [
  { name: "Profile", href: "/profile", current: false },
  { name: "Orders", href: "/order", current: false },
  { name: "Address", href: "/address", current: false },
  { name: "Signup", href: "/signup", current: false },
  { name: "Log Out", href: "/signIn", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Footer() {
  return (
    <div className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-4 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8">
          <div className="text-white">
            <ul className="space-y-2">
              <i className="fa-sharp-duotone fa-solid fa-crown text-xl">
                <b>ROYAL</b>
              </i>
              <div className="text-center">
                <h1 className="text-left">
                  <b>
                    <u>Adress</u>
                  </b>{" "}
                  : <p>Ranaghat , Nadia , Pin-741201</p>
                </h1>
                <h1 className="text-left">
                  <b>
                    <u>Email</u>
                  </b>
                  : <p>avikmodak83@gmail.com</p>
                </h1>
                <h1 className="text-left">
                  <b>
                    <u>Phone</u>
                  </b>
                  : <p>1234567890</p>
                </h1>
              </div>
              <div className="flex-jusify-center md:start space-x-4 mt:4">
                <i className="fa-brands fa-youtube fa-2xl my-2 py-2"></i>
                <i className="fa-brands fa-instagram fa-2xl my-2 py-2"></i>
                <i className="fa-brands fa-github fa-2xl my-2 py-2"></i>
                <i className="fa-brands fa-linkedin fa-2xl my-2 py-2"></i>
              </div>
            </ul>
          </div>
          <div className="text-center">
            <ul className="space-y-2">
              <li className="text-xl text-white">
                <b>Quick Link</b>
              </li>
              {navigation1.map((item) => (
                <li
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "rounded-md px-3 py-2 text-sm font-medium"
                  )}
                >
                  <Link to={item.href}> {item.name} </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center">
            <ul className="space-y-2">
              <li className="text-xl text-white">
                <b>Quick Link</b>
              </li>
              {navigation2.map((item) => (
                <li
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "rounded-md px-3 py-2 text-sm font-medium"
                  )}
                >
                  <Link to={item.href}> {item.name} </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center">
            <div className="space-y-2">
              {/* <img src={footerpic} alt="footerpic" className="w-40 h-40 rounded-full" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
