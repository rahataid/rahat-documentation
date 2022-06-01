"use strict";(self.webpackChunkrahat_documentation=self.webpackChunkrahat_documentation||[]).push([[8965],{334273:function(t){t.exports=JSON.parse('{"tags":["projects"],"summary":"Update project status","operationId":"patchApiV1ProjectsIdStatus","security":[{"access_token":[]}],"parameters":[{"schema":{"type":"string"},"description":"Resource identifier","name":"id","in":"path","required":true}],"requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"status":{"type":"string","description":"Status of project","default":"draft","enum":["draft","active","suspended","closed"]}},"required":["status"]}}}},"responses":{"200":{"description":"successful operation","content":{"application/json":{"schema":{"type":"object","properties":{"status":{"type":"string","description":"Status of project","default":"draft","enum":["draft","active","suspended","closed"]}},"required":["status"]}}}},"405":{"description":"Invalid input"}},"postman":{"name":"Update project status","description":{"type":"text/plain"},"url":{"path":["projects",":id","status"],"host":["{{baseUrl}}"],"query":[],"variable":[{"description":{"content":"(Required) Resource identifier","type":"text/plain"},"type":"any","value":"<string>","key":"id"}]},"header":[{"key":"Content-Type","value":"application/json"}],"method":"PATCH","body":{"mode":"raw","raw":"\\"schema type not provided\\""}},"description":"Update project status","method":"patch","path":"/projects/{id}/status","hashId":"update-project-status","servers":[{"url":"https://agency-stage.rahat.io/api/v1"}],"permalink":"/api/update-project-status","previous":{"title":"Add beneficiary to the project","permalink":"/api/add-beneficiary-to-the-project"},"next":{"title":"Add token allocation to the project","permalink":"/api/add-token-allocation-to-the-project"},"jsonRequestBodyExample":{"status":"draft"}}')}}]);