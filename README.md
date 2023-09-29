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

`29. September 2023` `neueFische - Java Development Bootcamp`
# Router
## Theoretische Aufgaben
1. Erklärt in eigenen Worten den Zweck von Routing in einer Single-Page-Anwendung.
> Routing in einer Single-Page-Anwendung ist sooo kawaii und hilfreich, uwu! ฅ^•ﻌ•^ฅ
>
> Also, stell dir vor, deine Single-Page-Anwendung ist wie ein magisches Buch mit vielen Seiten, aber es ist alles auf einer Seite, :3. Das Routing ist wie ein Navi für dieses Buch, das dir hilft, auf die richtige Seite zu gelangen, wenn du auf bestimmte Knöpfchen oder Links klickst, nyaa~!
>
> Mit Routing kannst du also super einfach zwischen verschiedenen Teilen deiner Anwendung hin und her springen, ohne die Seite neu zu laden. Es ist sooo praktisch für Benutzer, weil sie sich nicht verirren und alles ganz flüssig und niedlich bleibt, hihi~ :3
>
> Denk an eine Website wie ein buntes Manga-Buch. Das Routing zeigt dir den Weg von einer Seite zur nächsten, damit du die Geschichte verstehen kannst, ohne sie immer wieder von vorne zu beginnen, nya~! Es macht deine Single-Page-Anwendung soooo viel benutzerfreundlicher und spaßiger, uwu! ♡＾▽＾♡
2. Was ist der Unterschied von HashRouter und BrowserRouter?
> Gewiss, mein lieber Freund, erlauben Sie mir, diese beiden ehrwürdigen Routing-Mechanismen, den HashRouter und den BrowserRouter, in einer Sprache zu beschreiben, die selbst den feinen Gaumen der Gesellschaft befriedigen würde.
>
> Der HashRouter, ein weiser Narr unter den Routern, versteckt seine Navigationstaktik geschickt im Schatten eines schlichten Symbols, des liebenswerten Hashtags. Ein symbolischer Versteckspiel, das den Pfad zu den geheimnisvollen Seiten unserer digitalen Welt weist. Doch, oh, die Ästhetik! Mit einer URL, die wie eine dichtgefüllte Wurstpresse aussieht, mag er für manchen das Auge beleidigen. Aber er ist der Retter, wenn die Serverkonfiguration knapp ist wie das Lächeln einer Mondsichel.
>
> Nun, auf der anderen Seite des eleganten Spektrums steht der BrowserRouter, ein wahrer Aristokrat unter den Routern. Er präsentiert uns mit URLs, die so anmutig sind wie ein Walzer und so sauber wie ein frisch gewaschenes Hemd. Ein wahrer Augenschmaus für die Benutzer, vorausgesetzt, die Server sind bereit, seinem prächtigen Tanz zu folgen und die Pfade ohne Murren zu enthüllen.
>
> In dieser Wahl zwischen HashRouter und BrowserRouter, meine lieben Freunde, offenbart sich das Drama der Schönheit gegen die Zweckmäßigkeit. Es ist eine Entscheidung, die von den Kulissen der Serverkonfiguration und den Vorlieben der Gesellschaft beeinflusst wird. Lassen Sie uns die Wahl weise treffen und die Schönheit der Routen, wie sie in unserem digitalen Theater auftreten, bewahren.
3. Nenne alle möglichen Bestandteile einer URL
> protokoll, credentials, domain, port, path, query, fragment
>
> Ah, Reisender, Ihr fragt nach den Geheimnissen einer URL, der Wege des digitalen Reiches. Hört gut zu, denn ich werde Euch alle möglichen Bestandteile einer URL offenbaren:
>
> Das Protokoll: Dies ist der Pfadweiser, der uns sagt, wie wir uns in den digitalen Landen bewegen sollen. Ob es sich um "http://" oder "https://" handelt, bestimmt unsere Reise.
>
> Die Subdomain: Eine subtile Teilung des digitalen Terrains, die uns zeigt, auf welchem Hof wir uns befinden, wie "www" in "www.example.com".
>
> Die Domain: Das Herzstück, die Adresse unseres Ziels, wie "example.com". Hier finden wir den Schatz, nach dem wir suchen.
>
> Der Port: Ein Eingangstor in die digitale Festung, oft optional. Zum Beispiel "example.com:8080", wobei "8080" der geheime Schlüssel ist.
>
> Der Pfad: Die Pfade sind die Wege zu den geheimen Schätzen innerhalb der Domain. Sie kommen nach der Domain, wie "example.com/path/to/treasure".
>
> Die Abfragezeichenfolge: Ein Rätsel, das unsere Reise beeinflusst, wie "example.com/search?query=treasure". Hier fragen wir nach unserem Ziel.
>
> Der Anker: Ein magisches Zeichen, das uns direkt zu einem bestimmten Ort führt, wie "example.com/#section". Ein Zauberspruch, um uns zu einem bestimmten Ort zu teleportieren.
>
> Benutzername und Passwort: Optionale Schatzkarten, die uns Zugang gewähren können, wie "username:password@example.com". Doch seid vorsichtig, diese Informationen sollten gut bewacht werden.
>
> So, Reisender, sind die Bestandteile einer URL, die Euch auf Eurer digitalen Quest begleiten werden. Möget Ihr sie weise verwenden und die Schätze des Internets finden, die Euch gebühren!
4. Was ist die aktuelle Version von react-router?
> 6.4
>
> Yo, yo, yo, check it out, meine Homies! 🎤
>
> Die aktuelle Version von React Router, yeah, das heißt React Router, my peeps, ist zum Zeitpunkt meines Wissenscutoffs im September 2021 die Version 6.0.0, keeping it fresh in da hood! 💯
>
> Aber yo, remember, die Zeit fliesst und die Versionen ändern sich, so check immer die neueste Version auf der offiziellen React Router Website, um up to date zu bleiben, ya feel me? Stay lit! 🔥🔥🔥
## Aufgaben
##### Benutzt euere Rick and Morty Gallery um folgendes zu implementieren oder nutzt unser [Beispiel-Repo](https://github.com/Flooooooooooorian/ffm-java-23-1-rick-morty).
1. _Schritt 1_: Installiert euch die dependency react-router-dom
2. _Schritt 2_: Erstellt eine Route die euch auf eure "Home/ Welcome" Seite zeigt. Erstellt euch dafür eine Komponente die eure Besucher begrüßt.
3. _Schritt 3_: Erstellt euch eine Route ("/characters") die zu eure Rick and Morty Gallery anzeigt.
4. _Schritt 4_: Erstellt euch eine Header Komponente, mit einer Überschrift und einem Navigations Menü, damit ihr zwischen euren Routes navigieren könnt.
## Bonus Aufgaben
1. _Schritt 1_: Passe die Character-Card so an, sodass bei einem "click" auf eine Seite weitergeleitet wird auf "/characters/{id}".
2. _Schritt 2_: Erstelle eine weitere Route, die auf dem Pfad  "/characters/:id" die Komponente "CharacterDetailPage" navigiert. Die CharacterDetailPage soll als prop eine Liste mit allen Characteren übergeben bekommen, anhand der ID soll der richtige Character rausgesucht und angezeigt werden.





