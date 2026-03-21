## Projektüberblick

**Ziel:**  
Ablösung einer statischen Wiki-Tabelle zur Verwaltung von Rollen und Berechtigungen durch eine skalierbare Webanwendung mit direkter Datenbankanbindung. Zusätzlich sollte untersucht werden, ob eine relationale oder eine NoSQL-Datenbank besser für die Anforderungen geeignet ist.

**Ergebnis:**  
Zwei lauffähige Prototypen mit identischem Frontend und abstrahiertem Backend wurden umgesetzt. Die Anwendung ermöglicht das Anzeigen, Erstellen, Bearbeiten und Löschen von Rollen, Tiles und Permissions sowie die Generierung der benötigten YAML-Konfiguration für nachgelagerte Systeme.

## Meine Aufgaben

- Konzeption und Implementierung der Frontend-Architektur mit Vue.js und TypeScript
- Entwicklung einer performanten UI zur Verwaltung von Rollen- und Berechtigungsstrukturen
- Integration der CRUD-APIs zur Datenanzeige und Manipulation
- Umsetzung der Backend-Abstraktion zwischen MongoDB und MySQL
- Evaluation zwischen MongoDB und MySQL: Für dieses Projekt eignet sich MongoDB besser.

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

## Tech-Stack

**Frontend:** Vue.js, TypeScript  
**Backend:** Node.js, Express  
**Database:** MongoDB, MySQL  
**Tools:** Git, Copilot, ChatGPT

## Screenshots

- Rollen- und Rechteübersicht
![Roles & Rights Übersicht](/projectsWebp/rolesrightsadministration/rolesRightsAdministration.webp)

- Formular zum Hinzufügen von Actions
![Roles & Rights Einstellungen hinzufügen](/projectsWebp/rolesrightsadministration/rolesRrightsAdministrationAddSettings.webp)

- Aktionen Dropdown
  ![Roles & Rights Aktionsmenü](/projectsWebp/rolesrightsadministration/rolesRrightsAdministrationActionDropdown.webp)
