FROM nginx:alpine

# Custom nginx config
RUN printf 'server {\n\
  listen 80;\n\
  root /usr/share/nginx/html;\n\
  index index.html;\n\
  gzip on;\n\
  gzip_types text/plain text/css application/javascript text/html;\n\
  add_header X-Frame-Options "SAMEORIGIN";\n\
  add_header X-Content-Type-Options "nosniff";\n\
  add_header Referrer-Policy "strict-origin-when-cross-origin";\n\
  location / {\n\
    try_files $uri $uri/ /index.html;\n\
    add_header Cache-Control "no-cache";\n\
  }\n\
  location ~* \\.(jpg|jpeg|png|gif|ico|svg|woff2)$ {\n\
    expires 30d;\n\
    add_header Cache-Control "public, immutable";\n\
  }\n\
}\n' > /etc/nginx/conf.d/default.conf

COPY index.html /usr/share/nginx/html/index.html
COPY images/ /usr/share/nginx/html/images/

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s \
  CMD wget -qO- http://localhost/ | grep -q "World Advanced Technology" || exit 1
