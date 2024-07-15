"use strict";(self.webpackChunkrahat_documentation=self.webpackChunkrahat_documentation||[]).push([[8659],{406508:function(e){e.exports=JSON.parse('{"operationId":"GrievanceController_changeStatus","parameters":[{"name":"uuid","required":true,"in":"path","schema":{"type":"string"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"status":{"type":"object","example":"UNDER_REVIEW","description":"Status of the grievance"}},"required":["status"]}}}},"responses":{"200":{"description":""}},"tags":["Grievances"],"security":[{"JWT":[]}],"postman":{"name":"Grievance Controller change Status","description":{"type":"text/plain"},"url":{"path":["v1","grievances",":uuid","change-status"],"host":["{{baseUrl}}"],"query":[],"variable":[{"description":{"content":"(Required) ","type":"text/plain"},"type":"any","value":"<string>","key":"uuid"}]},"header":[{"key":"Content-Type","value":"application/json"}],"method":"PATCH","body":{"mode":"raw","raw":"{\\n    \\"status\\": \\"<object>\\"\\n}"},"auth":{"type":"bearer","bearer":[{"type":"any","value":"<Bearer Token>","key":"token"}]}},"description":"GrievanceController_changeStatus","summary":"GrievanceController_changeStatus","method":"patch","path":"/v1/grievances/{uuid}/change-status","hashId":"grievance-controller-change-status","servers":[],"permalink":"/api/rahat-core/grievance-controller-change-status","previous":{"title":"GrievanceController_findAll","permalink":"/api/rahat-core/grievance-controller-find-all"},"next":{"title":"GrievanceController_softDelete","permalink":"/api/rahat-core/grievance-controller-soft-delete"},"jsonRequestBodyExample":{"status":"UNDER_REVIEW"}}')}}]);