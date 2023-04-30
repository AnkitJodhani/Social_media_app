const isDevelopmentMode = process.env.MODE === "DEV";

const clientURL = isDevelopmentMode
        ? ["http://3.84.89.191","http://ankitjodhani.club"]
        : ["http://ankitjodhani.club", "https://ankitjodhani.club","http://3.84.89.191"];

module.exports = { clientURL };


// const isDevelopmentMode = process.env.MODE === "DEV";

// const clientURL = isDevelopmentMode
// 	? "http://localhost"
// 	: ["http://localhost"];

// module.exports = { clientURL };


