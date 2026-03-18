## Projektüberblick

**Ziel:**  
Ablösung einer statischen Wiki-Tabelle zur Verwaltung von Rollen und Berechtigungen durch eine skalierbare Webanwendung mit direkter Datenbankanbindung. Zusätzlich sollte untersucht werden, ob eine relationale oder eine NoSQL-Datenbank besser für die Anforderungen geeignet ist.

**Ergebnis:**  
Zwei lauffähige Prototypen mit identischem Frontend und abstrahiertem Backend wurden umgesetzt. Die Anwendung ermöglicht das Anzeigen, Erstellen, Bearbeiten und Löschen von Rollen, Tiles und Permissions sowie die Generierung der benötigten YAML-Konfiguration für nachgelagerte Systeme.

## Meine Rolle & Aufgaben (Solo Frontend Owner)

- Konzeption und Implementierung der Frontend-Architektur mit Vue.js und TypeScript
- Entwicklung einer minimalistischen, performanten UI zur Verwaltung von Rollen- und Berechtigungsstrukturen
- Integration der CRUD-APIs zur Datenanzeige und Manipulation
- Aufbau eines konsistenten State-Management-Flows für Tabellen- und Detailansichten
- Umsetzung von Formular-Flows für Insert- und Update-Operationen
- Optimierung der Rendering-Performance bei großen Datensätzen
- Unterstützung bei Architekturentscheidungen zur Backend-Abstraktion zwischen MongoDB und MySQL

## Architektur
```text
Client (Vue.js SPA)
   ↓ CRUD
Backend API (Node.js / Express – Controller → Service Layer)
   ↓
Database Abstraction
   ↓              ↓
MongoDB       MySQL
(JSON Model)  (Relational Schema)
```

## Tech Stack

**Frontend:** Vue.js, TypeScript  
**Backend:** Node.js, Express  
**Database:** MongoDB, MySQL  
**Tools:** Git, Copilot, ChatGPT

## Screenshots / Demo

- Rollen-Management Tabelle

- Permission Detail Editor

- YAML Export Funktion

