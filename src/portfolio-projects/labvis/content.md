## Projektüberblick

**Ziel:**  
Modernisierung eines bestehenden internen Tools zur Administration von CPE-Testgeräten, das nur eingeschränkte Filtermöglichkeiten, geringe Übersichtlichkeit und eine schlechte performance aufwies.  
Im Fokus stand der Aufbau einer skalierbaren Frontend-Architektur mit performanter Datendarstellung sowie eines Backend-for-Frontend zur Aggregation verteilter Microservice-Daten.

**Ergebnis:**  
Eine neue Version der Lab Visualization mit komponentenbasierter UI, leistungsfähiger Such- und Filterlogik sowie deutlich verbesserter Übersicht über Geräteinformationen.  
Das Frontend kommuniziert über ein maßgeschneidertes BFF mit mehreren Microservices und kann containerisiert in einer Docker-Compose-Entwicklungsumgebung betrieben werden.

## Meine Rolle & Aufgaben (Frontend + BFF Owner)

-  Gestaltung der UI(High-Fi Figma-Prototyp auf Basis von Low-Fi-Wireframes)
- Konzeption und Implementierung der React-SPA Architektur
- Entwicklung eines Backend-for-Frontend mit Nitro zur Aggregation von REST- und GraphQL-APIs
- Aufbau wiederverwendbarer UI-Komponenten (z. B. modulare Selector-Inputs und komplexe CPE-Tiles)
- Implementierung performanter Filter- und Suchlogik für große Gerätemengen
- Integration mehrerer Microservices zur Anzeige von Status-, Pipeline- und Labgrid-Daten
- Verbesserung der Wartbarkeit durch klare Komponentenstruktur und Utility-First Styling mit Tailwind

## Architektur
```text
Client (React SPA)
   ↓ REST
BFF (Nitro – API Aggregation & Security Layer)
   ↓ REST / GraphQL
Microservices (Labgrid / Status / Pipelines / Auth)
```

## Tech Stack

**Frontend:** React, TypeScript, TailwindCSS  
**BFF:** Nitro  
**Architecture:** Microservices + Backend-for-Frontend  
**Communication:** REST, GraphQL  
**Deployment:** Docker, Docker Compose  
**Tools:** Git, Figma, Copilot, ChatGPT

## Screenshots / Demo

- CPE-Detailansicht mit zusätzlichen Informationen
  ![LabVis CPE-Details erweitert](/projectsWebp/labvis/labVisCpeDetails2.webp)

- Erweiterte CPE-Detailansicht mit Status- und Gerätedaten
![LabVis CPE-Details](/projectsWebp/labvis/labVisCpeDetails.webp)

- Account-Ansicht mit Benutzer- und Zugriffsinformationen
  ![LabVis Account-Ansicht](/projectsWebp/labvis/labVisAccount.webp)
