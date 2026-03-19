## Projektüberblick

**Ziel:**  
Entwicklung einer webbasierten Anwendung, die Golfspielern ermöglicht, ihr Handicap nach verschiedenen Berechnungsmodellen zu berechnen und zu vergleichen. Gleichzeitig sollte im Projekt praktische Erfahrung mit agilen Methoden, insbesondere Scrum, gesammelt werden.

**Ergebnis:**  
Eine funktionsfähige Webapp mit Eingabe-Interface für Spielergebnisse, automatischer Handicap-Berechnung sowie grafischer Darstellung der Entwicklung. Im Laufe der Entwicklung kamen viele weitere Features hinzu, wie das Erstellen von Golfplätzen, das Verwalten von Usern mittels Rollen oder das Erstellen einer Score Card.
Die neuen Features wurden iterativ in kurzen Sprints umgesetzt und nach jedem Sprint als lauffähiges Inkrement integriert.
## Meine Rolle & Aufgaben

- Konzeption und Implementierung der Frontend-Architektur mit Vue.js und TypeScript
- Entwicklung einer intuitiven Benutzeroberfläche zur Eingabe und Visualisierung von Golf-Runden
- Integration der REST-APIs zur Berechnung und Speicherung der Handicap-Daten
- Umsetzung von Tabellen- und Diagramm-Views zur Darstellung von Ergebnisverläufen
- Implementierung der clientseitigen Authentifizierung die mittels JWT
- Sicherstellung einer guten User Experience durch klare Strukturierung der Eingabemasken und Ergebnisansichten
- Unterstützung bei Aufwandsschätzungen und technischer Planung von User Stories im Scrum-Prozess
- Strukturierung eigener Aufgaben in Subtasks zur besseren Sprint-Planung

## Architektur
```text
Client (Vue.js SPA)
   ↓ REST
Backend API (Node.js – Berechnungslogik & Datenzugriff)
   ↓
Database (MongoDB – Speicherung von Runden & Handicapwerten)
```

## Tech Stack

**Frontend:** Vue.js, TypeScript  
**Backend:** Node.js, Express  
**Database:** MongoDB  
**Authentication:** JWT  
**Deployment:** GitHub (Branch-based Workflow pro Sprint)  
**Tools:** Git, Jira, Figma, Copilot, ChatGPT


## Screenshots / Demo

- Loginseite
![GolfHandicap Login](/projectsWebp/golfhandicap/golfHandicapLogin.webp)

- Startseite mit Übersicht
![GolfHandicap Startseite](/projectsWebp/golfhandicap/golfHandicapHome.webp)

- Handicap-Berechnung und Verlauf
![GolfHandicap Handicap-Ansicht](/projectsWebp/golfhandicap/golfHandicap.webp)


