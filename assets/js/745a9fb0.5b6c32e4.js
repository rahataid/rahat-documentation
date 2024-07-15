"use strict";(self.webpackChunkrahat_documentation=self.webpackChunkrahat_documentation||[]).push([[2307],{830974:function(e){e.exports=JSON.parse('{"operationId":"BeneficiaryController_updateGroup","parameters":[{"name":"uuid","required":true,"in":"path","schema":{}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"uuid":{"type":"object","example":"0-0-0-0","description":"Beneficiary Group ID"},"name":{"type":"string","example":"John Doe","description":"Beneficiary Group Name"},"beneficiaries":{"example":[{"uuid":"5fc184e3-9bb1-44d2-9db1-819b4e9b6305"}],"description":"Array of beneficiaries","type":"array","items":{"type":"object","properties":{"uuid":{"type":"string","example":"e4e24059-73f3-447d-a075-1c30f5b9b1eb","description":"Beneficiary UUID"}},"required":["uuid"]}}},"required":["uuid","name","beneficiaries"]}}}},"responses":{"200":{"description":""}},"tags":["Beneficiaries"],"postman":{"name":"Beneficiary Controller update Group","description":{"type":"text/plain"},"url":{"path":["v1","beneficiaries","groups",":uuid"],"host":["{{baseUrl}}"],"query":[],"variable":[{"description":{"content":"(Required) ","type":"text/plain"},"type":"any","value":"schema type not provided","key":"uuid"}]},"header":[{"key":"Content-Type","value":"application/json"}],"method":"PATCH","body":{"mode":"raw","raw":"{\\n    \\"uuid\\": \\"<object>\\",\\n    \\"name\\": \\"<string>\\",\\n    \\"beneficiaries\\": [\\n        {\\n            \\"uuid\\": \\"<string>\\"\\n        },\\n        {\\n            \\"uuid\\": \\"<string>\\"\\n        }\\n    ]\\n}"}},"description":"BeneficiaryController_updateGroup","summary":"BeneficiaryController_updateGroup","method":"patch","path":"/v1/beneficiaries/groups/{uuid}","hashId":"beneficiary-controller-update-group","servers":[],"permalink":"/api/rahat-core/beneficiary-controller-update-group","previous":{"title":"BeneficiaryController_removeGroup","permalink":"/api/rahat-core/beneficiary-controller-remove-group"},"next":{"title":"BeneficiaryController_importBeneficiariesFromTool","permalink":"/api/rahat-core/beneficiary-controller-import-beneficiaries-from-tool"},"jsonRequestBodyExample":{"uuid":"0-0-0-0","name":"John Doe","beneficiaries":[{"uuid":"5fc184e3-9bb1-44d2-9db1-819b4e9b6305"}]}}')}}]);