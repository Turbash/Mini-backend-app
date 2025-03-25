# Mini Authentication App

A simple authentication application built using **Node.js, Express.js, and EJS**.

## Features

- User registration & login
- Profile picture upload
- Authentication using sessions
- Secure password hashing with bcrypt
- Logout functionality

## Technologies Used

- **Node.js** - Backend runtime
- **Express.js** - Web framework
- **EJS** - Templating engine
- **bcrypt** - Password hashing
- **Multer** - File upload handling
- **Express-session** - Session management

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/mini-auth-app.git
   cd mini-auth-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add:
   ```env
   PORT=3000
   SESSION_SECRET=your_secret_key
   ```
4. Start the server:
   ```sh
   npm start
   ```
5. Open `http://localhost:3000` in your browser.

## Folder Structure
```
mini-auth-app/
│-- public/        # Static files (CSS, images)
│-- uploads/       # Uploaded profile pictures
│-- views/         # EJS templates
│-- routes/        # Express routes
│-- app.js         # Main server file
│-- package.json   # Dependencies and scripts
```

## Usage

- **Register** a new user with an email and password.
- **Login** to access your profile page.
- **Upload** a profile picture.
- **Logout** securely from the session.

## Future Enhancements

- Add OAuth (Google, GitHub authentication)
- Improve UI with Tailwind CSS
- Implement email verification

## License

This project is open-source. Feel free to contribute! 🚀

