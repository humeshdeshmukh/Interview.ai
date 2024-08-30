# monitoring/alertmanager/Dockerfile

FROM prom/alertmanager:v0.25.0

# Copy Alertmanager configuration file
COPY alertmanager.yml /etc/alertmanager/alertmanager.yml

# Expose Alertmanager port
EXPOSE 9093

# Run Alertmanager
CMD ["--config.file=/etc/alertmanager/alertmanager.yml"]
