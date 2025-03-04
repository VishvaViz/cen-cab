import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { lazy, Suspense } from "react";
import MainLayout from "../layouts/MainLayout";
const Home = lazy(() => import("../page/Home"));
const About = lazy(() => import("../page/About"));
const Contact = lazy(() => import("../page/Contact"));
const OurService = lazy(() => import("../page/OurServices"));
const BookNow = lazy(() => import("../page/BookNow"));

// const PageLoading = () => {
//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <motion.div
//         initial={{ x: "-100vw" }}
//         animate={{ x: "100vw" }}
//         transition={{
//           repeat: Infinity,
//           repeatType: "loop",
//           duration: 2,
//           ease: "easeInOut",
//         }}
//       >
//         <svg
//           height="105px"
//           width="105px"
//           version="1.1"
//           id="_x32_"
//           xmlns="http://www.w3.org/2000/svg"
//           xmlns:xlink="http://www.w3.org/1999/xlink"
//           viewBox="0 0 512 512"
//           xml:space="preserve"
//           fill="#000000"
//         >
//           <g id="SVGRepo_bgCarrier" stroke-width="0" />

//           <g
//             id="SVGRepo_tracerCarrier"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           />

//           <g id="SVGRepo_iconCarrier">
//             {" "}
//             fill="currentColor"{" "}
//             <g>
//               {" "}
//               <path
//                 class="st0"
//                 d="M104.64,288.071c-11.377-0.016-21.804,4.651-29.236,12.106c-7.455,7.44-12.122,17.867-12.114,29.244 c-0.008,11.361,4.658,21.795,12.114,29.228c7.432,7.463,17.859,12.121,29.236,12.114c11.369,0.007,21.803-4.652,29.236-12.114 c7.455-7.433,12.114-17.867,12.114-29.228c0-11.378-4.658-21.804-12.114-29.244C126.444,292.721,116.009,288.055,104.64,288.071z M115.827,340.615c-2.926,2.896-6.756,4.621-11.187,4.636c-4.446-0.015-8.262-1.74-11.187-4.636 c-2.911-2.933-4.644-6.763-4.644-11.194c0.008-4.439,1.732-8.268,4.644-11.195c2.925-2.91,6.741-4.636,11.187-4.644 c4.43,0.008,8.261,1.733,11.187,4.644c2.91,2.926,4.636,6.756,4.643,11.195C120.463,333.851,118.738,337.674,115.827,340.615z"
//               />{" "}
//               <path
//                 class="st0"
//                 d="M381.422,288.071c-11.377-0.016-21.804,4.651-29.236,12.106c-7.455,7.44-12.121,17.867-12.114,29.244 c-0.008,11.361,4.658,21.795,12.114,29.228c7.433,7.463,17.859,12.121,29.236,12.114c11.369,0.007,21.803-4.652,29.236-12.114 c7.455-7.433,12.114-17.867,12.114-29.228c0-11.378-4.658-21.804-12.114-29.244C403.225,292.721,392.791,288.055,381.422,288.071z M392.608,340.615c-2.926,2.896-6.756,4.621-11.187,4.636c-4.446-0.015-8.261-1.74-11.186-4.636 c-2.912-2.933-4.644-6.763-4.644-11.194c0.008-4.439,1.732-8.268,4.644-11.195c2.925-2.91,6.741-4.636,11.186-4.644 c4.43,0.008,8.261,1.733,11.187,4.644c2.911,2.926,4.636,6.756,4.643,11.195C397.244,333.851,395.519,337.674,392.608,340.615z"
//               />{" "}
//               <path
//                 class="st0"
//                 d="M501.877,313.712h-69.834v30.384h69.834c5.586,0,10.123-4.537,10.123-10.131v-10.122 C512,318.249,507.463,313.712,501.877,313.712z"
//               />{" "}
//               <path
//                 class="st0"
//                 d="M0,323.843v10.122c0,5.594,4.537,10.131,10.122,10.131h45.576v-30.384H10.122 C4.537,313.712,0,318.249,0,323.843z"
//               />{" "}
//               <path
//                 class="st0"
//                 d="M502.09,304.98c0-6.687-1.558-13.276-4.545-19.258l-12.935-25.862c-6.004-12.008-17.266-20.519-30.452-23.035 l-74.036-14.097c-7.334-1.406-13.945-5.358-18.642-11.171l-35.316-43.683c-13.627-16.849-34.138-26.637-55.805-26.637H101.456 c-25.695,0-49.436,13.748-62.234,36.03l-12.577,21.917c-12.486,21.743-19.052,46.374-19.052,71.453v35.992h50.971 c2.477-5.008,5.707-9.644,9.689-13.618c9.545-9.568,22.799-15.071,36.35-15.071c13.633,0,26.888,5.503,36.448,15.086 c9.575,9.546,15.07,22.83,15.062,36.402c0,0.837-0.083,1.672-0.121,2.516h174.086c-0.046-0.844-0.129-1.687-0.129-2.531 c-0.008-13.558,5.487-26.835,15.086-36.402c9.544-9.568,22.799-15.071,36.349-15.071c13.634,0,26.888,5.503,36.448,15.086 c3.974,3.968,7.197,8.596,9.667,13.604h74.591V304.98z M122.355,235.739H58.221c-11.385,0-12.654-5.898-9.28-15.397l12.236-30.468 c8.26-14.386,23.696-23.323,40.278-23.323h20.899V235.739z M210.504,264.436h-25.247c-3.048,0-5.517-2.645-5.517-5.897 c0-3.269,2.47-5.913,5.517-5.913h25.247c3.047,0,5.517,2.644,5.517,5.913C216.022,261.791,213.552,264.436,210.504,264.436z M230.362,235.739h-92.815v-69.188h92.815V235.739z M336.082,235.739h-90.528v-69.188h24.806c14.097,0,27.26,6.285,36.121,17.236 l35.308,43.683C344.274,230.541,344.274,235.739,336.082,235.739z M466.592,270.341h-33.264c-3.587,0-6.62-2.653-7.098-6.194 l-1.619-11.97c-0.244-1.847,0.38-3.709,1.702-5.024c1.322-1.315,3.184-1.938,5.031-1.679l17.464,2.424 c0,0,11.97,2.523,19.646,14.029C474.062,270.341,466.592,270.341,466.592,270.341z"
//               />{" "}
//             </g>{" "}
//           </g>
//         </svg>
//       </motion.div>
//     </div>
//   );
// };

