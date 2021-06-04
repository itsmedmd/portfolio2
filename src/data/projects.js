const projectsData = [
  {
    title: "Photography portfolio",
    description: "A photography and videography portfolio website.",
    img: "photography-portfolio.jpg",
    features: [
      "Image and video lazyloading",
      "Automatic image compression",
      "Automatic image clean-up(deletion) from Amazon S3",
      "Automatic 'videos' page HTML code generation",
      "Automatic HTML code generation of individual image galleries' pages and 'all-galleries' page",
      "Email contact form",
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
    title: "Movie search system",
    description:
      "Movie database website where you can search for movies and read information about them.",
    img: "movie-database.jpg",
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
    title: "Japanese Musicians",
    description:
      "A website showcasing a few music artists and bands from Japan. With this project I mainly focused on design.",
    img: "japanese-musicians.jpg",
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
