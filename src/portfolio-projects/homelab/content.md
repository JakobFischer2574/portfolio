## Projektüberblick

**Ziel:**  
Aufbau einer privaten Serverumgebung zur eigenen Weiterbildung sowie zum produktiven Betrieb mehrerer Self-Hosting-Dienste im Heimnetz und per sicherem Fernzugriff.  
Im Fokus standen zunächst Container-Orchestrierung mit Kubernetes auf einem Raspberry Pi und später der Ausbau zu einer leistungsfähigeren Virtualisierungsplattform mit Proxmox auf Dell-Hardware.

**Ergebnis:**  
Eine zentral verwaltete Homelab-Umgebung mit virtuellen Maschinen und Containern für Home Assistant, TrueNAS, Obsidian-Synchronisierung, Reverse Proxy und lokale LLM-Nutzung.  
Der sichere externe Zugriff wurde über Tailscale und WireGuard-basierte Tunnel umgesetzt, sodass interne Dienste kontrolliert auch außerhalb des Heimnetzes erreichbar sind.

## Meine Rolle & Aufgaben

- Konzeption und schrittweiser Ausbau der gesamten Homelab-Architektur vom Raspberry Pi bis zur Proxmox-Plattform
- Aufbau eines ersten Kubernetes-Setups auf Raspberry-Pi-Hardware zur eigenen Weiterbildung im Bereich Container-Orchestrierung
- Migration auf leistungsfähigere Dell-Hardware zur Virtualisierung mehrerer produktiver Dienste
- Einrichtung von Proxmox als zentrale Plattform für virtuelle Maschinen und Container
- Betrieb von Home Assistant und TrueNAS als eigenständige VMs
- Deployment und Verwaltung zusätzlicher Container-Dienste wie CouchDB, OpenWebUI, Ollama und Nginx Proxy Manager
- Umsetzung einer Lösung zur Synchronisierung und Speicherung von Obsidian-Notizen über CouchDB
- Absicherung des Fernzugriffs über Tailscale sowie WireGuard-basierte Tunnel
- Einrichtung einer eigenen Domain zur strukturierten und kontrollierten Erreichbarkeit gehosteter Dienste
- Laufende Wartung, Fehleranalyse und Weiterentwicklung der Infrastruktur

## Architektur
```text
Internet / Remote Access
   ↓
Tailscale / WireGuard Tunnel
   ↓
Nginx Proxy
   ↓
Proxmox Host
   ├─ VM: Home Assistant
   ├─ VM: TrueNAS
   └─ Container Services
      ├─ CouchDB
      ├─ OpenWebUI
      ├─ Ollama
      └─ weitere Self-Hosted Apps
```

## Tech Stack

**Infrastructure:** Proxmox, Raspberry Pi, Dell Server  
**Virtualization:** Proxmox VMs, Container-based Services  
**Orchestration:** Kubernetes  
**Self-Hosting:** Home Assistant, TrueNAS, CouchDB, OpenWebUI, Ollama, Nginx Proxy Manager  
**Networking & Security:** Tailscale, WireGuard, Custom Domain  
**Tools:** Docker, Git, Copilot

## Screenshots / Demo

- Proxmox-Übersicht mit VMs und Containern
![Homelab Proxmox Übersicht](/projectsWebp/homelab/homelab.webp)

- Home-Assistant-Dashboard
![Homelab Home Assistant Dashboard](/projectsWebp/homelab/homelabHomeAssistant.webp)

- Reverse-Proxy-Setup mit eigener Domain
![Homelab Reverse Proxy Setup](/projectsWebp/homelab/homelabProxy.webp)

- OpenWebUI für lokale LLM-Nutzung
![Homelab OpenWebUI](/projectsWebp/homelab/homelabOpenWebUI.webp)
