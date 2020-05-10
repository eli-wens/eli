'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">frontend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-53f6c405532363d4ec4801a1df25451e"' : 'data-target="#xs-components-links-module-AppModule-53f6c405532363d4ec4801a1df25451e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-53f6c405532363d4ec4801a1df25451e"' :
                                            'id="xs-components-links-module-AppModule-53f6c405532363d4ec4801a1df25451e"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProcesOpstartComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProcesOpstartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsersBeherenComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsersBeherenComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link">DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-8890fa68122b71fc5c9989d7e8dd151e"' : 'data-target="#xs-components-links-module-DashboardModule-8890fa68122b71fc5c9989d7e8dd151e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-8890fa68122b71fc5c9989d7e8dd151e"' :
                                            'id="xs-components-links-module-DashboardModule-8890fa68122b71fc5c9989d7e8dd151e"' }>
                                            <li class="link">
                                                <a href="components/ActionsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ActionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InfoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MeasurementsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MeasurementsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalAddActivityComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalAddActivityComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalAddMeasurementComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalAddMeasurementComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalStopProcessComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalStopProcessComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavigationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavigationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-DashboardModule-8890fa68122b71fc5c9989d7e8dd151e"' : 'data-target="#xs-pipes-links-module-DashboardModule-8890fa68122b71fc5c9989d7e8dd151e"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-DashboardModule-8890fa68122b71fc5c9989d7e8dd151e"' :
                                            'id="xs-pipes-links-module-DashboardModule-8890fa68122b71fc5c9989d7e8dd151e"' }>
                                            <li class="link">
                                                <a href="pipes/SafePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SafePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProcessOverviewModule.html" data-type="entity-link">ProcessOverviewModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProcessOverviewModule-6cb44f98066d4b9169c64e8fdf2164e6"' : 'data-target="#xs-components-links-module-ProcessOverviewModule-6cb44f98066d4b9169c64e8fdf2164e6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProcessOverviewModule-6cb44f98066d4b9169c64e8fdf2164e6"' :
                                            'id="xs-components-links-module-ProcessOverviewModule-6cb44f98066d4b9169c64e8fdf2164e6"' }>
                                            <li class="link">
                                                <a href="components/CardStyle1Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardStyle1Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardTemplateBaseComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardTemplateBaseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProcessCardsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProcessCardsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProcessCardsItemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProcessCardsItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProcessOverviewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProcessOverviewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-ProcessOverviewModule-6cb44f98066d4b9169c64e8fdf2164e6"' : 'data-target="#xs-directives-links-module-ProcessOverviewModule-6cb44f98066d4b9169c64e8fdf2164e6"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-ProcessOverviewModule-6cb44f98066d4b9169c64e8fdf2164e6"' :
                                        'id="xs-directives-links-module-ProcessOverviewModule-6cb44f98066d4b9169c64e8fdf2164e6"' }>
                                        <li class="link">
                                            <a href="directives/CardsDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardsDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/NavigationComponent-1.html" data-type="entity-link">NavigationComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Actie.html" data-type="entity-link">Actie</a>
                            </li>
                            <li class="link">
                                <a href="classes/ActieDTO.html" data-type="entity-link">ActieDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/AlarmGebruiker.html" data-type="entity-link">AlarmGebruiker</a>
                            </li>
                            <li class="link">
                                <a href="classes/AlarmWaarde.html" data-type="entity-link">AlarmWaarde</a>
                            </li>
                            <li class="link">
                                <a href="classes/Druif.html" data-type="entity-link">Druif</a>
                            </li>
                            <li class="link">
                                <a href="classes/Gebruiker.html" data-type="entity-link">Gebruiker</a>
                            </li>
                            <li class="link">
                                <a href="classes/ManueleMetingDTO.html" data-type="entity-link">ManueleMetingDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/Materiaal.html" data-type="entity-link">Materiaal</a>
                            </li>
                            <li class="link">
                                <a href="classes/Programma.html" data-type="entity-link">Programma</a>
                            </li>
                            <li class="link">
                                <a href="classes/RaspberryPi.html" data-type="entity-link">RaspberryPi</a>
                            </li>
                            <li class="link">
                                <a href="classes/Sensor.html" data-type="entity-link">Sensor</a>
                            </li>
                            <li class="link">
                                <a href="classes/SoortActie.html" data-type="entity-link">SoortActie</a>
                            </li>
                            <li class="link">
                                <a href="classes/SoortAlarm.html" data-type="entity-link">SoortAlarm</a>
                            </li>
                            <li class="link">
                                <a href="classes/SoortMeting.html" data-type="entity-link">SoortMeting</a>
                            </li>
                            <li class="link">
                                <a href="classes/SoortWijn.html" data-type="entity-link">SoortWijn</a>
                            </li>
                            <li class="link">
                                <a href="classes/TypeVat.html" data-type="entity-link">TypeVat</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserLogin.html" data-type="entity-link">UserLogin</a>
                            </li>
                            <li class="link">
                                <a href="classes/Vat.html" data-type="entity-link">Vat</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ActieService.html" data-type="entity-link">ActieService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AlarmGebruikerService.html" data-type="entity-link">AlarmGebruikerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AlarmWaardeService.html" data-type="entity-link">AlarmWaardeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DashboardService.html" data-type="entity-link">DashboardService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DruifService.html" data-type="entity-link">DruifService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GebruikerService.html" data-type="entity-link">GebruikerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginService.html" data-type="entity-link">LoginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ManueleMetingService.html" data-type="entity-link">ManueleMetingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MateriaalService.html" data-type="entity-link">MateriaalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProgrammaService.html" data-type="entity-link">ProgrammaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RaspberryPiService.html" data-type="entity-link">RaspberryPiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SensorService.html" data-type="entity-link">SensorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SoortActieService.html" data-type="entity-link">SoortActieService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SoortAlarmService.html" data-type="entity-link">SoortAlarmService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SoortMetingService.html" data-type="entity-link">SoortMetingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SoortWijnService.html" data-type="entity-link">SoortWijnService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TypeVatService.html" data-type="entity-link">TypeVatService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VatService.html" data-type="entity-link">VatService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/SecurityInterceptor.html" data-type="entity-link">SecurityInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthAdminGuard.html" data-type="entity-link">AuthAdminGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/DashboardResolver.html" data-type="entity-link">DashboardResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/ProcessOverviewResolver.html" data-type="entity-link">ProcessOverviewResolver</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});