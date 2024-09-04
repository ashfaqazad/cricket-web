import React from 'react';

const NavLinks = () => {

  const Links = [
    {

    name:"About",
    url:"/any"

  },
  {
    name:"Services",
    url:"/any",
  },
  {
    name:"Contact"
  }

]
  return (
    <>
  {Links.map ((link,index)=>
  <div key={index} className='px-3 text-left md:cursor-pointer'>
    <h1 className='py-7'>{link.name}</h1>

  </div>
  )}
    </>
  );
};

export default NavLinks;










// const NavLinks = () => {
//   const links = [
//     {
//       name: "About",
//       url: "/men" // Example URL for Men
//     },
//     {
//       name: "Services",
//       url: "/women" // Example URL for Women
//     },
//     {
//       name: "Contact",
//       url: "/kids" // Example URL for Kids
//     }
//   ];

//   return (
//     <>
//       {links.map((link, index) => (
//         <div key={index}>
//           <div>
//             <h1>{link.name}</h1>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default NavLinks;
