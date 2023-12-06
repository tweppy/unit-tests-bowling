# User Stories & Acceptanskriterier

1. Som användare vill jag kunna boka datum och tid samt ange antal spelare så att jag kan reservera 1 eller flera baner i bowlinghallen.
    - Det finns en kalender användaren kan bläddra igenom
    - Användaren ska kunna välja ett datum från kalendern
    - Användaren ska kunna skriva in en tid i ett input fält
    - Användaren ska kunna ange 1 spelare eller fler i ett input fält
    - Användaren ska kunna ange 1 eller flera baner i ett input fält
    - components/BookingInfo

2. Som användare vill jag kunna välja skostorlek för varje spelare så varje spelare får skor som passar.
    - Det ska finnas en knapp för att lägga till en ny skostorlek för en spelare
    - När knappen klickas, ska ett nytt input fält för skostorlek renderas tillsammans med en radera knapp
    - Användaren ska kunna skriva in och uppdatera en skostorlek i ett input fält
    - components/Shoes

3. Som användare vill jag kunna ta bort ett fält för skostorlek om jag råkade klicka i ett för mycket så jag inte boka skor i onödan.
    - Användaren ska kunna klicka på en knapp för att ta bort en skostorlek från bokningen
    - components/Shoes

4. Som användare vill jag kunna skicka iväg min reservation och få tillbaka ett ett bokningsnummer och totalsumma så jag vet hur mycket jag ska betala. (120 kr / person + 100 kr / bana).
    - Det ska finnas en bokningsknapp
    - När användaren klickar på bokningsknappen med rätt ifylld info ska de navigeras vidare till bekräftelsesidan där pris och bokningsnummer genereras
    - views/Confirmation

5. Som användare vill jag kunna navigera mellan boknings-och bekräftelsevyn.
    - Det ska finnas en synlig meny knapp i hörnet
    - Användaren ska kunna klicka på meny knappen och se de två länkarna
    - När användaren klickar på en länk ska de navigeras till rätt sida
    - /App