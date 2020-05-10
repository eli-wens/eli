---
layout: default
title: Proxmox
author: Rob V.L.
---

{% include nav-breadcrumbs.html %}



# Proxmox

Welkom op de informatiepagina van Proxmox.

![Proxmox](/{{ site.RepoName }}//media/logo/proxmox.png)

## Wat
Proxmox VE is een op Linux gebaseerde open-source virtualisatie oplossing. In principe is het een Debian (Ubuntu) distro met een aangepaste kernel waar een virtualisatie omgeving bovenop gebouwd is. De distro is zo aangepast dat het virtuele machines en containers kan draaien in de virtuele omgeving. Daarnaast kan Proxmox deze machines en containers ook beheren. Dit kan via de commandline of via een webinterface waar een tal van opties mogelijk zijn. 

* Proxmox wordt gratis aangeboden en heeft een betalende support dienst
* Proxmox VE 6.1 is de recentste versie
* Eenvoudig te beheren & installeren
* Bevat veel ingebouwde opties zoals: 
    * backup
    * live migration
    * high availibility
    * firewall
* Kan zowel Windows, Mac als Linux machines virtualiseren


## Installatie 
Proxmox is eenvoudig te installeren aan de hand van de [ISO image](https://www.proxmox.com/en/downloads/category/iso-images-pve) die u kunt downloaden via de [Proxmox website](https://www.proxmox.com/en/). De installatie zelf spreekt voor zich en is eenvoudig te voltooien via de installatie wizard.

### ISO booten
Je kan de ISO op 2 manieren booten. Er zijn namelijk 2 bootmedia; USB of CD/DVD.

#### CD/DVD
Download de iso op een pc met CD/DVD writer en plaats een lege CD/DVD in de lezer.
Vervolgens rechterklikt u op de gedownloadde ISO en kiest u 'Burn disc Image'. Kies het juiste station en geef eventueel een naam in.
Klik op 'branden' en wacht tot het branden van CD/DVD is afgelopen.

#### USB
Voor het maken van een bootable USB kunt u gebruikmaken van het programma [BalenaEtcher](https://www.balena.io/etcher/). Download dit programma en installeer.
Open BalenaEtcher na installatie en selecteer je ISO image. Kies dan de USB die u wilt gebruiken. Tot slot kiest u voor 'flash' of 'branden' en wacht u tot het klaarmaken van de bootable USB is afgerond.

__DIT FORMATTEERT DE USB EN DAARMEE DUS ALLE AANWEZIGE DATA. ZORG DAT JE DE JUISTE USB SELECTEERT!__

### Installatie op host
Plaats de USB of CD/DVD in de host waar u Proxmox wilt installeren. Stel de boot-order zo in dat de USB of CD/DVD eerst gekozen wordt in het bootprocess.
Start de host op en wacht tot het Proxmox logo verschijnt met een keuzemenu.
* Kies 'Install Proxmox VE'
* Selecteer op welke schijf u Proxmox wilt installeren
* Geef plaats, tijd & toetsenbordinstellingen in
* Stel een wachtwoord voor de root account & geef e-mailadress op
* Stel netwerkinformatie in
* Bekijk overzicht met de gemaakte keuzes
* Voltooi de installatie 

![install](/{{ site.RepoName }}/media/proxmox/install.gif)

### Webinterface
Na de installatie kunt u de webinterface bezoeken via uw browser, via ```https://IP.Adress:8006```.

U wordt gevraagd om in te loggen. Dit kan met de username 'root' en het ingestelde wachtwoord.
![install](/{{ site.RepoName }}/media/proxmox/login.png)
![install](/{{ site.RepoName }}/media/proxmox/interface.png)

## Zie ook
[Backup Vm's](/{{ site.RepoName }}/CCS/Backup)

## Bronnen 
* [Proxmox installation guide](https://pve.proxmox.com/wiki/Installation)
* [Installation video tutorial](https://www.youtube.com/watch?v=I-e1_CTa4s0)
* [Interface overview video](https://www.youtube.com/watch?v=GHzMaTar0fw)
{% include footer.html %}
