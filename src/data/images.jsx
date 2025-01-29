// import "../img/*";const images = import.meta.glob('../img/*.{png,jpg,jpeg,gif,svg}', { eager: true });

// const imageArray = Object.keys(images).map((key, index) => {
//   const name = key.split('/').pop().split('.')[0];
//   return {
//     id: index,
//     name: name.charAt(0).toUpperCase() + name.slice(1),
//     src: images[key].default,
//   };
// });

// export default imageArray;