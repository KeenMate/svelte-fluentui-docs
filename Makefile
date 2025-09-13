.PHONY: help dev build clean install preview check

# Default target
help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  %-10s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

install: ## Install dependencies
	pnpm install

setup: install ## Setup project (alias for install)
	@echo "Project setup complete!"

dev: ## Start development server
	pnpm dev

build: ## Build for production
	pnpm build

preview: build ## Preview production build locally
	pnpm preview

clean: ## Clean build artifacts
	rm -rf dist/
	rm -rf .svelte-kit/

check: ## Run TypeScript checks
	pnpm exec svelte-check --tsconfig ./tsconfig.json

format: ## Format code (if prettier is available)
	@if pnpm list prettier > /dev/null 2>&1; then \
		pnpm exec prettier --write .; \
	else \
		echo "Prettier not installed, skipping format"; \
	fi

lint: ## Lint code (if eslint is available)
	@if pnpm list eslint > /dev/null 2>&1; then \
		pnpm exec eslint .; \
	else \
		echo "ESLint not installed, skipping lint"; \
	fi

docker-build: ## Build Docker image
	docker build --progress plain -t registry.km8.es/svelte-fluentui-docs:production .

docker-run: docker-build ## Build and run Docker container
	docker run -p 8080:80 --name svelte-fluentui-docs svelte-fluentui-docs:production

docker-stop: ## Stop and remove Docker container
	docker stop svelte-fluentui-docs || true
	docker rm svelte-fluentui-docs || true