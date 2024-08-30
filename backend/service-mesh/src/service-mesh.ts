// src/service-mesh.ts

import { execSync } from 'child_process';

export class ServiceMesh {
  private istioCtlPath: string;

  constructor(istioCtlPath: string = '/usr/local/bin/istioctl') {
    this.istioCtlPath = istioCtlPath;
  }

  installIstio() {
    try {
      console.log('Installing Istio...');
      execSync(`${this.istioCtlPath} install --set profile=demo -y`, { stdio: 'inherit' });
      console.log('Istio installation completed.');
    } catch (error) {
      console.error('Failed to install Istio:', error);
    }
  }

  enableSidecarInjection(namespace: string) {
    try {
      console.log(`Enabling sidecar injection for namespace: ${namespace}...`);
      execSync(`kubectl label namespace ${namespace} istio-injection=enabled --overwrite`, { stdio: 'inherit' });
      console.log(`Sidecar injection enabled for namespace: ${namespace}.`);
    } catch (error) {
      console.error(`Failed to enable sidecar injection for namespace: ${namespace}`, error);
    }
  }

  applyConfig(configFilePath: string) {
    try {
      console.log(`Applying service mesh configuration from file: ${configFilePath}...`);
      execSync(`kubectl apply -f ${configFilePath}`, { stdio: 'inherit' });
      console.log(`Configuration applied successfully from file: ${configFilePath}.`);
    } catch (error) {
      console.error(`Failed to apply configuration from file: ${configFilePath}`, error);
    }
  }
}
