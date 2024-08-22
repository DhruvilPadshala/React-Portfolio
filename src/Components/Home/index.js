// import React, { useEffect } from "react";
// import { Container, Box, Typography, Grid } from "@mui/material";
// import profilePic from "../../assets/Home/Dhruvil.jpg";
// import AlternatingText from "./index2";
// import SocialsSection from "./index3";

// const Home = () => {
//   useEffect(() => {
//     document.title = 'Dhruvil';
//   }, []);
//   return (
//     <section id="home">
//       <Container
//         className="rn-slider-area"
//         sx={{
//           p: 4,
//           backgroundColor: "#f0f2f5",
//           mt: { xs: 10, md: 20 },
//           height: { xs: "auto", md: "80vh" },
//         }}
//       >
//         <Grid container spacing={6} alignItems="center">
//           <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
//             <Box
//               className="text"
//               sx={{ textAlign: { xs: "left", md: "left" } }}
//             >
//               <Typography
//                 variant="body1"
//                 sx={{
//                   fontSize: { xs: "1rem", sm: "1rem", md: "1.125rem" },
//                   textAlign: { xs: "center", md: "left" },
//                   mt: { xs: -5, md: 0 },
//                 }}
//               >
//                 WELCOME TO MY WORLD
//               </Typography>
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: { xs: "left", md: "flex-start" },
//                   p: {
//                     xs: 0,
//                     md: 2,
//                   },
//                   mt: { xs: 2, md: 0 },
//                   borderRadius: "10px",
//                 }}
//               >
//                 <Typography
//                   variant="h4"
//                   sx={{
//                     fontSize: { xs: "1.60rem", sm: "2rem", md: "3rem" },
//                     fontWeight: "bold",
//                     textAlign: { xs: "left", md: "left" },
//                     color: "black",
//                   }}
//                 >
//                   Hi, I'm
//                   <Typography
//                     variant="h4"
//                     component="span"
//                     sx={{
//                       color: "blue",
//                       ml: 1,
//                       fontWeight: "bold",
//                       fontSize: { xs: "1.85rem", sm: "2rem", md: "3rem" },
//                     }}
//                   >
//                     Dhruvil
//                   </Typography>
//                 </Typography>
//                 <Typography
//                   variant="h4"
//                   sx={{
//                     fontSize: { xs: "1.85rem", sm: "2rem", md: "3rem" },
//                     fontWeight: "bold",
//                     textAlign: { xs: "left", md: "left" },
//                     color: "blue",
//                     mt: 1,
//                   }}
//                 >
//                   a
//                   <Typography
//                     variant="h4"
//                     component="span"
//                     sx={{
//                       color: "black",
//                       fontSize: { xs: "1.85rem", sm: "2rem", md: "3rem" },
//                       ml: 1,
//                     }}
//                   >
//                     <AlternatingText />
//                   </Typography>
//                 </Typography>
//               </Box>
//               <Typography
//                 variant="body1"
//                 className="description"
//                 sx={{
//                   mt: 3,
//                   fontSize: { xs: "1rem", sm: "1rem", md: "1.125rem" },
//                   textAlign: { xs: "left", md: "left" },
//                   lineHeight: { xs: "1.5", sm: "1.75", md: "2" },
//                 }}
//               >
//                 B.Tech student in Computer Engineering, passionate about web and
//                 app development. I specialize in React,Next and React Native,
//                 building user-friendly applications that turn ideas into
//                 impactful digital experiences.
//               </Typography>
//             </Box>
//             <SocialsSection />
//           </Grid>
//           <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
//             <Box className="thumbnail">
//               <img
//                 src={profilePic}
//                 alt="Profile"
//                 style={{ width: "100%", borderRadius: "20px" }}
//               />
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </section>
//   );
// };

// export default Home;
