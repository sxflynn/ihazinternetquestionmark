param location string = 'West US'

resource appServicePlan 'Microsoft.Web/serverfarms@2020-06-01' = {
name: 'FrontEndAppServicePlan'
location: location
sku: {
  name: 'F1'
}
kind: 'windows'
}

resource appService 'Microsoft.Web/sites@2020-06-01' = {
  name: 'IHazInternetQuestionMark'
  location: location
  properties:{
    serverFarmId:appServicePlan.id
  }
}

