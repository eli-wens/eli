---
layout: default
title: Pull angular 
author: Rob V.L.
---

{% include nav-breadcrumbs.html %}

# Pull & deploy 
![bash](/{{ site.RepoName }}/media/logo/bash.png)
![github](/{{ site.RepoName }}//media/logo/github.png)

## Pull script
Om de nieuwste versie van de Angular code online te brengen moet u enkele stappen uitvoeren. Om dit process te vereenvoudigen maakt u gebruik van onderstaand script. Dit script zal de volgende stappen uitvoeren:
* De oude build omgeving opkuisen en verwijderen
* Recentste code van github downloaden
* De juiste userrechten instellen
* Angular dependancies installeren
* Aanpassing maken in node_modules
* Angular code builden of compileren --> Typescript naar javascript
* De gecompileerde code verplaatsen naar nginx directory 

### Bash script
```
#! /bin/bash

echo -e "\e[32mDeleting old Repo\e[39m"
sudo rm -rf /home/project/Project-4.0-Frontend

echo -e "\e[32mcloning new files from git\e[39m"
git clone https://github.com/BoszS/Project-4.0-Frontend.git

echo -e "\e[32mchanching rights\e[39m"
sudo chown project Project-4.0-Frontend
sudo chmod 774 Project-4.0-Frontend

echo -e "\e[32mMoving to git repo\e[39m"
cd /home/project/Project-4.0-Frontend

echo -e "\e[32minstalling dependancies\e[39m"
npm install @angular-devkit/build-angular@0.801.1

echo -e "\e[32mEditing node_modules\e[39m"
sed -i 's/    private setPage(page);/    public setPage(page);/g' /home/project/Project-4.0-Frontend/node_modules/jw-angular-pagination/lib/jw-pagination.component.d.ts

echo -e "\e[32mBuilding\e[39m"
sudo ng build --prod=true

echo -e "\e[32mDeleting old files\e[39m"
sudo rm -rf /var/www/html/

echo -e "\e[32mCopying files to /var/www/html\e[39m"
sudo cp -r /home/project/Project-4.0-Frontend/dist/Frontend /var/www/html
```

### Git credentials opslaan
Standaard zal Linux de opgegeven username en wachtwoord niet bewaren. Echter kunt u ervoor zorgen dat, eenmaal de juiste credentials ingegeven worden, deze ook worden opgeslagen zodat deze niet elke keer ingegeven moeten worden. Let er wel op dat uw credentials dan als tekstbestand in je home directory terechtkomen. Door volgend commando in te geven zullen credentials binnen uw Linux account worden opgeslagen. 

```
git config --global credential.helper store
```


## Zie ook
* [Installatie Angular](/{{site.RepoName}}/CCS/Angular/)
* [API - Pull & Deploy script](/{{site.RepoName}}/APP/Pull_API/)

## Bronnen
* [Credentials opslaan](https://git-scm.com/docs/git-credential-store)


{% include footer.html %}
