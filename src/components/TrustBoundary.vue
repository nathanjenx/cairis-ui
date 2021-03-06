<template>
<!--  
Licensed to the Apache Software Foundation (ASF) under one
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

Authors: Shamal Faily 
-->

  <div class="trustboundary">
    <dimension-modal ref="environmentDialog" dimension="environment" :existing="environmentNames" v-on:dimension-modal-update="addTrustBoundaryEnvironmentProperty"/> 
    <trust-boundary-component-modal ref="compDialog" :environment="environmentName" v-on:trust-boundary-component-modal-update="addTrustBoundaryComponent"/> 
    <p v-if="errors.length">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </p>
    <b-form>
      <b-container fluid>
        <b-card bg-variant="light">
          <b-row>
            <b-col md="12">
              <b-form-group label="Trust Boundary" label-class="font-weight-bold text-md-left" label-cols="2" label-for="theTrustBoundaryInput">
                <b-form-input id="theTrustBoundaryInput" v-model="objt.theName" type="text" required>
                </b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="12">
            <b-form-group label="Description" label-class="font-weight-bold text-md-left" label-for="theDescriptionInput">
              <b-form-textarea id="theDescriptionInput" v-model="objt.theDescription" type="text" :rows=2 :max-rows=4 required>
              </b-form-textarea>
            </b-form-group>
            </b-col>
          </b-row>
        </b-card>
      </b-container>

      <b-container fluid>
        <b-card header="Environments" class="text-left">
          <template slot="header">
            <font-awesome-icon icon="plus" :style="{color: 'green'}" @click.stop="addEnvironment"/> Environment
          </template> 
          <b-row>
            <b-col sm="12">
              <b-tabs pills v-model="envPropIndex">
                <b-tab v-for="envProp in this.objt.theEnvironmentProperties" :key="envProp.theEnvironmentName" :title=envProp.theName>
                  <template slot="title">
                    <font-awesome-icon icon="minus" :style="{color: 'red'}" @click="deleteEnvironment(envProp.theEnvironmentName)"/>  {{envProp.theEnvironmentName}}
                  </template> 
                </b-tab> 
               </b-tabs>
             </b-col> 
          </b-row>
          <b-row v-if="this.objt.theEnvironmentProperties.length">
            <b-col sm="12">
              <b-form-group label="Privilege" label-class="font-weight-bold text-md-left" label-cols="1" label-for="thePrivilegeSelect">
                <dimension-select id="thePrivilegeSelect" dimension='privilege' :initial="privilege" v-on:dimension-select-change="privilegeSelected" />
              </b-form-group>
              <b-table striped bordered small :fields="componentTableFields" :items="components">
                <!-- eslint-disable-next-line -->
                <template slot="HEAD_componentactions" slot-scope="data"> 
                  <font-awesome-icon icon="plus" :style="{color: 'green'}" @click.stop="addComponent"/> 
                </template>
                <template slot="componentactions" slot-scope="row">
                  <font-awesome-icon icon="minus" :style="{color: 'red'}" @click.stop="deleteComponent(row.index)"/>
                </template>
              </b-table>
            </b-col>
          </b-row> 
        </b-card>
      </b-container>
      <b-container fluid>
        <b-form-row>
          <b-col md="4" offset-md="5" >
            <b-button type="submit" variant="primary" @click="onCommit">{{commitLabel}}</b-button>
            <b-button type="submit" variant="secondary" @click="onCancel">Cancel</b-button>
          </b-col>
        </b-form-row>
      </b-container> 
    </b-form>
  </div>
</template>

<script>

import objectMixin from '../mixins/objectMixin';
import environmentMixin from '../mixins/environmentMixin';
import DimensionModal from './DimensionModal';
import TrustBoundaryComponentModal from './TrustBoundaryComponentModal';
import DimensionSelect from './DimensionSelect';

export default {
  props : {
    object : Object,
    label : String
  },
  watch : {
    object: 'setObject'
  },
  mixins : [
    objectMixin,
    environmentMixin
  ],
  computed : {
    componentNames() {
      return this.objt.theEnvironmentProperties.length > 0 ? this.objt.theEnvironmentProperties[this.envPropIndex].theComponents : [] ;
    },
    components() {
      return this.objt.theEnvironmentProperties.length > 0 ? this.objt.theEnvironmentProperties[this.envPropIndex].theComponents : []
    },
    privilege() {
      return this.objt.theEnvironmentProperties.length > 0 ? this.objt.theEnvironmentProperties[this.envPropIndex].thePrivilege : '';
    }
  },
  components : {
    DimensionModal,
    TrustBoundaryComponentModal,
    DimensionSelect
  },
  data() {
    return {
      objt : this.object,
      commitLabel : this.label,
      envPropIndex : 0,
      errors : [],
      envFields : {
        envactions : {label : ''},
        theName : {label : 'Environment'}
      },
      componentTableFields : {
        componentactions : {label : ''},
        theName : {label : 'Component'},
        theType : {label : 'Type'}
      }
    }
  }, 
  methods: {
    checkForm() {
      this.errors = []
      if (this.objt.theName.length == 0) {
        this.errors.push('Name is required');
      }
      if (this.objt.theDescription.length == 0) {
        this.errors.push('Description is required');
      }
      if (this.objt.theEnvironmentProperties.length == 0) {
        this.errors.push('No environment properties have been defined')
      }
      if (!this.errors.length) {
        return true;
      }
      else {
        return false;
      }
    },
    setObject() {
      this.objt = this.object;
      this.commitLabel = this.label;
    },
    onCommit(evt) {
      evt.preventDefault();
      if (this.checkForm()) {
        this.$emit('trust-boundary-commit',this.objt);
      }
    },
    onCancel(evt) {
      evt.preventDefault();
      this.$router.push({ name: 'trustboundaries'})
    },
    deleteComponent(index) {
      this.objt.theEnvironmentProperties[this.envPropIndex].theComponents.splice(index,1);
    },
    addEnvironment(evt) {
      evt.preventDefault();
      this.$refs.environmentDialog.show();  
    },
    addComponent(evt) {
      evt.preventDefault();
      this.$refs.compDialog.show();  
    },
    addTrustBoundaryEnvironmentProperty : function(envName) {
      this.addEnvironmentProperty({
        theEnvironmentName : envName,
        thePrivilege : '',
        theComponents : []
      });
    },
    addTrustBoundaryComponent : function(compName) {
      this.objt.theEnvironmentProperties[this.envPropIndex].theComponents.push(compName);
    },
    privilegeSelected(priv) {
      this.objt.theEnvironmentProperties[this.envPropIndex].thePrivilege = priv;
    }
  }
}
</script>