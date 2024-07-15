"use strict";(self.webpackChunkrahat_documentation=self.webpackChunkrahat_documentation||[]).push([[4967],{6879:function(e){e.exports=JSON.parse('{"operationId":"RolesController_listRoles","parameters":[{"name":"page","required":false,"in":"query","example":1,"description":"page number","schema":{"type":"number"}},{"name":"perPage","required":false,"in":"query","example":10,"description":"number of items per page","schema":{"type":"number"}},{"name":"sort","required":false,"in":"query","example":"createdAt","description":"Sort field","schema":{"type":"string"}},{"name":"order","required":false,"in":"query","example":"desc","description":"Sort order","schema":{"type":"string"}}],"responses":{"200":{"description":""}},"tags":["Roles & Permissions"],"security":[{"JWT":[]}],"postman":{"name":"Roles Controller list Roles","description":{"type":"text/plain"},"url":{"path":["v1","roles"],"host":["{{baseUrl}}"],"query":[{"description":{"content":"page number","type":"text/plain"},"key":"page","value":"<number>"},{"description":{"content":"number of items per page","type":"text/plain"},"key":"perPage","value":"<number>"},{"description":{"content":"Sort field","type":"text/plain"},"key":"sort","value":"<string>"},{"description":{"content":"Sort order","type":"text/plain"},"key":"order","value":"<string>"}],"variable":[]},"method":"GET","auth":{"type":"bearer","bearer":[{"type":"any","value":"<Bearer Token>","key":"token"}]}},"description":"RolesController_listRoles","summary":"RolesController_listRoles","method":"get","path":"/v1/roles","hashId":"roles-controller-list-roles","servers":[],"permalink":"/api/rahat-core/roles-controller-list-roles","previous":{"title":"RolesController_createRole","permalink":"/api/rahat-core/roles-controller-create-role"},"next":{"title":"RolesController_searchRolesByPermission","permalink":"/api/rahat-core/roles-controller-search-roles-by-permission"}}')}}]);