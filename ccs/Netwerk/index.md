---
layout: default
title: Netwerk
author: Rob V.L.
---

{% include nav-breadcrumbs.html %}



# Netwerk
Welkom op de informatiepagina van Netwerk. Hier vindt u meteen het netwerkschema van de opstelling van de netwerkomgeving.


## Netwerk
![netwerk](/{{ site.RepoName }}/media/netwerk/netwerk.png)

## Werking netwerk
Om de werking van het netwerk duidelijk te maken, geven we graag even volgende toeliching op basis van bovenstaande afbeelding.

Via [DNS](/{{ site.RepoName }}/CCS/DNS) komen alle requests binnen op het publiek IP van de Proximus modem, van op de modem moeten alle request toegelaten worden en op de juiste plaats terechtkomen. Via poortnummers en portforwarding gaan we de requests doorsturen naar de juiste plaats. Dit gebeurt op 3 plaatsen namelijk 
* Proximus modem (naar pfsense)
* pfSense (naar proxy)
* proxy (naar juiste VM)

### VMs

| VM           | Software     | int IP        | IP           |Link                                                    |
|--------------|--------------|---------------|--------------|--------------------------------------------------------|
| Firewall     | PfSense      | 192.168.3.100 | 10.10.10.1   |                                                        |
| Proxy        | Apache       | /             | 10.10.10.10  |[Web](https://rob-vl.synology.me:3400)                  |
| API          | ASP.net      | 192.168.3.101 | 10.10.10.101 |[API](https://rob-vl.synology.me:3401/swagger)          |
| Frontend     | Angularjs    | 192.168.3.102 | 10.10.10.102 |[Frontend](https://rob-vl.synology.me:3402)             |
| Database     | MySQL        | 192.168.3.103 | 10.10.10.103 |[Phpmyadmin](https://rob-vl.synology.me:3403/phpmyadmin)|
| Visualisatie | Grafana      | 192.168.3.104 | 10.10.10.104 |[Grafana](https://rob-vl.synology.me:3404)              |


## Forwarding voorbeeld 
![forwarding](/{{ site.RepoName }}/media/netwerk/forwarding.png)


### Portforwarding Proximus modem

| Port | VM        | forward IP     | forward Port |
|------|-----------|----------------|--------------|
| 3400 | pfSense   | 192.168.3.100  | 3400         |
| 3401 | pfSense   | 192.168.3.100  | 3401         |
| 3402 | pfSense   | 192.168.3.100  | 3402         |
| 3403 | pfSense   | 192.168.3.100  | 3403         |
| 3404 | pfSense   | 192.168.3.100  | 3404         |


### Portforwarding pfSense Firewall

| Port | VM        | forward IP     | forward Port |
|------|-----------|----------------|--------------|
| 22   | Proxy     | 10.10.10.10    | 22           |
| 80   | Proxy     | 10.10.10.10    | 80           |
| 3400 | Proxy     | 10.10.10.10    | 80           |
| 3401 | Proxy     | 10.10.10.10    | 3401         |
| 3402 | Proxy     | 10.10.10.10    | 3402         |
| 3403 | Proxy     | 10.10.10.10    | 3403         |
| 3404 | Proxy     | 10.10.10.10    | 3404         |


## Zie ook 
* [Interface VM instellen](/{{ site.RepoName }}/CCS/Netwerk/Interfaces)
* [DNS](/{{ site.RepoName }}/CCS/DNS)
* [Proxy](/{{ site.RepoName }}/CCS/Proxy)


## Bronnen 
* [What is Portforwarding](https://www.lifewire.com/what-is-port-forwarding-2483494)

{% include footer.html %}
