.PHONY: install start build test lint clean

# Install dependencies
install:
	npm install

# Start development server
start:
	npm start

# Build for production
build:
	npm run build

# Run tests
test:
	npm test

# Run linting
lint:
	npm run lint

# Clean build artifacts and node_modules
clean:
	rm -rf build
	rm -rf node_modules