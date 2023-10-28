const projectsData = [
  {
    title: "Satellite Tracker",
    description:
      "A website where you can track real-time positions of almost 20,000 satellites orbiting the Earth in a 3D geospatial viewer. This project uses publicly available satellite TLE (Two-Line Element) data sets provided by CelesTrak, from which it's possible to calculate the precise position of an object at any given moment in time - be it the present, the future or the past.",
    img: "satellites.jpg",
    url: "https://satellites-itsmedmd.vercel.app",
    github_repo: "https://github.com/itsmedmd/satellite-tracker",
    features: [
      "Satellite propagation via TLE data sets using satellite.js library by Shashwat Kandadai",
      "Interactive in-browser 3D geospatial viewer rendering powered by Cesium ion",
      "Time flow controls - ability to go back or forwards in time to see positions of objects",
      "Almost 20,000 objects rendered in real-time with up to 60fps",
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
        text: "Cesium",
        img: "javascript",
      },
      {
        text: "satellite.js",
        img: "javascript",
      },
      {
        text: "CSS",
        img: "css",
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
      "A website where you can view the latest images from Mars taken by NASA rovers. This website uses Server-Side Rendering with Next.js to serve pages for infinitely scrolling masonry gallery, with data from NASA's \"Mars Rover Photos\" API that's periodically fetched for new data that is then stored in Amazon DynamoDB in order to achieve the most efficiency while rendering image gallery pages.",
    img: "mars-rover-photos.jpg",
    url: "https://mars-rover-photos-itsmedmd.vercel.app",
    github_repo: "https://github.com/itsmedmd/mars-rover-photos",
    features: [
      "Server-Side Rendering of gallery pages with Next.js",
      "Incremental Static Regeneration of main pages to periodically fetch new data",
      "Data storage and retrieval powered by Amazon DynamoDB",
      "Image delivery and optimization using Cloudinary",
      "Responsive, infinitely scrolling masonry gallery",
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
        text: "DynamoDB",
        img: "aws",
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
