# Multi-stage Docker build for Sveltepress static site

# Build stage
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

RUN apk update && apk upgrade
RUN apk add wget git

# Copy package files
COPY package.json ./
COPY pnpm-lock.yaml* ./

RUN wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.shrc" SHELL="$(which sh)" sh -

# Install pnpm
# RUN npm install -g pnpm@9.15.0

# Install dependencies
RUN source $HOME/.shrc && pnpm install --frozen-lockfile

# Copy source code
COPY svelte.config.js tsconfig.json vite.config.ts ./
COPY static ./static
COPY src ./src

# COPY . .

# Build the static site
RUN source $HOME/.shrc && pnpm build

# Production stage - serve static files with nginx
FROM nginx:alpine AS production

# Copy built static files to nginx html directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx configuration (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Create a simple nginx configuration for SPA
RUN echo 'server { \
    listen 80; \
    server_name _; \
    root /usr/share/nginx/html; \
    index index.html; \
    \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
    \
    # Cache static assets \
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ { \
        expires 1y; \
        add_header Cache-Control "public, immutable"; \
    } \
    \
    # Security headers \
    add_header X-Frame-Options "SAMEORIGIN" always; \
    add_header X-Content-Type-Options "nosniff" always; \
    add_header Referrer-Policy "no-referrer-when-downgrade" always; \
    add_header Content-Security-Policy "default-src '\''self'\'' https:; script-src '\''self'\'' https://stats.keenmate.services '\''unsafe-inline'\''; style-src '\''self'\'' '\''unsafe-inline'\'';" always; \
}' > /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]