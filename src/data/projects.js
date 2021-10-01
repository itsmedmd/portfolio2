const projectsData = [
  {
    title: "Mars Rover Photos",
    description:
      "A website where you can view the latest images from Mars taken by NASA rovers. This website uses Server-Side Rendering with Next.js to serve pages for infinitely scrolling masonry gallery, with data from NASA's \"Mars Rover Photos\" API that's periodically fetched for new data that is then stored in Amazon DynamoDB in order to achieve the most efficiency while rendering image gallery pages.",
    img: "mars-rover-photos.jpg",
    url: "https://mars-rover-photos-itsmedmd.vercel.app",
    features: [
      "Server-Side Rendering of gallery pages with Next.js",
      "Incremental Static Regeneration of main pages to periodically fetch new data",
      "Data storage and retrieval powered by Amazon DynamoDB",
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
  {
    title: "Japanese Musicians",
    description:
      "A website showcasing a few music artists and bands from Japan. With this project I mainly focused on design and reusability.",
    img: "japanese-musicians.jpg",
    url: "preview",
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
    title: "Movie search system",
    description:
      "Movie search system website where you can search for movies and read information about them.",
    img: "movie-database.jpg",
    url: "preview",
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
    title: "Photography portfolio",
    description: "A sample photography and videography portfolio website.",
    img: "photography-portfolio.jpg",
    url: "preview",
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
  {
    title: "Zyzz Bodybuilding",
    description:
      "Азиз Сергеевич Шавершян or more commonly known as Zyzz was a bodybuilder that inspired millions, including me. This project is my tribute to his life.",
    img: "zyzz-bodybuilding.jpg",
    url: "preview",
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
];

module.exports = projectsData;
