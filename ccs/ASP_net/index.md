---
layout: default
title: ASP.NET
author: Rob V.L.
---

{% include nav-breadcrumbs.html %}


# ASP.net

Welkom op de informatiepagina van ASP.net.

![ASP.net](/{{site.RepoName}}/media/logo/asp.net.png)
![ASP.net](/{{site.RepoName}}/media/logo/dotnet.png)


## Wat
Asp.net is een framework dat draait bovenop het dotnet core framework van Microsoft. Het is crossplatform en kan dus op zowel Windows, Linux als Mac runnen.

## Installatie 
De API is geschreven in .netcore 2.2 en dit is de versie die u gaat installeren. 

### Repository toevoegen
```
wget -q https://packages.microsoft.com/config/ubuntu/18.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
```

### Installeren .NET, ASP.net & SDK
```
sudo add-apt-repository universe
sudo apt-get update
sudo apt-get install apt-transport-https
sudo apt-get install dotnet-runtime-2.2
sudo apt-get install aspnetcore-runtime-2.2
sudo apt-get install dotnet-sdk-2.2
```

## Uitleg werking a.d.h.v testapp
* Maak en ga naar nieuwe map
* Create nieuwe app via ```dotnet new webapp ```
    * u kiest het template webapp, dit gebruikt ASP.net
* Start app via ```dotnet run```
    * de applicatie draait nu
    * maar is enkel alleen voor localhost bereikbaar
    * andere machines kunnen er dus niet naartoe browsen
* Onderbreek de app via 'ctrl + c'
* Open ```Properties/launchSettings.json``` in een editor
* De regel 'applicationUrl' bepaalt de URL, http protocol en poort
    * verander localhost naar *, zo kan iedere machine de app bereiken 
    * u kunt zelf poorten aanpassen
    * u kunt ook enkel http gebruiken door https te verwijderen
* Start de app opnieuw via ```dotnet run```
    * nu kunt u met een andere machine aan de applicatie

## Samengevat
* ```dotnet new webapp``` maakt app aan
* ```dotnet new run``` start de applicatie
* ```Properties/launchSettings.json``` bevat de URL eigenschappen


## Zie ook
* [API verbinden met Database](/{{site.RepoName}}/APP/ASP_DB/)


## Bronnen 
* [.NET Core 2.2 Download page](https://dotnet.microsoft.com/download/dotnet-core/2.2)
* [Install instructions (Ubuntu 18.04)](https://docs.microsoft.com/nl-nl/dotnet/core/install/linux-package-manager-ubuntu-1804)
* [Deploy Video tutorial](https://www.youtube.com/watch?v=6VK370-Yk3A)

{% include footer.html %}
