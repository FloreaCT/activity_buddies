import React from "react";
import Sidebar from "./Messages/Sidebar";
import Chat from "./Messages/Chat";

const HomeMessages = () => {
  return (
    <div className="flex overflow-hidden rounded-md bg-blue-300 h-full align-center justify-center">
      <div className="flex h-[93vh] border-2 w-full h-[100%]">
        <Sidebar /> <Chat />
      </div>
    </div>
  );
};

export default HomeMessages;

// import React from "react";
// import { css } from "@emotion/css";
// import { GrStatusGoodSmall } from "react-icons/gr";

// const styles = {
//   container: css`
//     display: flex;
//     height: 100vh;
//   `,
//   left: css`
//     width: 23%;
//     background-color: #ccc;
//     margin-right: 0px;
//     border-right: 1px solid grey;
//     border-bottom-left-radius: 6px;
//     border-top-left-radius: 6px;
//   `,
//   right: css`
//     flex: 1;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     background-color: #eee;
//   `,
//   topRight: css`
//     height: 10%;
//     background-color: #999;
//     border-bottom: 2px solid grey;
//   `,
//   bottomRight: css`
//     flex: 1;
//     background-color: #bbb;
//   `,
//   topDiv: css`
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//   `,
// };

// const Messages = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.left}>
//         <div className="relative m-5 border">
//           <input
//             type="search"
//             id="search-dropdown"
//             className="block rounded-lg p-2.5 w-full text-sm text-gray-900 bg-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
//             placeholder="Search buddies..."
//             required
//           />
//           <button
//             type="submit"
//             className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           >
//             <svg
//               aria-hidden="true"
//               className="w-5 h-5"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//               ></path>
//             </svg>
//           </button>
//         </div>
//         <div
//           id="buddy-container"
//           className="flex items-center border-2 my-2 mx-4"
//         >
//           <img
//             src="../public/img/profile-picture.jpg"
//             alt="icon"
//             className="m-2 w-24 h-24 rounded-[50px]"
//           />

//           <div className="flex flex-col">
//             <div className="font-medium ml-2">Constantin Florea</div>
//             <div>
//               <GrStatusGoodSmall
//                 style={{ color: "green" }}
//                 className="inline-block w-2 h-2 m-2"
//               />
//               <div className="inline-block ">Online!</div>
//             </div>
//           </div>
//         </div>{" "}
//         <div
//           id="buddy-container"
//           className="flex items-center border-2 my-2 mx-4"
//         >
//           <img
//             src="../public/img/profile-picture.jpg"
//             alt="icon"
//             className="m-2 w-24 h-24 rounded-[50px]"
//           />

//           <div className="flex flex-col">
//             <div className="font-medium ml-2">Constantin Florea</div>
//             <div>
//               <GrStatusGoodSmall
//                 style={{ color: "green" }}
//                 className="inline-block w-2 h-2 m-2"
//               />
//               <div className="inline-block ">Online!</div>
//             </div>
//           </div>
//         </div>{" "}
//         <div
//           id="buddy-container"
//           className="flex items-center border-2 my-2 mx-4"
//         >
//           <img
//             src="../public/img/profile-picture.jpg"
//             alt="icon"
//             className="m-2 w-24 h-24 rounded-[50px]"
//           />

//           <div className="flex flex-col">
//             <div className="font-medium ml-2">Constantin Florea</div>
//             <div>
//               <GrStatusGoodSmall
//                 style={{ color: "green" }}
//                 className="inline-block w-2 h-2 m-2"
//               />
//               <div className="inline-block ">Online!</div>
//             </div>
//           </div>
//         </div>{" "}
//         <div
//           id="buddy-container"
//           className="flex items-center border-2 my-2 mx-4"
//         >
//           <img
//             src="../public/img/profile-picture.jpg"
//             alt="icon"
//             className="m-2 w-24 h-24 rounded-[50px]"
//           />

//           <div className="flex flex-col">
//             <div className="font-medium ml-2">Constantin Florea</div>
//             <div>
//               <GrStatusGoodSmall
//                 style={{ color: "green" }}
//                 className="inline-block w-2 h-2 m-2"
//               />
//               <div className="inline-block ">Online!</div>
//             </div>
//           </div>
//         </div>{" "}
//         <div
//           id="buddy-container"
//           className="flex items-center border-2 my-2 mx-4"
//         >
//           <img
//             src="../public/img/profile-picture.jpg"
//             alt="icon"
//             className="m-2 w-24 h-24 rounded-[50px]"
//           />

//           <div className="flex flex-col">
//             <div className="font-medium ml-2">Constantin Florea</div>
//             <div>
//               <GrStatusGoodSmall
//                 style={{ color: "green" }}
//                 className="inline-block w-2 h-2 m-2"
//               />
//               <div className="inline-block ">Online!</div>
//             </div>
//           </div>
//         </div>{" "}
//         <div
//           id="buddy-container"
//           className="flex items-center border-2 my-2 mx-4"
//         >
//           <img
//             src="../public/img/profile-picture.jpg"
//             alt="icon"
//             className="m-2 w-24 h-24 rounded-[50px]"
//           />

//           <div className="flex flex-col">
//             <div className="font-medium ml-2">Constantin Florea</div>
//             <div>
//               <GrStatusGoodSmall
//                 style={{ color: "green" }}
//                 className="inline-block w-2 h-2 m-2"
//               />
//               <div className="inline-block ">Online!</div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className={styles.right}>
//         <div className={styles.topRight}>
//           <div className={styles.topDiv}>
//             <div id="buddy-container" className="flex items-center mx-2 my-2">
//               <img
//                 src="../public/img/profile-picture.jpg"
//                 alt="icon"
//                 className="m-2 w-24 h-24 rounded-[50px]"
//               />

//               <div className="flex flex-col">
//                 <div className="font-medium ml-2">Constantin Florea</div>
//                 <div>
//                   <GrStatusGoodSmall
//                     style={{ color: "green" }}
//                     className="inline-block w-2 h-2 m-2"
//                   />
//                   <div className="inline-block ">Online!</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className={styles.bottomRight}>
//           <div className="flex items-center mx-2 my-2">
//             <img
//               src="../public/img/profile-picture.jpg"
//               alt="icon"
//               className="m-2 w-16 h-16 rounded-[50px]"
//             />
//             <span>10:30 AM, Today</span>
//           </div>
//           <div className="border-2 m-2 mr-[25%] p-2">
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
//             est, modi dolorum recusandae excepturi non, delectus temporibus rem
//             hic culpa, vitae exercitationem neque aliquam tempora tenetur?
//             Officia placeat odit eaque!
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Messages;
