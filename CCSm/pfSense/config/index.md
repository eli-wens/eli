---
layout: default
title: Configuratie pfSense Rules
author: Rob V.L.
---

{% include nav-breadcrumbs.html %}

# Firewall Rules
![pfSense](/{{site.RepoName}}/media/logo/pfSense.png)
![rules](/{{site.RepoName}}/media/logo/rules.png)

## Wat
Om ervoor te zorgen dat niet al het verkeer wordt geblokkeerd door de firewall, moet u enkele regels definiëren. Deze regels verklaren dat er wel verkeer toegelaten is van buitenaf. In dit geval http(s) queries naar de Proxy VM.

## Regels instellen 
Via de webinterface kunt u de regels instellen op een eenvoudige wijze.
* Kies Firewall in het menu bovenaan
* Kies vervolgens voor de optie NAT (Network address Translation)
* Standaard komt u op het tabblad 'portforwarding' uit
* Kies onderaan 'Add' om een nieuwe regel in te stellen
    * duid het juiste transport protocol aan; TCP, UDP of TCP/UDP
    * geef de inkomende poortnummer in bij ```Destination port range```
    * geef het forwarding IP bij ```Redirect Target IP```
    * geef de uitgaande poortnummer in bij ```Redirect Target Ports``` 
    * het is handig als u ook een beschrijving meegeeft
* Klik save en reload/refresh de configuration.

![pfSense](/{{site.RepoName}}/media/pfSense/rules.png)

Op bovenstaande screenshot ziet u de aanwezige regels die bepalen welk verkeer wordt toegelaten en geforward wordt naar de ingestelde IP's en ports.


## Zie ook
* [Installatie pfSense](/{{site.RepoName}}/CCS/pfSense/)
* [Netwerk](/{{site.RepoName}}/CCS/Netwerk/)

## Bronnen 
* [pfSense in Proxmox guide ](https://docs.netgate.com/pfsense/en/latest/virtualization/virtualizing-pfsense-with-proxmox.html)
* [pfSense installation guide ](https://docs.netgate.com/pfsense/en/latest/install/installing-pfsense.html)


{% include footer.html %}
