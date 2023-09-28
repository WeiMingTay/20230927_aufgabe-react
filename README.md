`27. September 2023` `neueFische - Java Development Bootcamp`
# React
## Theoretische Aufgaben
1. Was ist eine Single-Page-Application?
> Webanwendung oder Website, deren Content nur einmal geladen und dann dynamisch „aktualisiert“ wird
2. Nennt 2 unterschiede zwischen React und Angular? (in aller Kürze)
> React ist eine JavaScript-Bibliothek für Benutzeroberflächen, während Angular ein umfassendes TypeScript-Framework für Webanwendungen ist. React betont die Verwendung von Komponenten, während Angular zusätzliche Funktionen wie Dienste und Module bietet.
3. Warum nutzen wir React und nicht nur JavaScript um eine Web Applikation zu programmieren. (Welche Vor- und oder Nachteile bietet React)
> React bietet modulare Komponentenentwicklung, Leistungsverbesserungen durch das Virtuelle DOM, eine starke Entwicklergemeinschaft und ein vielfältiges Ökosystem. Dies erleichtert die Entwicklung komplexer Webanwendungen. Allerdings gibt es eine steile Lernkurve und anfänglichen Setup-Aufwand. Trotzdem ist React aufgrund seiner Vorteile eine beliebte Wahl in der Webentwicklung.
## Aufgaben
1. Schritt 1: Erstellt eine Komponente BlogPage und fügt sie in die App.tsx ein.
2. Schritt 2: Nehmt euren BlogPage aus der HTML-Aufgabe und stellt ihn in React nach.Teilt euren BlogPage bedacht in Komponenten auf. Die Komponenten sollten sich in der Komponente BlogPage zusammenfügen
## Bonus Aufgaben
1. Bonus: Erstelle eine Komponente profile (die mit der Komponente BlogPage auf einer Ebene stehen sollte in der App.tsx), die dich als Entwickler*in vorstellt. Nutze dazu die React-Grundlagen, die du bisher gelernt hast.
   

`27. September 2023` `neueFische - Java Development Bootcamp`
# React
## Theoretische Fragen
1. Was sind React-Props und wofür werden sie in React verwendet?
> React-Props sind in React verwendete Mechanismen zur Übermittlung von Daten von einer übergeordneten Komponente an eine untergeordnete Komponente.
2. Warum sind callback functions in React wichtig? Gebt ein Beispiel.
> Callback-Funktionen in React sind wichtig, um auf Benutzerinteraktionen zu reagieren und den Zustand der Anwendung sicher und reaktionsfähig zu aktualisieren
## Aufgaben
1. _Schritt 1_: Baut euren BlogPage so um das eine BlogPage-Entry Komponente dynamisch mit Props befüllt wird und die BlogPage-Entry Komponente mehrfach verwendet wird.
2. _Schritt 2_: Erstelle eine Komponente profile (die mit der Komponente BlogPage auf einer Ebene stehen sollte in der App.tsx), die dich als Entwickler*in vorstellt.Wenn du in der letzten Aufgabe (Bonus-Aufgabe) schon eine Profil-Komponente erstellt hast, kannst du diese weiter ausbauen und mit dem neuen Wissen verbessern."

`28. September 2023` `neueFische - Java Development Bootcamp`
# useState
## Theoretische Aufgaben
1. Muss man bei useState einen Initialwert vorgeben?
> nein, default ist aber `undefined`
2. Warum gibt [dieser Code](https://github.com/bartfastiel/cgn-java-23-2-react/blob/birthday-example/src/App.tsx) in der Konsole "17" (und nicht "18") aus?
> console.log wird ausgegeben, bevor useState rendert und die 18 mitgibt
3. Warum ist 'useState' für die Verwaltung des Komponenten-States wichtig? Gebt Beispiele.
> useState ein grundlegendes Werkzeug in React, um den Zustand von Komponenten zu verwalten und reaktive Benutzeroberflächen zu erstellen. Es ermöglicht Komponenten, Daten zu speichern, zu aktualisieren und auf Änderungen zu reagieren, was in praktisch jeder React-Anwendung unerlässlich ist.
4. Was sind die drei Bestandteile des Ternary-Operator?
> Bedingung, der Wert für den wahren Fall und der Wert für den falschen Fall.
5. Welche weiteren Operatoren können wir für Conditional rendering verwenden?
> &&, ||
## Aufgaben
1. Schritt 1: Erstellt ein neues React-Projekt mit Vite und TypeScript.
2. Schritt 2: Nutzt die Daten, die Ihr von dieser API abrufen könnt: [RickMortyApi](https://rickandmortyapi.com/api/character/) speichert die Daten in einer separaten TypeScript-Datei übergibt eure Daten an euer useState
3. Schritt 3: Übergibt diesen state an Komponenten, die diese Daten dann visualisieren
4. Schritt 4: Legt euch gemeinsam ein Inputfield an in der App.tsx, der die Suche auslösen soll Filtert eure Suche, sodass euch nur die Charaktere angezeigt werden, die ihr gesucht habt.
5. Schritt 5: Ergänzt eure Suche, sodass eine Fehlermeldung auftaucht, wenn im Inputfield ein Name eingegeben wird der nicht existiert
## Bonus Aufgaben
1. Schreibe eine Funktion die dir nur 5 Charaktere anzeigt implementiere diese Logik auf einen weiteren Button bei jedem klick sollen die nächsten 5 Charaktere ausgegeben werden.
2. Baut useStates in euren BlogPage ein.