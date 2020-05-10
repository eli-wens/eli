---
layout: default
title: bi
author: -

---

{% include nav-breadcrumbs.html %}


# BI

Welkom!

Het BI-gedeelte houdt de visualisatie in van de gegevens met behulp van de software Grafana. Hiervoor moet uiteraard ook een database aanwezig zijn waar alle gegevens van de sensoren en vaten in komen te staan.

In het onderdeel 'CCS' vindt u bij het gedeelte 'MySQL' hoe u deze installeert. Als u dit eerst wilt raadplegen, klikt u [hier](../CCS/MySQL/).

## SQL 
Voor dit project hebben we zelf een database aangemaakt met PhpMyAdmin en hierin tabellen gemaakt. Deze zijn gebaseerd op het model dat we voor dit project hebben opgesteld:

![databaseModel](/{{site.RepoName}}/media/bi/databasemodel.png)

Om deze aan te maken, werd een SQL script gemaakt. We tonen in het volgende gedeelte de code die u hiervoor nodig heeft. U kan deze kopiëren en plakken in een teksteditor (bijvoorbeeld Kladblok). U dient dit op te slaan met de extensie ```.sql```.

### SQL code aanmaken tabellen

CREATE TABLE Druif(<br/>
    &nbsp;  DruifID INT NOT NULL AUTO_INCREMENT,<br/>
    &nbsp;  Naam VARCHAR(255),<br/>
	&nbsp;  Kloontype VARCHAR(255),<br/>
	&nbsp;  Leeftijd int,<br/>
	&nbsp;  Perceel VARCHAR(255),<br/>
	&nbsp;  CONSTRAINT PK_Druif PRIMARY KEY(DruifID)<br/>
);


CREATE TABLE Programma(<br/>
    &nbsp;  ProgrammaID INT NOT NULL AUTO_INCREMENT,<br/>
    &nbsp;  Pmax VARCHAR(255),<br/>
    &nbsp;  Inhoud VARCHAR(255),<br/>
    &nbsp;  Naam VARCHAR(255),<br/>
    &nbsp;  CONSTRAINT PK_Programma PRIMARY KEY(ProgrammaID)<br/>
);

CREATE TABLE RaspberryPi(<br/>
	&nbsp;  RaspberryPiID INT NOT NULL AUTO_INCREMENT,<br/>
	&nbsp;  Naam VARCHAR(255),<br/>
	&nbsp;  Wachtwoord VARCHAR(255),<br/>
	&nbsp;  InGebruik BOOLEAN,<br/>
	&nbsp;  CONSTRAINT PK_RaspberryPi PRIMARY KEY(RaspberryPiID)<br/>
);

CREATE TABLE Vat(<br/>
    &nbsp;  VatID INT NOT NULL AUTO_INCREMENT,<br/>
    &nbsp;  Naam VARCHAR(255),<br/>
    &nbsp;  Oogst VARCHAR(255),<br/>
    &nbsp;  Gekneusd BOOLEAN,<br/>
    &nbsp;  ProgrammaID INT,<br/>
    &nbsp;  DruifID INT,<br/>
    &nbsp;  Nummer INT,<br/>
	&nbsp;  RaspberryPiID INT,<br/>
	&nbsp;  IsActief BOOLEAN,<br/>
	&nbsp;  Locatie VARCHAR(255),<br/>
	&nbsp;  TypeVatID INT,<br/>
	&nbsp;  Koelmantel BOOLEAN,<br/>
	&nbsp;  MateriaalID INT,<br/>
	&nbsp;  Mangat BOOLEAN,<br/>
	&nbsp;  SoortWijnID INT,<br/>
	&nbsp;  Jaar INT,<br/>
    &nbsp;  CONSTRAINT PK_Vat PRIMARY KEY(VatID),<br/>
    &nbsp;  CONSTRAINT FK_Vat_Programma FOREIGN KEY(ProgrammaID) REFERENCES Programma(ProgrammaID),<br/>
    &nbsp;  CONSTRAINT FK_Vat_Druif FOREIGN KEY(DruifID) REFERENCES Druif(DruifID),<br/>
	&nbsp;  CONSTRAINT FK_Vat_RaspberryPi FOREIGN KEY(RaspberryPiID) REFERENCES RaspberryPi(RaspberryPiID),<br/>
	&nbsp;  CONSTRAINT FK_Vat_TypeVat FOREIGN KEY(TypeVatID) REFERENCES TypeVat(TypeVatID),<br/>
	&nbsp;  CONSTRAINT FK_Vat_Materiaal FOREIGN KEY(MateriaalID) REFERENCES Materiaal(MateriaalID),<br/>
	&nbsp;  CONSTRAINT FK_Vat_Soortwijn FOREIGN KEY(SoortWijnID) REFERENCES SoortWijn(SoortWijnID)<br/>
);<br/>

