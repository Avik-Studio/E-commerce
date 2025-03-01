import Swal from "sweetalert2";

window.swal = {
  success: (message) =>
    Swal.fire({
      title: "Success",
      text: message,
      icon: "success",
      confirmButtonText: "ok",
    }),
  error: (message) =>
    Swal.fire({
      title: "Error.!",
      text: message,
      icon: "error",
      confirmButtonText: "ok",
    }),
  close: () => Swal.close(),
};

//toastfy
// import { toast } from "react-toastify";

// const toastOptions = {
//   position: "top-right",
//   autoClose: 5000,
//   hideProgressBar: false,
//   newestOnTop: false,
//   closeOnClick: false,
//   rtl: false,
//   pauseOnFocusLoss: false,
//   draggable: true,
//   pauseOnHover: true,
//   theme: "light",
//   transition: "Bounce",
// };

// window.toast = {
//   success: (massage) => toast.success(massage, toastOptions),
//   error: (massage) => toast.error(massage, toastOptions),
// };

// import { toast } from "react-hot-toast";

// const toastOptions = {
//   duration: 4000,
//   position: "top-right",
//   style: {
//     background: "gray",
//     color: "white",
//     borderRadius: "10px",
//     padding: "10px",
//   },
// };
// window.toast = {
//   success: (massage) => toast.success(massage, toastOptions),
//   error: (massage) => toast.error(massage, toastOptions),
// };
