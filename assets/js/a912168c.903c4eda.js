"use strict";(self.webpackChunkrahat_documentation=self.webpackChunkrahat_documentation||[]).push([[7411],{185685:function(e){e.exports=JSON.parse('{"operationId":"UsersController_addRoles","parameters":[{"name":"uuid","required":true,"in":"path","description":"Unique identifier","schema":{"type":"string"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"array","example":["admin","user"],"items":{"type":"string"}}}}},"responses":{"201":{"description":""}},"tags":["Users"],"security":[{"JWT":[]}],"postman":{"name":"Users Controller add Roles","description":{"type":"text/plain"},"url":{"path":["v1","users",":uuid","roles"],"host":["{{baseUrl}}"],"query":[],"variable":[{"description":{"content":"(Required) Unique identifier","type":"text/plain"},"type":"any","value":"<string>","key":"uuid"}]},"header":[{"key":"Content-Type","value":"application/json"}],"method":"POST","body":{"mode":"raw","raw":"[\\n    \\"<string>\\",\\n    \\"<string>\\"\\n]"},"auth":{"type":"bearer","bearer":[{"type":"any","value":"<Bearer Token>","key":"token"}]}},"description":"UsersController_addRoles","summary":"UsersController_addRoles","method":"post","path":"/v1/users/{uuid}/roles","hashId":"users-controller-add-roles","servers":[],"permalink":"/api/rahat-core/users-controller-add-roles","previous":{"title":"UsersController_getRoles","permalink":"/api/rahat-core/users-controller-get-roles"},"next":{"title":"UsersController_removeRoles","permalink":"/api/rahat-core/users-controller-remove-roles"},"jsonRequestBodyExample":["admin","user"]}')}}]);