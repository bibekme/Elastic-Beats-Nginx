helm repo add elastic https://helm.elastic.co
helm --kubeconfig install filebeat elastic/filebeat --version 8.5.1 