---
layout: default
title: Database Verbinding ASP.NET 
author: Rob V.L.
---

{% include nav-breadcrumbs.html %}

# ASP.net verbinden met database
![DBs](/{{ site.RepoName }}/media/logo/asp_db.png)


## Instellen
Om te verbinden met de database moet de ASP.net code van de API nog aangepast worden en een extra dotnet package geïnstalleerd worden. Na deze 3 wijzigingen kan de API met de database verbinden.

### Package installeren
Ga naar de map waar uw project staat en installeer via 'dotnet add package' het volgende pakket: 'Pomelo.EntityFrameworkCore.MySql versie 2.2.6'. Dit pakket zorgt ervoor dat het DOTNET framework met de MySQL database kan communiceren.
```
dotnet add package Pomelo.EntityFrameworkCore.MySql --version 2.2.6-rc1-final
```
### Appsettings.json
In het bestand 'appsettings.json' moet u opgeven met welke database u gaat verbinden. 
Verander de DefaultConnection string naar de volgende indeling en geef de juiste gegevens op.
```
"DefaultConnection": "server=192.168.3.130;port=3306;database=Rewined;uid=***;password=***"
```
### Startup.cs
In het bestand 'Startup.json' moet u opgeven dat u met MySQL werkt in plaats van met een Microsoft SQL database.
Daarom moet u bij *'AddDbContext'* de optie *'UseSqlServer'* vervangen door *'UseMySql'*.
```
services.AddDbContext<RewinedContext>(options =>  options.UseMySql(Configuration.GetConnectionString("DefaultConnection")));
```

## Zie ook
* [Installatie ASP.NET](/{{site.RepoName}}/CCS/ASP_net/)
* [Installatie MySQL](/{{site.RepoName}}/CCS/MySQL/)


## Bronnen
* [Nuget page - Pomelo.EntityFrameworkCore.MySql](https://www.nuget.org/packages/Pomelo.EntityFrameworkCore.MySql/2.2.6)
* [Github Pomelo](https://github.com/PomeloFoundation/Pomelo.EntityFrameworkCore.MySql)

{% include footer.html %}
