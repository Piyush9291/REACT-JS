"use client"
// ✅ Day 1 – Question 1: Greeting Component
// Problem:
// Create a functional React component called Greeting that takes a prop called name and displays:
// 📌 "Hello, [name]!"

// import React from 'react';
// import Greeting from './Greeting'; // 👈 This line is correct

// function Page() {
//   return (
//     <div>
//       <Greeting name="Piyush" />
//     </div>
//   );
// }

// export default Page;



// ✅ Day 1 – Question 2: Counter Component
// Problem:
// Create a Counter component with:

// A number shown on the screen (starting at 0)

// Two buttons: Increment and Decrement

// Clicking the buttons should update the number using useState


// import React , {useState} from 'react'; 

// const page = () => {

//     const [count, setcount] = useState(0)
//   return (
//     <div>

//     <h1>Count: {count}</h1>

//     {/* Step 4: Increment and Decrement buttons */}
//     <button onClick={() => setcount(count + 1)}>Increment</button>
//     <button onClick={() => setcount(count - 1)}>Decrement</button>
//     <button onClick={() => setcount(0)}>Reset</button>
//   </div>
//   )
// }

// export default page













// import React, { useState } from 'react';

// function page() {
//   const [show, setShow] = useState(true);

//   return (
//     <div>
//       {show && <h1>Welcome, Piyush!</h1>}
//       <button onClick={() =>setShow(!show)}>
//         {show ? 'hide' : 'unhide'}
//       </button>
//     </div>
//   );
// }

// export default page;

// import React, { useState } from 'react';

// function page() {
//   const [text, setText] = useState(''); // Step 1: State to hold input value

//   return (
//     <div>
//       <input 
//         type="text" 
//         placeholder="Type something..." 
//         onChange={(e) =>setText(e.target.value)}
//       />
//       <p>You typed: {text}</p>
//     </div>
//   );
// }

// export default page;

































// UseState Hookes
// import Link from "next/link";
// import { data } from '@remix-run/router';
// import { useState, React } from 'react'

// const page = () => {

//     const [first, setfirst] = useState(0)
//   return (
//     <div>
//         <h1>Counter{first}</h1>
//         <button onClick={() => setfirst(first + 1)}>Incraese</button>
//         <button onClick={() => setfirst(first - 1)}>Decrease</button>
//         <button onClick={() => setfirst(0)}>Reset</button>
//     </div>
//   )
// }

// export default page



// import React, { useEffect, useState } from 'react';
// const api = "https://jsonplaceholder.typicode.com/posts";

// const Page = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(api);
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.log("API is not working", error);
//       }
//     };

//     fetchData(); // ✅ Call the function inside useEffect
//   }, []);

//   return (
//     <div>
//       <h1>Posts</h1>
//       {data.map(post => (
//         <div key={post.id}>
//           <h3>{post.title}</h3> {/* Better styling with <h3> */}
//           <p>{post.body}</p> {/* Use <p> for paragraphs */}
//           <hr /> {/* Add a line for better separation */}
//         </div>
//       ))}
//     </div>
//   );
// };
// export default Page;

// import React, { useState, useEffect } from "react";

// const API_URL = "https://jsonplaceholder.typicode.com/posts";

// const Page = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(API_URL);
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.error("API is not working", error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Posts</h1>
//       {data.map((post) => (
//         <div key={post.id}>
//           <h2>{post.title}</h2>
//           <p>{post.body}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Page;





