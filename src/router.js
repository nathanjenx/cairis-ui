/*  Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.

    Authors: Shamal Faily */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/asset/:objectName',
      name: 'asset',
      component: () => import('./views/AssetView.vue'),
      props: true
    },
    {
      path: '/assets',
      name: 'assets',
      component: () => import('./views/Assets.vue')
    },
    {
      path: '/assetmodel',
      name: 'assetmodel',
      component: () => import('./views/AssetModelView.vue')
    },
    {
      path: '/attacker/:objectName',
      name: 'attacker',
      component: () => import('./views/AttackerView.vue'),
      props: true
    },
    {
      path: '/attackers',
      name: 'attackers',
      component: () => import('./views/Attackers.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/counteremeasures',
      name: 'countermeasures',
      component: () => import('./views/Countermeasures.vue')
    },
    {
      path: '/dataflowdiagram',
      name: 'dataflowdiagram',
      component: () => import('./views/DataFlowDiagramView.vue')
    },
    {
      path: '/dataflows',
      name: 'dataflows',
      component: () => import('./views/DataFlows.vue')
    },
    {
      path: '/dataflow/:objectName/environment/:envName',
      name: 'dataflow',
      component: () => import('./views/DataFlowView.vue'),
      props: true
    },
    {
      path: '/dependencies',
      name: 'dependencies',
      component: () => import('./views/Dependencies.vue')
    },
    {
      path: '/dependency/environment/:envName/depender/:depName/dependee/:deeName/dependency/:dpyName',
      name: 'dependency',
      component: () => import('./views/DependencyView.vue'),
      props: true
    },
    {
      path: '/documentation',
      name: 'documentation',
      component: () => import('./views/DocumentationView.vue')
    },
    {
      path: '/documentreferences',
      name: 'documentreferences',
      component: () => import('./views/DocumentReferences.vue')
    },
    {
      path: '/documentreference/:objectName',
      name: 'documentreference',
      component: () => import('./views/DocumentReferenceView.vue'),
      props: true
    },
    {
      path: '/domainproperties',
      name: 'domainproperties',
      component: () => import('./views/DomainProperties.vue')
    },
    {
      path: '/domainproperties/:objectName',
      name: 'domainproperty',
      component: () => import('./views/DomainPropertyView.vue'),
      props: true
    },
    {
      path: '/environments',
      name: 'environments',
      component: () => import('./views/Environments.vue')
    },
    {
      path: '/export',
      name: 'export',
      component: () => import('./views/ExportView.vue')
    },
    {
      path: '/externaldocuments',
      name: 'externaldocuments',
      component: () => import('./views/ExternalDocuments.vue')
    },
    {
      path: '/externaldocument/:objectName',
      name: 'externaldocument',
      component: () => import('./views/ExternalDocumentView.vue'),
      props: true
    },
    {
      path: '/environment/:objectName',
      name: 'environment',
      component: () => import('./views/EnvironmentView.vue'),
      props: true
    },
    {
      path: '/goalmodel',
      name: 'goalmodel',
      component: () => import('./views/GoalModelView.vue')
    },
    {
      path: '/goals',
      name: 'goals',
      component: () => import('./views/Goals.vue')
    },
    {
      path: '/goal/:objectName',
      name: 'goal',
      component: () => import('./views/GoalView.vue'),
      props: true
    },
    {
      path: '/import',
      name: 'import',
      component: () => import('./views/ImportView.vue')
    },
    {
      path: '/kaosassociations',
      name: 'kaosassociations',
      component: () => import('./views/KaosAssociations.vue')
    },
    {
      path: '/kaosassociation/environment/:envName/goal/:goalName/subgoal/:subGoalName',
      name: 'kaosassociation',
      component: () => import('./views/KaosAssociationView.vue'),
      props: true
    },
    {
      path: '/locationsmodel',
      name: 'locationsmodel',
      component: () => import('./views/LocationsModelView.vue')
    },
    {
      path: '/obstacles',
      name: 'obstacles',
      component: () => import('./views/Obstacles.vue')
    },
    {
      path: '/obstacle/:objectName',
      name: 'obstacle',
      component: () => import('./views/ObstacleView.vue'),
      props: true
    },
    {
      path: '/obstaclemodel',
      name: 'obstaclemodel',
      component: () => import('./views/ObstacleModelView.vue')
    },
    {
      path: '/personacharacteristics',
      name: 'personacharacteristics',
      component: () => import('./views/PersonaCharacteristics.vue')
    },
    {
      path: '/personacharacteristic/:objectName',
      name: 'personacharacteristic',
      component: () => import('./views/PersonaCharacteristicView.vue'),
      props: true
    },
    {
      path: '/personamodel',
      name: 'personamodel',
      component: () => import('./views/PersonaModelView.vue')
    },
    {
      path: '/personas',
      name: 'personas',
      component: () => import('./views/Personas.vue')
    },
    {
      path: '/persona/:objectName',
      name: 'persona',
      component: () => import('./views/PersonaView.vue'),
      props: true
    },
    {
      path: '/properties',
      name: 'properties',
      component: () => import('./views/PropertiesView.vue')
    },
    {
      path: '/requirementmodel',
      name: 'requirementmodel',
      component: () => import('./views/RequirementModelView.vue')
    },
    {
      path: '/requirements',
      name: 'requirements',
      component: () => import('./views/Requirements.vue')
    },
    {
      path: '/requirement/:objectName',
      name: 'requirement',
      component: () => import('./views/RequirementView.vue'),
      props: true
    },
    {
      path: '/responses',
      name: 'responses',
      component: () => import('./views/Responses.vue')
    },
    {
      path: '/response/:objectName',
      name: 'response',
      component: () => import('./views/ResponseView.vue'),
      props: true
    },
    {
      path: '/responsibilitymodel',
      name: 'responsibilitymodel',
      component: () => import('./views/ResponsibilityModelView.vue')
    },
    {
      path: '/riskmodel',
      name: 'riskmodel',
      component: () => import('./views/RiskModelView.vue')
    },
    {
      path: '/risks',
      name: 'risks',
      component: () => import('./views/Risks.vue')
    },
    {
      path: '/risk/:objectName',
      name: 'risk',
      component: () => import('./views/RiskView.vue'),
      props: true
    },
    {
      path: '/roles',
      name: 'roles',
      component: () => import('./views/Roles.vue')
    },
    {
      path: '/roles/:objectName',
      name: 'role',
      component: () => import('./views/RoleView.vue'),
      props: true
    },
    {
      path: '/securitypatterns',
      name: 'securitypatterns',
      component: () => import('./views/SecurityPatterns.vue')
    },
    {
      path: '/taskmodel',
      name: 'taskmodel',
      component: () => import('./views/TaskModelView.vue')
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: () => import('./views/Tasks.vue')
    },
    {
      path: '/task/:objectName',
      name: 'task',
      component: () => import('./views/TaskView.vue'),
      props: true
    },
    {
      path: '/threats',
      name: 'threats',
      component: () => import('./views/Threats.vue')
    },
    {
      path: '/threat/:objectName',
      name: 'threat',
      component: () => import('./views/ThreatView.vue'),
      props: true
    },
    {
      path: '/trustboundaries',
      name: 'trustboundaries',
      component: () => import('./views/TrustBoundaries.vue')
    },
    {
      path: '/trustboundary/:objectName',
      name: 'trustboundary',
      component: () => import('./views/TrustBoundaryView.vue'),
      props: true
    },
    {
      path: '/usecases',
      name: 'usecases',
      component: () => import('./views/UseCases.vue')
    },
    {
      path: '/usecase/:objectName',
      name: 'usecase',
      component: () => import('./views/UseCaseView.vue'),
      props: true
    },
    {
      path: '/validationmodel',
      name: 'validationmodel',
      component: () => import('./views/ValidationView.vue')
    },
    {
      path: '/vulnerabilities',
      name: 'vulnerabilities',
      component: () => import('./views/Vulnerabilities.vue')
    },
    {
      path: '/vulnerabilities/:objectName',
      name: 'vulnerability',
      component: () => import('./views/VulnerabilityView.vue'),
      props: true
    },
    {
      path: '*',
      name: 'NotFound',
      component: () => import('./components/NotFound.vue')
    }
  ]
})
