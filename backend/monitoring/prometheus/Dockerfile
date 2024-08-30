# monitoring/prometheus/Dockerfile

FROM prom/prometheus:v2.41.0

# Copy Prometheus configuration file
COPY prometheus.yml /etc/prometheus/prometheus.yml

# Expose Prometheus port
EXPOSE 9090

# Run Prometheus
CMD ["--config.file=/etc/prometheus/prometheus.yml"]
