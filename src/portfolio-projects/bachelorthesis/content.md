## Projektüberblick

**Ziel:**  
Entwicklung und Evaluation eines visuellen Erkennungssystems zur Analyse von LED-Statusmustern an Routern.  
Im Fokus steht der Vergleich eines algorithmischen Computer-Vision-Ansatzes mit datengetriebenen Deep-Learning-Modellen hinsichtlich Genauigkeit, Latenz und Ressourcenverbrauch auf ressourcenbeschränkter Hardware.


## Meine Rolle & Aufgaben

- Konzeption und Implementierung einer Weboberfläche zur Steuerung und Visualisierung der Testläufe
- Integration der Bilderkennungs-Pipelines zur Anzeige von Erkennungsresultaten in Echtzeit
- Entwicklung eines Datenerfassungs-Flows zur Speicherung von Messwerten (Accuracy, FPS, Ressourcenverbrauch)
- Aufbau eines reproduzierbaren Versuchs-Setups mit Raspberry Pi und Kamera
- Implementierung von Vergleichslogik zwischen Soll-Blinkmustern und erkannten Mustern
- Unterstützung bei Modellintegration und Optimierung für Embedded-Hardware
- Auswertung und Visualisierung der Benchmark-Ergebnisse

## Mögliche Architektur
```text
Camera → Raspberry Pi (CV / DL Inference)
        ↓
Measurement & Logging Layer
        ↓ REST
Backend API (Node.js)
        ↓
Web Dashboard (React)

```

## Möglicher Tech Stack

**Frontend:** React, TypeScript, TailwindCSS  
**Backend:** Node.js  
**CV / ML:** OpenCV / CNN Model  
**Hardware:** Raspberry Pi + Camera Module  
**Data Processing:** Benchmark Logging & Metrics Evaluation  
**Tools:** Git

