---
layout: default
title: Grafana
author: Evi W.
---

{% include nav-breadcrumbs.html %}



# Grafana

Welkom op de informatiepagina van Grafana.

![Grafana_logo](/{{ site.RepoName }}/media/logo/grafana_logo.png)

## Wat

Grafana is een open-sourceplatform voor gegevensbewaking, -analyse en -visualisatie en wordt geleverd met een webserver waardoor het overal toegankelijk is.

In de webinterface kunnen gebruikers Grafana-dashboards met panelen maken om statistieken in de loop van de tijd weer te geven.

## Installatie

Hier vindt u hoe u deze software installeert. We gaan ervan uit dat u het OS ‘Ubuntu’ reeds hebt geïnstalleerd. Zo niet, moet u eerst deze installatie uitvoeren. Onderaan de pagina bij 'Bronnen' vindt u een link naar deze installatie.

### Ubuntu up to date zetten
```
sudo apt update
```

### Voeg de gpg key toe zodat u gesigneerde pakketten kan afhalen & installeer de repository
```
sudo apt-get install -y gnupg2 curl software-properties-common
curl https://packages.grafana.com/gpg.key | sudo apt-key add –
sudo add-apt-repository “deb https://packages.grafana.com/oss/deb stable main”
```
Indien u de foutmelding “add-apt-repository command not found” krijgt, kan u dit oplossen via volgende link: [Add repository](https://computingforgeeks.com/how-to-install-add-apt-repository-on-debian-ubuntu/) 

### Update de apt repositories & installeer Grafana
```
sudo apt-get update
sudo apt-get -y install grafana
```

### Start grafana service
```
sudo systemctl start grafana-server
```

Nu zou de service moeten draaien. Dit kunt u controleren met het commando ```systemctl status grafana-server.service```

U kunt er ook voor zorgen dat deze service automatisch wordt gestart bij het opstarten van de server met het commando ```sudo update-rc.d grafana-server defaults```

## Aanvullende stappen

Default gebruikt grafana poort 3000. Ubuntu wordt geïnstalleerd met de ufw firewall. Daarom moet u ervoor zorgen dat deze poort openstaat: ```sudo ufw allow 3000/tcp```

Gebruik het grafana dashboard met host IP adres & poort 3000.
```
http://host-ip:3000
Username: admin
Password:  admin
```



## Bronnen 
* [Grafana v6.6 Download & installation page](https://grafana.com/docs/grafana/latest/installation/debian/)
* [What is Grafana? ](https://techexpert.tips/nl/grafana-nl/grafana-monitoring-snmp-apparaten/)
* [Deploy Video tutorial](https://www.youtube.com/watch?v=zq_Ft-GJCho)
* [Ubuntu Installation](https://www.fosslinux.com/6406/how-to-install-ubuntu-server-18-04-lts.htm)

{% include footer.html %}
