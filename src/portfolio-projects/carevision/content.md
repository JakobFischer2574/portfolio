## Projektüberblick

**Ziel:**  
Entwicklung eines ereignisgesteuerten Systems zur automatischen Erkennung von Stürzen auf Basis von kamerabasierten Computer-Vision-Algorithmen. Zusätzlich sollte ein Dashboard bereitgestellt werden. Über dieses sollen Vorfälle in Echtzeit überwacht, dokumentiert und eskaliert werden können. Außerdem sollen Einstellungen über Eskalationsstufen und Kontakte vorgenommen werden können.

**Ergebnis:**  
Ein funktionierender Proof-of-Concept, der Live-Videodaten analysiert, erkannte Stürze automatisch an ein webbasiertes Dashboard meldet und dort Alarm- sowie Replay-Funktionen bereitstellt. Nutzer können Vorfälle einsehen, bestätigen, eskalieren oder zurücksetzen. Des Weiteren steht dem Nutzer des Dashboards ein Live-Feed der verbundenen Kamera zur Verfügung.

## Meine Rolle & Aufgaben

- Konzeption und Umsetzung der Frontend-Architektur mit React und TypeScript
- Entwicklung eines Dashboard-Interfaces zur Anzeige von Vorfällen
- Integration der Rest Backend-APIs
-  Aufbau einer Server-Sent-Events-Schnittstelle zur Echtzeit-Benachrichtigung über erkannte Vorfälle
- Implementierung einer WebRTC-basierten Kameraübertragung zur latenzarmen Übermittlung von Videoframes
- Umsetzung der Authentifizierung mit Auth0 zur sicheren Benutzerverwaltung
- Unterstützung bei der Integration des Computer-Vision-Algorithmus durch Entwicklung von Kontroll- und Interaktionsmechanismen in den Einstellungen

## Architektur
```text
Client (React Dashboard + Camera View)
        ↓ ↑  (WebRTC / SSE / REST)
Backend API (Node.js, Event Logic)
        ↓ ↑
YOLO11n-Pose Modell + Fall Detection Algorithmus
        ↓ ↑
Database (MongoDB – Event Storage & History)
```

## Tech Stack

**Frontend:** React, TypeScript
**Backend:** Node.js, Express  
**Database:** MongoDB
**Authentication:** Auth0
**Real-Time Communication:** WebRTC, Server-Sent Events  
**Deployment:** Docker, GitHub Actions  
**Tools:** GitHub, Figma, Miro, Copilot, ChatGPT

## Screenshots
![CareVision Dashboard](/projects/carevision/careVisionDashboard.png)
![CareVision Detailansicht](/projects/carevision/careVisionDashboardIncident.png)

