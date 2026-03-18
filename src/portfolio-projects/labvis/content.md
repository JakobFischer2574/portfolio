## Projektüberblick

**Ziel:**  
Modernisierung eines bestehenden internen Tools zur Administration von CPE-Testgeräten, das nur eingeschränkte Filtermöglichkeiten, geringe Übersichtlichkeit und eine technisch gewachsene Architektur aufwies.  
Im Fokus stand der Aufbau einer skalierbaren Frontend-Architektur mit performanter Datendarstellung sowie eines Backend-for-Frontend zur Aggregation verteilter Microservice-Daten.

**Ergebnis:**  
Eine neue Version der Lab Visualization mit komponentenbasierter UI, leistungsfähiger Such- und Filterlogik sowie deutlich verbesserter Übersicht über Geräteinformationen.  
Das Frontend kommuniziert über ein maßgeschneidertes BFF mit mehreren Microservices und kann containerisiert in einer Docker-Compose-Entwicklungsumgebung betrieben werden.

## Meine Rolle & Aufgaben (Frontend + BFF Owner)

- Konzeption und Implementierung der React-SPA Architektur
- Entwicklung eines Backend-for-Frontend mit Nitro zur Aggregation von REST- und GraphQL-APIs
- Aufbau wiederverwendbarer UI-Komponenten (z. B. modulare Selector-Inputs und komplexe CPE-Tiles)
- Implementierung performanter Filter- und Suchlogik für große Gerätemengen
- Iterative Gestaltung des UI von Low-Fi Wireframes bis High-Fi Figma-Prototyp
- Integration mehrerer Microservices zur Anzeige von Status-, Pipeline- und Device-Daten
- Containerisierung des Frontends und Integration in eine Docker-Compose Entwicklungsumgebung
- Verbesserung der Wartbarkeit durch klare Komponentenstruktur und Utility-First Styling mit Tailwind

## Architektur
```text
Client (React SPA)
   ↓ REST / GraphQL (aggregiert)
BFF (Nitro – API Aggregation & Security Layer)
   ↓
Microservices (Labgrid / Status / Pipelines / Auth / Device DB)
```

## Tech Stack

**Frontend:** React, TypeScript, TailwindCSS  
**BFF:** Nitro  
**Architecture:** Microservices + Backend-for-Frontend  
**Communication:** REST, GraphQL  
**Deployment:** Docker, Docker Compose  
**Tools:** Git, Figma, Copilot, ChatGPT

## Screenshots / Demo

- CPE Tile mit Multi-State Views (Locked / Invalid / Available)

- Modularer Filterbereich mit Dropdown-, Tag- und Switch-Selectoren

- Geräteübersicht mit erweiterten Such- und Statusinformationen
