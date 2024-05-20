"use strict";(self.webpackChunkrahat_documentation=self.webpackChunkrahat_documentation||[]).push([[8564],{561793:function(e){e.exports=JSON.parse('{"operationId":"UserController_verifyOtp","parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"email":{"type":"email","example":"user1@rahat.com"},"otp":{"type":"string","example":"1234"}},"required":["email","otp"]}}}},"responses":{"201":{"description":""}},"tags":["users"],"postman":{"name":"User Controller verify Otp","description":{"type":"text/plain"},"url":{"path":["api","v1","users","login","verify-otp"],"host":["{{baseUrl}}"],"query":[],"variable":[]},"header":[{"key":"Content-Type","value":"application/json"}],"method":"POST","body":{"mode":"raw","raw":"{\\n    \\"email\\": \\"<email>\\",\\n    \\"otp\\": \\"<string>\\"\\n}"}},"description":"UserController_verifyOtp","summary":"UserController_verifyOtp","method":"post","path":"/api/v1/users/login/verify-otp","hashId":"user-controller-verify-otp","servers":[],"permalink":"/api/user-controller-verify-otp","previous":{"title":"UserController_requestOtp","permalink":"/api/user-controller-request-otp"},"next":{"title":"ProjectController_create","permalink":"/api/project-controller-create"},"jsonRequestBodyExample":{"email":"user1@rahat.com","otp":"1234"}}')}}]);