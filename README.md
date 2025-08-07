# Finance Website

A React-based finance website built with Create React App.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Make (optional, for using Makefile commands)

## Getting Started

1. Clone the repository:
```bash
git clone [your-repo-url]
cd finance_website
```

2. Install dependencies:
```bash
make install
# or
npm install
```

3. Start the development server:
```bash
make start
# or
npm start
```

The application will open in your default browser at `http://localhost:3000`.

## Available Commands

Using Make:
- `make install` - Install dependencies
- `make start` - Start development server
- `make build` - Create production build
- `make test` - Run tests
- `make lint` - Run linting
- `make clean` - Clean build artifacts and node_modules

Using npm directly:
- `npm start` - Start development server
- `npm test` - Run tests
- `npm run build` - Create production build
- `npm run eject` - Eject from Create React App

## Project Structure

```
finance_website/
├── public/          # Static files
├── src/             # Source files
│   ├── components/  # React components
│   ├── App.js       # Root component
│   └── index.js     # Entry point
├── Makefile         # Make commands
└── README.md        # This file
```

## Contributing

1. Create a feature branch
2. Commit your changes
3. Push to the branch
4. Create a Pull Request

## License

This project is licensed under the MIT License.