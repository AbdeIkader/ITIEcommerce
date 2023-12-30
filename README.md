# E-Commerce Platform

## Overview

This is the Final Project for react by ITI Organization for students in summer training.
This project is a full-stack e-commerce application built with React, featuring user authentication, product listings, and interactive user interfaces. Styled with Bootstrap and powered by a mock backend via `dummyjson.com`, it offers a realistic user experience for an online storefront.

## Features

- User authentication system with login and registration
- Product browsing with detailed views
- User profile information retrieval
- Contact form for inquiries
- About page with developer information
- Responsive navbar for easy navigation

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm (Node Package Manager)
- Git version control system

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/AbdeIkader/React-Final-Project-ITI.git
```

2. Navigate to the project directory:

```bash
cd React-Final-Project-ITI
```

3. Install the required npm packages:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

Your app should now be running on [http://localhost:3000](http://localhost:3000).

## Usage

Navigate to the different routes in the application to access its features:

- `/`: Home route redirecting to the Login page.
- `/products`: Browse all products.
- `/products/:productId`: View details for a specific product.
- `/register`: Sign up for a new user account.
- `/login`: Log in to an existing account.
- `/user-details`: View user profile details.
- `/contact`: Access the contact form.
- `/about`: Read about the developer and the project.

## Structure

The project is structured as follows:

```
src/
├── Components/
│   ├── Aboutus/
│   ├── Auth/
│   ├── ContactUs/
│   ├── Navbar/
│   ├── ProductDetails/
│   ├── Products/
│   └── UserDetails/
├── services/
│   ├── auth.service.js
│   └── product.service.js
├── utils/
│   └── interceptor.js
├── App.css
├── App.js
├── index.css
├── index.js
└── ...
```

## Contributing

Please read [CONTRIBUTING.md](https://github.com/AbdeIkader/React-Final-Project-ITI/blob/main/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

- **Abdelkader Jr** - *Initial work* - [AbdelkaderJr](https://github.com/AbdelkaderJr)

See also the list of [contributors](https://github.com/AbdeIkader/React-Final-Project-ITI/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Thanks to `dummyjson.com` for providing a mock backend API.
- Shoutout to all the contributors and maintainers.

