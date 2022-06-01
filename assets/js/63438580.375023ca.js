"use strict";(self.webpackChunkrahat_documentation=self.webpackChunkrahat_documentation||[]).push([[9569],{400820:function(t){t.exports=JSON.parse('{"tags":["projects"],"summary":"Add token allocation to the project","operationId":"patchApiV1ProjectsIdToken","security":[{"access_token":[]}],"parameters":[{"schema":{"type":"string"},"description":"Resource identifier","name":"id","in":"path","required":true}],"requestBody":{"content":{"application/json":{"schema":{"type":"object","description":"TokenAllocation","properties":{"amount":{"type":"number","description":"Token amount to allocate to the project"},"txhash":{"type":"string","description":"Blockchain transaction hash"}},"required":["txhash"]}}}},"responses":{"200":{"description":"successful operation","content":{"application/json":{"schema":{"type":"object","description":"TokenAllocation","properties":{"amount":{"type":"number","description":"Token amount to allocate to the project"},"txhash":{"type":"string","description":"Blockchain transaction hash"}},"required":["txhash"]}}}},"405":{"description":"Invalid input"}},"postman":{"name":"Add token allocation to the project","description":{"type":"text/plain"},"url":{"path":["projects",":id","token"],"host":["{{baseUrl}}"],"query":[],"variable":[{"description":{"content":"(Required) Resource identifier","type":"text/plain"},"type":"any","value":"<string>","key":"id"}]},"header":[{"key":"Content-Type","value":"application/json"}],"method":"PATCH","body":{"mode":"raw","raw":"\\"schema type not provided\\""}},"description":"Add token allocation to the project","method":"patch","path":"/projects/{id}/token","hashId":"add-token-allocation-to-the-project","servers":[{"url":"https://agency-stage.rahat.io/api/v1"}],"permalink":"/api/add-token-allocation-to-the-project","previous":{"title":"Update project status","permalink":"/api/update-project-status"},"next":{"title":"Get all the roles","permalink":"/api/get-all-the-roles"},"jsonRequestBodyExample":{"amount":0,"txhash":"string"}}')}}]);