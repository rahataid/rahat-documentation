"use strict";(self.webpackChunkrahat_documentation=self.webpackChunkrahat_documentation||[]).push([[5729],{19223:function(e){e.exports=JSON.parse('{"tags":["user"],"summary":"Create user","description":"This can only be done by the logged in user.","operationId":"createUser","requestBody":{"description":"Created user object","content":{"application/json":{"schema":{"type":"object","properties":{"id":{"type":"integer","format":"int64","example":10},"username":{"type":"string","example":"theUser"},"firstName":{"type":"string","example":"John"},"lastName":{"type":"string","example":"James"},"email":{"type":"string","example":"john@email.com"},"password":{"type":"string","example":"12345"},"phone":{"type":"string","example":"12345"},"userStatus":{"type":"integer","description":"User Status","format":"int32","example":1}},"xml":{"name":"user"}}},"application/xml":{"schema":{"type":"object","properties":{"id":{"type":"integer","format":"int64","example":10},"username":{"type":"string","example":"theUser"},"firstName":{"type":"string","example":"John"},"lastName":{"type":"string","example":"James"},"email":{"type":"string","example":"john@email.com"},"password":{"type":"string","example":"12345"},"phone":{"type":"string","example":"12345"},"userStatus":{"type":"integer","description":"User Status","format":"int32","example":1}},"xml":{"name":"user"}}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"id":{"type":"integer","format":"int64","example":10},"username":{"type":"string","example":"theUser"},"firstName":{"type":"string","example":"John"},"lastName":{"type":"string","example":"James"},"email":{"type":"string","example":"john@email.com"},"password":{"type":"string","example":"12345"},"phone":{"type":"string","example":"12345"},"userStatus":{"type":"integer","description":"User Status","format":"int32","example":1}},"xml":{"name":"user"}}}}},"responses":{"default":{"description":"successful operation","content":{"application/json":{"schema":{"type":"object","properties":{"id":{"type":"integer","format":"int64","example":10},"username":{"type":"string","example":"theUser"},"firstName":{"type":"string","example":"John"},"lastName":{"type":"string","example":"James"},"email":{"type":"string","example":"john@email.com"},"password":{"type":"string","example":"12345"},"phone":{"type":"string","example":"12345"},"userStatus":{"type":"integer","description":"User Status","format":"int32","example":1}},"xml":{"name":"user"}}},"application/xml":{"schema":{"type":"object","properties":{"id":{"type":"integer","format":"int64","example":10},"username":{"type":"string","example":"theUser"},"firstName":{"type":"string","example":"John"},"lastName":{"type":"string","example":"James"},"email":{"type":"string","example":"john@email.com"},"password":{"type":"string","example":"12345"},"phone":{"type":"string","example":"12345"},"userStatus":{"type":"integer","description":"User Status","format":"int32","example":1}},"xml":{"name":"user"}}}}}},"postman":{"name":"Create user","description":{"content":"This can only be done by the logged in user.","type":"text/plain"},"url":{"path":["user"],"host":["{{baseUrl}}"],"query":[],"variable":[]},"header":[{"key":"Content-Type","value":"application/x-www-form-urlencoded"}],"method":"POST","body":{"mode":"urlencoded","urlencoded":[{"description":{"content":"","type":"text/plain"},"key":"id","value":"<long>"},{"description":{"content":"","type":"text/plain"},"key":"username","value":"<string>"},{"description":{"content":"","type":"text/plain"},"key":"firstName","value":"<string>"},{"description":{"content":"","type":"text/plain"},"key":"lastName","value":"<string>"},{"description":{"content":"","type":"text/plain"},"key":"email","value":"<string>"},{"description":{"content":"","type":"text/plain"},"key":"password","value":"<string>"},{"description":{"content":"","type":"text/plain"},"key":"phone","value":"<string>"},{"description":{"content":"User Status","type":"text/plain"},"key":"userStatus","value":"<integer>"}]}},"method":"post","path":"/user","hashId":"create-user","servers":[{"url":"/api/v3"}],"permalink":"/rahat-documentation/api/create-user","previous":{"title":"Delete purchase order by ID","permalink":"/rahat-documentation/api/delete-purchase-order-by-id"},"next":{"title":"Creates list of users with given input array","permalink":"/rahat-documentation/api/creates-list-of-users-with-given-input-array"},"jsonRequestBodyExample":{"id":10,"username":"theUser","firstName":"John","lastName":"James","email":"john@email.com","password":"12345","phone":"12345","userStatus":1}}')}}]);