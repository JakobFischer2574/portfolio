## Projektüberblick

**Ziel:**  
Entwicklung und Evaluation eines visuellen Erkennungssystems zur Analyse von LED-Statusmustern an Routern.  
Im Fokus steht der Vergleich eines algorithmischen Computer-Vision-Ansatzes mit datengetriebenen Deep-Learning-Modellen hinsichtlich Genauigkeit, Latenz und Ressourcenverbrauch auf ressourcenbeschränkter Hardware.


## Voraussichtliche Aufgaben

- Konzeption, Training und Testen eines Deep-Learning-Modells
- Konzeption, Implementierung und Testen eines algorithmischen Computer-Vision-Ansatzes 
- Aufbau eines reproduzierbaren Versuchs-Setups mit Raspberry Pi und Kamera
- Implementierung von Vergleichslogik zwischen Soll-Blinkmustern und erkannten Mustern
- Konzeption und Implementierung einer Weboberfläche zur Steuerung und Visualisierung der Testläufe
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

## Möglicher Tech-Stack

**Frontend:** React, TypeScript, TailwindCSS  
**Backend:** Node.js  
**CV / ML:** OpenCV / Ultralytics YOLO26  
**Hardware:** Raspberry Pi + Camera Module  
**Tools:** Git, Copilot
