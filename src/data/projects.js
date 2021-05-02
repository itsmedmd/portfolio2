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
            "Email contact form"
        ],
        tools: [
            "Amazon Web Services(AWS)",
            "NodeJS with AWS Lambda",
            "NodeJS image processing module 'sharp'",
            "JavaScript",
            "SCSS",
            "HTML"
        ]
    },
    {
        title: "Movie database",
        description: "Movie database website where you can search for movies and read information about them.",
        img: "movie-database.jpg",
        features: [
            "Data fetching from themoviedb.org",
            "Debounce function for fetching data",
            "Simple and intuitive design",
            "Fast and efficient code",
            "Movie sorting by popularity"
        ],
        tools: [
            "ReactJS with GatsbyJS",
            "SCSS",
            "HTML"
        ]
    },
    {
        title: "Zyzz Bodybuilding",
        description: "Азиз Сергеевич Шавершян or more commonly known as Zyzz was a bodybuilder that inspired millions, including me. This project is my tribute to his life.",
        img: "zyzz-bodybuilding.jpg",
        features: [
            "Real pictures of the one and only God",
            "Image lazyloading",
            "Animations with Intersection Observer API"
        ],
        tools: [
            "ReactJS with GatsbyJS",
            "SCSS",
            "HTML"
        ]
    },
    {
        title: "Japanese Musicians",
        description: "A website showcasing a few music artists and bands from Japan. With this project I mainly focused on design.",
        img: "japanese-musicians.jpg",
        tools: [
            "ReactJS with GatsbyJS",
            "SCSS",
            "HTML"
        ]
    }
];

module.exports = projectsData;
