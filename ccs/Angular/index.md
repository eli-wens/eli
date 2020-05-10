---
layout: default
title: Angular
author: Evi W.
---

{% include nav-breadcrumbs.html %}



# Angular

Welkom op de informatiepagina van Angular. 

![Angular logo](/{{ site.RepoName }}/media/logo/angular.png)

## Wat

Angular is een open-source front-end applicatie-ontwikkelingsplatform dat gebruikt wordt om mobiele en webapplicaties te bouwen. Het is ideaal voor kleine en grotere applicaties. 

Belangrijk voor het gebruiken van Angular, is de Angular CLI. In de volgende stappen wordt dit geïmplementeerd.

## Installatie

### Installeer Node.js
```
sudo curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash –
```

### Development tools installeren
```
sudo apt install -y build-essential
```

### Installeer Angular CLI
```
sudo npm install -g @angular/cli
```

De installatie is nu in orde. U kan de versie checken met volgend commando: ```ng --version ```

## Nieuw project aanmaken

### Project initialiseren
eerst zorgen dat u in de root directory zit
```
cd /var/www/html
sudo ng new tecmint-app
```

Let hier ook op uw antwoorden tijdens de prompting:

![Angular prompting](/{{ site.RepoName }}/media/logo/angular_prompting.png)

Nu is er automatisch een 'application directory' aangemaakt.

###  Begeef u naar de directory van de applicatie
```
cd tecmint-app
ls                 # list project files
ng serve
```
Met ‘ng serve’ zal de server de applicatie terug opbouwen en de webpagina herladen indien er veranderingen zijn aangebracht aan de source files.
Meer informatie over deze tool met ‘ng help’.

### Firewall settings

Om de app via de browser te bereiken, moet poort 4200 openstaan. Indien de firewall actief is, dient u deze aan te passen.

```
sudo ufw allow 4200/tcp
sudo ufw reload
```

### Browse naar applicatie
```
http://localhost:4200
of http://server-ip:4200
```
U kan zelf ook een host en een poort instellen als u wilt afwijken van de standaardinstellingen. Bijvoorbeeld:
```
ng serve --host 192.168.3.125 --port 8080
```

## Bronnen 

* [Angular Installation page](https://www.tecmint.com/install-angular-cli-on-linux/)
* [Angular CLI homepage](https://angular.io/cli)

{% include footer.html %}