CREATE TABLE TypeVat(<br/>
	&nbsp;  TypeVatID INT NOT NULL AUTO_INCREMENT,
	&nbsp;  Naam VARCHAR (255),
	&nbsp;  CONSTRAINT PK_TypeVat PRIMARY KEY(TypeVatID)
)

CREATE TABLE Materiaal(<br/>
	&nbsp;  MateriaalID INT NOT NULL AUTO_INCREMENT,
	&nbsp;  Naam VARCHAR (255),
	&nbsp;  CONSTRAINT PK_Materiaal PRIMARY KEY(MateriaalID)
)

CREATE TABLE SoortWijn(
	SoortWijnID INT NOT NULL AUTO_INCREMENT,
	Naam VARCHAR (255),
	CONSTRAINT PK_SoortWijn PRIMARY KEY(SoortWijnID)
)

CREATE TABLE Gebruiker(<br/>
    &nbsp;  PersoonID INT NOT NULL AUTO_INCREMENT,
    &nbsp;  Naam VARCHAR(255),
    &nbsp;  Wachtwoord VARCHAR(255),
    &nbsp;  Email VARCHAR(255),
    &nbsp;  TelNummer VARCHAR(255),
    &nbsp;  IsAdmin BOOLEAN,
    &nbsp;  CONSTRAINT PK_Gebruiker PRIMARY KEY(PersoonID)
);


CREATE TABLE SoortActie(<br/>
    &nbsp;  SoortActieID INT NOT NULL AUTO_INCREMENT,
    &nbsp;  Naam VARCHAR(255),
    &nbsp;  CONSTRAINT PK_SoortActie PRIMARY KEY(SoortActieID)
);


CREATE TABLE Actie(<br/>
    &nbsp;  ActieID INT NOT NULL AUTO_INCREMENT,
    &nbsp;  Naam VARCHAR(255),
    &nbsp;  Tijdstempel DATETIME,
    &nbsp;  VatID INT,
    &nbsp;  GebruikerID INT,
    &nbsp;  SoortActieID INT,
    &nbsp;  Notitie TEXT,
    &nbsp;  CONSTRAINT PK_Actie PRIMARY KEY(ActieID),
    &nbsp;  CONSTRAINT FK_Actie_Vat FOREIGN KEY(VatID) REFERENCES Vat(VatID),
    &nbsp;  CONSTRAINT FK_Actie_Gebruiker FOREIGN KEY(GebruikerID) REFERENCES Gebruiker(PersoonID),
    &nbsp;  CONSTRAINT FK_Actie_SoortActie FOREIGN KEY(SoortActieID) REFERENCES SoortActie(SoortActieID)
);


CREATE TABLE SoortMeting(<br/>
    &nbsp;  SoortMetingID INT NOT NULL AUTO_INCREMENT,
    &nbsp;  Naam VARCHAR(255),
    &nbsp;  CONSTRAINT PK_SoortMeting PRIMARY KEY(SoortMetingID)
);


CREATE TABLE ManueleMeting(<br/>
    &nbsp;  ManueleMetingID INT NOT NULL AUTO_INCREMENT,
	&nbsp;  Tijdstempel DATETIME,
    &nbsp;  GebruikerID INT,
    &nbsp;  VatID INT,
    &nbsp;  SoortMetingID INT,
    &nbsp;  Waarde DOUBLE,
    &nbsp;  ONSTRAINT PK_ManueleMeting PRIMARY KEY(ManueleMetingID),
    &nbsp;  CONSTRAINT FK_ManueleMeting_Gebruiker FOREIGN KEY(GebruikerID) REFERENCES Gebruiker(PersoonID),
    &nbsp;  CONSTRAINT FK_ManueleMeting_Vat FOREIGN KEY(VatID) REFERENCES Vat(VatID),
    &nbsp;  CONSTRAINT FK_ManueleMeting_SoortMeting FOREIGN KEY(SoortMetingID) REFERENCES SoortMeting(SoortMetingID)
);


