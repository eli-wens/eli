---
layout: default
title: IoT
author: -
---

{% include nav-breadcrumbs.html %}


# IoT

Welkom!

Op deze pagina vindt u informatie met betrekking tot het IoT-gedeelte.

Voor onze demo opstelling hebben we gekozen te werken met potentiometers. Deze vervangen de effectieve sensoren, daar het moeilijk was om deze te integreren in onze opstelling. 

Het zal dus nodig zijn dat u, bij gebruik van de echte sensoren, opzoekt hoe u deze moet connecteren met de Raspberry Pi.

## IoT schema

Hier ziet u het schema dat een demo opstelling weergeeft. Elk vat heeft een eigen Raspberry Pi, die de gegevens van de sensoren zal verzenden naar de applicatie. De sensoren dienen uiteraard vervangen te worden door de echte sensoren. Om deze aan te sluiten dient u toch enige kennis van IoT te hebben of hulp in te schakelen.

Met behulp van dit schema, kunt u de applicatie al testen.

![Iot-schema](/{{site.RepoName}}/media/iot/IoT-schema1.jpg)

_Hier ziet u hoe u alles dient aan te sluiten op de Raspberry Pi._

## Installatie Raspberry Pi

In deze sectie trachten we u zo duidelijk mogelijk uit te leggen hoe u met de Raspberry Pi aan de slag dient te gaan om deze voor te bereiden.

### Vereisten

* SD kaartje
* Ethernet kabel
* Micro USB naar USB kabel

### Verbinding met Raspberry Pi

Eerst moet u de laatste versie van [Raspbian downloaden](https://www.raspberry.org/downloads/raspbian) en mounten op uw SD kaartje. 
Wanneer u deze op uw SD kaart hebt gezet, kan de ethernet- en powerkabel aangesloten worden aan uw PC en uw Raspberry Pi.

Nu kan je de Raspberry Pi updaten en gereed maken voor het verdere gebruik van de omgeving. Verbinding maken met de Raspberry Pi kan met programma's zoals Putty of MobaXterm. Dit doet u door het IP adres van de Raspberry Pi in te geven. 
Indien u niet weet hoe dit adres te ontdekken, kan u [hier klikken](https://www.raspberrypi.org/documentation/remote-access/ip-address.md) om deze methodes te vinden.

De standaard username is 'pi' en het standaard wachtwoord is 'raspberry'. 

Wanneer dit gelukt is, komt u in een terminal terecht waar u Linux commando's kunt doorgeven aan de Raspberry Pi.

Omdat de Raspberry Pi niet automatisch met wifi verbonden is, is het gemakkelijk om bij de eerste setup via een ethernetkabel de Raspberry Pi te configureren. Hiervoor moet u naar uw netwerkinstellingen gaan op uw PC en de wifi delen met de ethernetpoort waar de Raspberry Pi op aangesloten is.

![iot-adapter](/{{site.RepoName}}/media/iot/iot-adapter2.png)

_Later kunt u ervoor kiezen om de Raspberry Pi draadloos in te stellen._

### Configuratie 

Om de Raspberry Pi volledig up te date te stellen, dient u de volgende commando's in te geven:

```
sudo apt update
sudo apt dist-upgrade
```
Wanneer de installatie klaar is, is het altijd een goed idee om ```sudo reboot```te runnen om de Raspberry Pi opnieuw op te starten.

Vervolgens gaat u de Raspberry Pi verbinden met een wifinetwerk. Dit doet u via de configuratie files. Om de juiste file te openen, voert u volgend commando in:
```
sudo nano /etc/wpa_supplicant/wpa_supplicant.conf
```
Hier past u het volgende aan:
```
network={
    ssid= "wifi netwerknaam"
    psk= "paswoord"
}
```
Nu kunt u de file opslagen met de toetsencombinatie ```ctrl+x```gevolgd met 'y'. Ook hier is het weer verstandig de Raspberry Pi opnieuw op te starten.

## Python script

Nu de Raspberry Pi klaar is voor gebruik, moet deze in het bezit zijn van het juiste Python script om de gegevens van de sensoren door te sturen naar de server. 

Om het het bestand van uw PC naar de Raspberry Pi over te zetten, sleept u dit gewoonweg naar de 'home/pi' map van de Raspberry Pi met Mobaxterm.
Elk script moet wel de extensie '.py' hebben om te werken. Bijvoorbeeld: test.py. Een script kan u maken met Notepad++, Kladblod, ... . 

De toelichting staat in het script zelf. Elk stukje code wordt in commentaar (in het groen) toegelicht.

![iot-script1](/{{site.RepoName}}/media/iot/iot-script1.JPG)
![Iot-script2](/{{site.RepoName}}/media/iot/iot-script2.JPG)
![Iot-script3](/{{site.RepoName}}/media/iot/iot-script3.JPG)
![Iot-script4](/{{site.RepoName}}/media/iot/iot-script4.JPG)

## Testen

Indien alles correct is aangesloten, kan u (indien alle componenten aanwezig zijn van de applicatie) het script testen.
Dit doet u met het commando ```sudo python naamScript.py```.



{% include footer.html %}
