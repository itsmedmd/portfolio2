const projectsData = [
  {
    title: "Satellite Tracker",
    description:
      "Track positions and orbits of over 22,000 satellites orbiting the Earth in a 3D geospatial viewer powered by Cesium.",
    img: "satellites.jpg",
    url: "https://satellites-itsmedmd.vercel.app",
    github_repo: "https://github.com/itsmedmd/satellite-tracker",
    features: [
      "Satellite Propagation with TLE Data: Utilizing the satellite.js library by Shashwat Kandadai for accurate satellite tracking",
      "3D Geospatial Viewer: Enjoy an interactive, in-browser 3D geospatial viewer powered by Cesium ion",
      "Conditional Satellite Orbit Display: Choose when to display satellite orbits based on your preferences",
      "Satellite Tracking: Follow satellites from their own vantage points in real-time",
      "Time Control: Seamlessly navigate backward and forward in simulation time for a dynamic experience",
      "Real-time Rendering: Experience smooth, real-time rendering of over 22,000 objects at up to 60fps",
      "Up-to-Date Satellite Catalog: Access an always-current satellite catalog with data on launches from the past month"
    ],
    tools: [
      {
        text: "React",
        img: "react",
      },
      {
        text: "Next.js",
        img: "nextjs",
      },
      {
        text: "redux",
        img: "redux",
      },
      {
        text: "Cesium",
        img: "javascript",
      },
      {
        text: "satellite.js",
        img: "javascript",
      },
      {
        text: "SCSS",
        img: "sass",
      },
      {
        text: "HTML",
        img: "html",
      },
    ],
  },
  // {
  //   title: "OpenSea NFT Explorer",
  //   description:
  //     "A website where you can explore NFT's from OpenSea - the world's first and largest NFT marketplace. This website uses OpenSea's API to fetch and display information about assets (NFTs) sorted by various filters in an on-demand fetched list of presumably never ending supply of new data (unless you're willing to scroll through millions of assets). The website also provides the ability to view details about each asset in a dynamically rendered asset page with detailed information fetched, you guessed it - on demand!",
  //   img: "opensea-nft-explorer.jpg",
  //   url: "https://opensea-nft-explorer.vercel.app",
  //   github_repo: "https://github.com/itsmedmd/opensea-nft-explorer",
  //   features: [
  //     "Automatic asset list data prefetching",
  //     "Efficient image and video loading that uses various fallback URLs based on predefined priority",
  //     "Dynamic individual asset page rendering that uses a combination of general and specifically fetched detailed data",
  //     "Asset randomisation",
  //     "Custom image and video lazyloading",
  //   ],
  //   tools: [
  //     {
  //       text: "Vue",
  //       img: "vue",
  //     },
  //     {
  //       text: "TypeScript",
  //       img: "typescript",
  //     },
  //     {
  //       text: "Amazon API Gateway",
  //       img: "aws",
  //     },
  //     {
  //       text: "AWS Lambda",
  //       img: "aws",
  //     },
  //     {
  //       text: "SASS(SCSS)",
  //       img: "sass",
  //     },
  //     {
  //       text: "HTML",
  //       img: "html",
  //     },
  //   ],
  // },
  {
    title: "Mars Rover Photos",
    description:
      "Explore Mars with the most recent images from NASA's rovers!",
    img: "mars-rover-photos.jpg",
    url: "https://mars-rover-photos-itsmedmd.vercel.app",
    github_repo: "https://github.com/itsmedmd/mars-rover-photos",
    features: [
      "Server-Side Gallery Rendering: Utilizing Next.js for server-side rendering of gallery pages",
      "Incremental Static Regeneration: Periodically fetching fresh data for main pages",
      "DynamoDB-Powered Data Management: Seamless storage and retrieval of data using Amazon DynamoDB",
      "Efficient Image Delivery: Optimizing image delivery with Cloudinary for a smoother experience",
      "Responsive Masonry Gallery: Enjoy a responsive, infinitely scrolling masonry gallery.",
    ],
    tools: [
      {
        text: "React",
        img: "react",
      },
      {
        text: "Next.js",
        img: "nextjs",
      },
      {
        text: "Redux",
        img: "redux",
      },
      {
        text: "Amazon DynamoDB",
        img: "aws",
      },
      {
        text: "SCSS",
        img: "sass",
      },
      {
        text: "HTML",
        img: "html",
      },
    ],
  },
];

/*
{
    title: "Movie search system",
    description:
      "Movie search system website where you can search for movies and read information about them.",
    img: "movie-database.jpg",
    url: "preview",
    github_repo: "https://github.com/itsmedmd/movie-database",
    features: [
      "Data fetching from themoviedb.org",
      "Debounce function for fetching data",
      "Simple and intuitive design",
      "Fast and efficient code",
      "Movie sorting by popularity",
    ],
    tools: [
      {
        text: "React",
        img: "react",
      },
      {
        text: "Gatsby",
        img: "gatsby",
      },
      {
        text: "SASS(SCSS)",
        img: "sass",
      },
      {
        text: "HTML",
        img: "html",
      },
    ],
  },
  {
    title: "Zyzz Bodybuilding",
    description:
      "Азиз Сергеевич Шавершян or more commonly known as Zyzz was a bodybuilder that inspired millions, including me. This project is my tribute to his life.",
    img: "zyzz-bodybuilding.jpg",
    url: "preview",
    github_repo: "https://github.com/itsmedmd/bodybuilding",
    features: [
      "Image lazyloading",
      "Animations with Intersection Observer API",
      "Real pictures of the one and only God",
    ],
    tools: [
      {
        text: "React",
        img: "react",
      },
      {
        text: "Gatsby",
        img: "gatsby",
      },
      {
        text: "SASS(SCSS)",
        img: "sass",
      },
      {
        text: "HTML",
        img: "html",
      },
    ],
  },
  {
    title: "Japanese Musicians",
    description:
      "A website showcasing a few music artists and bands from Japan. With this project I mainly focused on design and reusability.",
    img: "japanese-musicians.jpg",
    url: "preview",
    github_repo: "https://github.com/itsmedmd/music",
    tools: [
      {
        text: "React",
        img: "react",
      },
      {
        text: "Gatsby",
        img: "gatsby",
      },
      {
        text: "SASS(SCSS)",
        img: "sass",
      },
      {
        text: "HTML",
        img: "html",
      },
    ],
  },
  {
    title: "Photography portfolio",
    description: "A sample photography and videography portfolio website.",
    img: "photography-portfolio.jpg",
    url: "preview",
    github_repo: "https://github.com/itsmedmd/photography-portfolio",
    features: [
      "Image and video lazyloading",
      "Content management (compressing, deleting, updating) with Amazon S3 and Lambda",
      "Automatic image deletion from Amazon S3",
      "Automatic 'videos' page HTML code generation",
      "Automatic HTML code generation of individual image galleries' pages and 'all galleries' page",
      "Email contact form that uses Amazon API Gateway, SES, Lambda",
    ],
    tools: [
      {
        text: "Amazon API Gateway",
        img: "aws",
      },
      {
        text: "Amazon Simple Email Service",
        img: "aws",
      },
      {
        text: "AWS Lambda with NodeJS",
        img: "aws",
      },
      {
        text: "NodeJS image processing module 'sharp'",
        img: "javascript",
      },
      {
        text: "SASS(SCSS)",
        img: "sass",
      },
      {
        text: "HTML",
        img: "html",
      },
    ],
  },
*/

module.exports = projectsData;