CREATE TABLE Sensor(<br/>
    &nbsp;  SensorID INT NOT NULL AUTO_INCREMENT,
    &nbsp;  Naam VARCHAR(255),
    &nbsp;  SoortMetingID INT,
    &nbsp;  CONSTRAINT PK_Sensor PRIMARY KEY(SensorID),
    &nbsp;  ONSTRAINT FK_Sensor_SoortMeting FOREIGN KEY(SoortMetingID) REFERENCES SoortMeting(SoortMetingID)
);


CREATE TABLE AutomatischeMeting(<br/>
    &nbsp;  AutomatischeMetingID INT NOT NULL AUTO_INCREMENT,
    &nbsp;  Tijdstempel DATETIME,
    &nbsp;  VatID INT,
    &nbsp;  SensorID INT,
    &nbsp;  waarde DOUBLE,
    &nbsp;  CONSTRAINT PK_AutomatischeMeting PRIMARY KEY(AutomatischeMetingID),
    &nbsp;  CONSTRAINT FK_AutomatischeMeting_Vat FOREIGN KEY(VatID) REFERENCES Vat(VatID),
    &nbsp;  CONSTRAINT FK_AutomatischeMeting_Sensor FOREIGN KEY(SensorID) REFERENCES Sensor(SensorID)
);



CREATE TABLE AlarmWaarde(<br/>
    AlarmWaardeID INT NOT NULL AUTO_INCREMENT,
    SensorID INT,
    VatID INT,
    Drempel DOUBLE,
    CONSTRAINT PK_AlarmWaarde PRIMARY KEY(AlarmWaardeID),
    CONSTRAINT FK_AlarmWaare_Sensor FOREIGN KEY(SensorID) REFERENCES Sensor(SensorID)
);


CREATE TABLE SoortAlarm(<br/>
    &nbsp;  SoortAlarmID INT NOT NULL AUTO_INCREMENT,
    &nbsp;  Naam VARCHAR(255),
    &nbsp;  CONSTRAINT PK_SoortAlarm PRIMARY KEY(SoortAlarmID)
);


CREATE TABLE AlarmGebruiker(<br/>
    &nbsp;  AlarmGebruikerID INT NOT NULL AUTO_INCREMENT,
    &nbsp;  AlarmWaardeID INT,
    &nbsp;  SoortAlarmID INT,
    &nbsp;  vatID INT,
    &nbsp;  GebruikerID INT,
	&nbsp;  IsVerzondenSms BOOLEAN,
	&nbsp;  IsVerzondenEmail BOOLEAN,
    &nbsp;  CONSTRAINT PK_AlarmGebruiker PRIMARY KEY(AlarmGebruikerID),
    &nbsp;  CONSTRAINT FK_AlarmGebruiker_AlarmWaarde FOREIGN KEY(AlarmWaardeID) REFERENCES AlarmWaarde(AlarmWaardeID),
    &nbsp;  CONSTRAINT FK_AlarmGebruiker_SoortAlarm FOREIGN KEY(SoortAlarmID) REFERENCES SoortAlarm(SoortAlarmID),
    &nbsp;  CONSTRAINT FK_AlarmGebruiker_Vat FOREIGN KEY(VatID) REFERENCES Vat(VatID),
    &nbsp;  CONSTRAINT FK_AlarmGebruiker_Gebruiker FOREIGN KEY(GebruikerID) REFERENCES Gebruiker(PersoonID)
);

Wanneer de tabellen zijn aangemaakt, kunt u er al testdata inzetten. Zo kan u delen van de applicatie testen zonder dat het gedeelte van de sensoren ingesteld moet zijn.

### SQL code invoeren van testdata