export default function AppRouter() {
  return (
    <Router>
      <MainLayout>
        <AnimatePresence mode="wait">
          <Suspense
            fallback={
                  <div className="w-full h-screen flex items-center justify-center ">
                  <span>Loading</span>
                  <div className="w-[50px] h-[50px">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                        <circle
                          fill="#0A0104"
                          stroke="#0A0104"
                          stroke-width="2"
                          r="15"
                          cx="40"
                          cy="100"
                        >
                          <animate
                            attributeName="opacity"
                            calcMode="spline"
                            dur="1.6"
                            values="1;0;1;"
                            keySplines=".5 0 .5 1;.5 0 .5 1"
                            repeatCount="indefinite"
                            begin="-.4"
                          ></animate>
                        </circle>
                        <circle
                          fill="#0A0104"
                          stroke="#0A0104"
                          stroke-width="2"
                          r="15"
                          cx="100"
                          cy="100"
                        >
                          <animate
                            attributeName="opacity"
                            calcMode="spline"
                            dur="1.6"
                            values="1;0;1;"
                            keySplines=".5 0 .5 1;.5 0 .5 1"
                            repeatCount="indefinite"
                            begin="-.2"
                          ></animate>
                        </circle>
                        <circle
                          fill="#0A0104"
                          stroke="#0A0104"
                          stroke-width="2"
                          r="15"
                          cx="160"
                          cy="100"
                        >
                          <animate
                            attributeName="opacity"
                            calcMode="spline"
                            dur="1.6"
                            values="1;0;1;"
                            keySplines=".5 0 .5 1;.5 0 .5 1"
                            repeatCount="indefinite"
                            begin="0"
                          ></animate>
                        </circle>
                      </svg>
                    </span>
                  </div>
                </div>
            //   <PageLoading />
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/our-service" element={<OurService />} />
              <Route path="/book-now" element={<BookNow />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </MainLayout>
    </Router>
  );
}
