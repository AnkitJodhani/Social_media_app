// const isDevelopmentMode = process.env.MODE === "DEV";

// const clientURL = isDevelopmentMode
//         ? ["http://http://18.234.168.105:5000","http://ankitjodhani.club"]
//         : ["http://ankitjodhani.club", "https://ankitjodhani.club","http://18.234.168.105:5000"];

// module.exports = { clientURL };


const isDevelopmentMode = process.env.MODE === "DEV";

const clientURL = isDevelopmentMode
	? "http://localhost:3000"
	: ["http://localhost:3000"];

module.exports = { clientURL };