INSERT<br/>
INTO<br/>
    &nbsp;  Gebruiker(<br/>
    &nbsp;    Naam,<br/>
    &nbsp;    Wachtwoord,<br/>
    &nbsp;    Email,<br/>
    &nbsp;    TelNummer,<br/>
     &nbsp;   IsAdmin<br/>
    &nbsp;  )<br/>
VALUES(<br/>
    &nbsp;  "Admin",<br/>
    &nbsp;  "Admin123",<br/>
    &nbsp;  "Admin@live.com",<br/>
    &nbsp;  "0483666666",<br/>
    &nbsp;  TRUE<br/>
),(<br/>
    &nbsp;  "WijnBoer",<br/>
    &nbsp;  "wijnboer123",<br/>
    &nbsp;  "wijnboer@live.com",<br/>
    &nbsp;  "0483555555",<br/>
    &nbsp;  FALSE<br/>
);


INSERT<br/>
INTO<br/>
    &nbsp;  SoortAlarm<br/>
VALUES(1, "SMS"),(2, "Email");<br/>


INSERT<br/>
INTO<br/>
    &nbsp;  SoortMeting(Naam)<br/>
VALUES("temperatuur"),("alcohol"),("druk"),("CO2"),("Ph"),("Troebelheid");<br/>


INSERT<br/>
INTO<br/>
   &nbsp;  SoortActie (Naam)<br/>
VALUES("toevoegen"),("overhevelen"),("afkoelen in diepvries"),("afkoelen in koelkast");<br/>

INSERT<br/>
INTO<br/>
    &nbsp;  Programma<br/>
VALUES(<br/>
    &nbsp;  1,<br/>
    &nbsp;  "Pers & push",<br/>
    &nbsp;  "Ca. 70 Liter",<br/>
    &nbsp;  "1,2 Bar"<br/>
);


INSERT<br/>
INTO<br/>
    &nbsp;  Druif(Naam)<br/>
VALUES("Cabernet Sauvignon"),("Airén"),("Merlot"),("Chardonnay"),("Sauvignon Blanc"),("Pinot Noir");<br/>


INSERT<br/>
INTO<br/>
    &nbsp;  Vat<br/>
VALUES(1, "Tank 1", "110 Kg", FALSE, 1, 6,100,NULL,TRUE);<br/>


INSERT<br/>
INTO<br/>
    &nbsp;  Actie<br/>
VALUES(<br/>
    &nbsp;  1,<br/>
    &nbsp;  "Gist",<br/>
    &nbsp;  NOW(), 1, 1, 1, "10 gram Gist");<br/>


INSERT<br/>
INTO<br/>
    &nbsp;  Sensor<br/>
VALUES(1, "Temperatuur Meten", 1),(2, "Ph Meten", 5);<br/>


INSERT<br/>
INTO<br/>
    &nbsp;  AlarmWaarde<br/>
VALUES(1, 1, 1, 31.5);<br/>

INSERT<br/>
INTO<br/>
    &nbsp;  AlarmGebruiker<br/>
VALUES(1, 1, 1, 1, 1,FALSE,NULL);<br/>

INSERT<br/>
INTO<br/>
    &nbsp;  AutomatischeMeting(<br/>
    &nbsp;    Tijdstempel,<br/>
    &nbsp;    VatID,<br/>
    &nbsp;    SensorID,<br/>
    &nbsp;    Waarde<br/>
    &nbsp;  )<br/>
VALUES(<br/>
    &nbsp;  ADDTIME(NOW(), '01:00:00'), 1, 1, 18),<br/>    
    &nbsp;  ADDTIME(NOW(), '02:00:00'), 1, 1, 20),<br/>
    &nbsp;  ADDTIME(NOW(), '08:00:00'), 1, 1, 38)<br/>


## Configuratie Grafana

Voordat u alle functionaliteiten van Grafana kunt gebruiken in de applicatie, moeten nog enkele configuraties aangepast worden.

Deze instellingen dienen aangemaakt te worden in de configuratiefile van Grafana. Deze kunt u vinden op de plaats waar u Grafana geïnstalleerd hebt. Deze file heeft als extensie ```.ini```.

Hieronder vindt u de instellingen die veranderd moeten worden.

### Auth.anonymous

enabled false --> veranderen naar 'enabled true'

