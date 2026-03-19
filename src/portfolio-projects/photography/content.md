**Ziel:**  
Entwicklung einer professionellen Portfolio-Website für meine Fotografie, auf der Hochzeiten, Paarshootings und Einzelshootings ansprechend präsentiert werden können.  
Neben dem visuellen Design lag der Fokus auf schnellen Ladezeiten, guter Auffindbarkeit über Suchmaschinen und einem möglichst automatisierten Deployment-Prozess.

**Ergebnis:**  
Eine öffentlich erreichbare Portfolio-Website mit responsivem Layout, optimierten Bilddateien und performanter Darstellung auch bei vielen hochauflösenden Fotos.  
Das Deployment wurde zunächst über einen klassischen Webserver per SSH automatisiert und später auf Cloudflare Pages migriert.

## Meine Rolle & Aufgaben

- Anpassung und Weiterentwicklung einer Vue.js-basierten Website-Vorlage mit TypeScript
- Gestaltung und Optimierung des UI/UX-Designs für fotografische Inhalte
- Reduktion von Ladezeiten durch Konvertierung und Optimierung großer Bildmengen in WebP
- Verbesserung der Frontend-Performance für bildlastige Seiten
- Umsetzung von SEO-Maßnahmen zur besseren Auffindbarkeit über Google
- Einrichtung einer GitHub-Actions-Pipeline zum automatischen Build und Deployment nach jedem Push
- Deployment zunächst auf einem öffentlichen Webserver per SSH, später Migration zu Cloudflare Pages
- Laufende Pflege und Erweiterung der Website-Inhalte

## Architektur
```text  
Client (Vue.js / TypeScript)  
↓  
Static Site Build  
↓  
Deployment Pipeline (GitHub Actions)  
↓  
Hosting (initially Strato via SSH, later Cloudflare Pages)
````

## Tech Stack

**Frontend:** Vue.js, TypeScript  
**Styling:** CSS / Template Customization  
**Performance:** WebP Image Optimization  
**Deployment:** GitHub Actions, SSH, Cloudflare Pages  
**SEO:** Metadata, indexability, search optimization  
**Tools:** Git, Copilot

## Screenshots / Demo

- Startseite mit Hero-Section und Galerie
![Photography Startseite](/projectsWebp/photography/photography.webp)

- Portfolio-Seite für Hochzeiten und Paarshootings
![Photography Portfolio](/projectsWebp/photography/photographyPortfolio.webp)

- About-Me-Bereich der Website
![Photography About Me](/projectsWebp/photography/photographyAboutMe.webp)

- Mobile Ansicht mit optimierter Bilddarstellung
![Photography Mobile](/projectsWebp/photography/photographyHandy.webp)
