# monitoring/grafana/Dockerfile

FROM grafana/grafana:9.4.3

# Copy Grafana configuration file
COPY grafana.yml /etc/grafana/provisioning/datasources/grafana.yml

# Expose Grafana port
EXPOSE 3000

# Run Grafana
CMD ["grafana-server", "--homepath=/usr/share/grafana", "--config=/etc/grafana/grafana.ini"]