### Auth.Proxy

enabled false --> veranderen naar 'enabled true'

### Security

allow_embedding false --> veranderen naar 'allow_embedding true'

U kan controleren of de instellingen juist zijn aangepast door in de webinterface van Grafana naar het volgende te gaan: 'server admin -> settings'. Hier zult u een lijst vinden van alle settings en configuraties van Grafana.

_de webinterface bereikt u in uw browser via 'http://host-ip:3000'_

![Grafana_settings](/{{site.RepoName}}/media/bi/grafana-settings.png)

## Datasource instellen

Voordat u begint te werken met uw eigen database, moet u het juiste pad instellen zodat de applicatie verbinding kan maken met de gemeten data.

Dit kan onder het menu 'Configuration -> Data Sources'. Hier maakt u een nieuwe datasource.

Bij 'MySQL Connection' vul je het volgende in: 
```
Host: ip adres van de database
Database: naam van de database
User: gebruikersnaam om in te loggen
Paswoord: paswoord van deze gebruiker
```

## Visualisatie maken

Eerst klikt u in het menu p het + icoontje. Vervolgens kiest u voor 'new dashboard'. Om een grafiek toe te voegen, klikt u bovenaan de pagina op 'add panel' ![Grafana-add](/{{site.RepoName}}/media/bi/grafana-add.png)

Een nieuw paneel zal verschijnen. Wanneer u op 'choose visualisation' klikt, kunt u de keuze maken tussen een reeks grafieken om uw data te tonen. Als u deze selecteert, zullen er allerlei opties verschijnen om de grafiek verder te personaliseren.

Als u met uw eigen data source wilt werken, moet u op het linkse icoontje klikken:
![Grafana-icoon](/{{site.RepoName}}/media/bi/grafana-icoon.png)
Vervolgens kiest u in het Query veld in de drop down list de data source die je net aangemaakt hebt.

De app zal er als volgt uitzien:

![Grafana-query](/{{site.RepoName}}/media/bi/grafana-query.png)

Je kan deze blokken slepen en toevoegen om zo het achterliggende SQL-script aan te passen. In het project hebben we ervoor gekozen om dit zelf te schrijven. Dit kunt u doen door onderaan op de blok 'Edit SQL' te klikken. Nu kunt u aan de hand van SQL queries de grafiek aanpassen. Bijvoorbeeld:

![Grafana-sql](/{{site.RepoName}}/media/bi/grafana-sql.png)

Verder op de knop van general kunt u de naam en descriptie van deze grafiek aanpassen.

![Grafana-general](/{{site.RepoName}}/media/bi/grafana-general.png)

Wanneer je een paneel toevoegt of bewerkt, is het altijd belangrijk om alles op te slaan door rechtsboven de pagina op het volgende icoon te klikken: 
![Grafana-opslaan](/{{site.RepoName}}/media/bi/grafana-opslaan.png)

Ten slotte kunt u ook nog het tijdslot kiezen vanaf wanneer je data wilt zien. Alle data dat buiten dit slot valt, zal niet getoond worden.
![Grafana-tijdslot](/{{site.RepoName}}/media/bi/grafana-tijdslot.png)

## Panelen exporteren naar website

We hebben voor ons project bewust gekozen voor Grafana omdat deze het zeer eenvoudig maakt om uw visualisaties te exporteren. Wanneer je op de titel van een paneel klikt, zal een menu tevoorschijn komen. Hier kiest u voor 'share':
![Grafana-share](/{{site.RepoName}}/media/bi/grafana-share.png)

Er zal een nieuw venster te zien zijn met verschillende opties om het paneel te delen. Kies hier bovenaan voor de optie 'embed'. De code die tevoorschijn komt, kan rechtstreeks in het html-gedeelte van de website gekopieerd worden zoals hieronder getoond. De huidige instellingen van dit paneel zullen allemaal mee overgedragen worden naar het paneel in de web applicatie. Het zal dus ook updaten om dezelfde ingestelde intervallen.
![Grafana-delen](/{{site.RepoName}}/media/bi/grafana-delen.png)

![Grafana-web](/{{site.RepoName}}/media/bi/grafana-web.png)









{% include footer.html %}
