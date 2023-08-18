"use strict";(self.webpackChunkrahat_documentation=self.webpackChunkrahat_documentation||[]).push([[2068],{113466:function(e){e.exports=JSON.parse('{"operationId":"ProjectController_update","parameters":[{"name":"address","required":true,"in":"path","schema":{"type":"string"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string"},"startDate":{"type":"string"},"endDate":{"type":"string"},"location":{"type":"string"},"projectType":{"type":"string"},"projectManager":{"type":"string"},"description":{"type":"string"},"isApproved":{"type":"boolean","default":false}}}}}},"responses":{"200":{"description":""}},"tags":["projects"],"postman":{"name":"Project Controller update","description":{"type":"text/plain"},"url":{"path":["api","v1","projects",":address"],"host":["{{baseUrl}}"],"query":[],"variable":[{"description":{"content":"(Required) ","type":"text/plain"},"type":"any","value":"<string>","key":"address"}]},"header":[{"key":"Content-Type","value":"application/json"}],"method":"PATCH","body":{"mode":"raw","raw":"{\\n    \\"name\\": \\"<string>\\",\\n    \\"startDate\\": \\"<string>\\",\\n    \\"endDate\\": \\"<string>\\",\\n    \\"location\\": \\"<string>\\",\\n    \\"projectType\\": \\"<string>\\",\\n    \\"projectManager\\": \\"<string>\\",\\n    \\"description\\": \\"<string>\\",\\n    \\"isApproved\\": false\\n}"}},"description":"ProjectController_update","summary":"ProjectController_update","method":"patch","path":"/api/v1/projects/{address}","hashId":"project-controller-update","servers":[],"permalink":"/api/project-controller-update","previous":{"title":"ProjectController_findOne","permalink":"/api/project-controller-find-one"},"next":{"title":"ProjectController_getBeneficiaries","permalink":"/api/project-controller-get-beneficiaries"},"jsonRequestBodyExample":{"name":"string","startDate":"string","endDate":"string","location":"string","projectType":"string","projectManager":"string","description":"string","isApproved":false}}')}}]);