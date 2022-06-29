test('Simple ADD example', () => {
  expect((1+ 2)).toBe(3);
});


test('Async GET call Example', () => {
  const obj = {
      "options": {
          "host": "18.206.66.220",
          "port": "353",
          "user": "fsdf",
          "password": "enc===eOGzs7aNTDXmr8Jh3/TAJg==",
          "offset": "0",
          "limit": "400",
          "table": "",
          "database": "sff"
      },
      "sourceType": "mysql",
      "name": "sdfsdf",
      "datasourceId": "datasource_9dac77bd-1efb-4b88-a4c5-c05b0e2ad4fe"
  }
  const config = {
      method: 'GET',
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ7XCJ1c2VybmFtZVwiOlwic3VwZXJVc2VyXCIsXCJyb2xlXCI6XCJzdXBlclVzZXJcIixcImxhbmd1YWdlXCI6XCJlbmdsaXNoXCIsXCJpc0VtYmVkXCI6ZmFsc2UsXCJpZFwiOlwiNjlmMGYwMzQtNmE3NS00NTgzLWFmNmEtZDI2M2M1OTA1ZmI3XCIsXCJncm91cHNcIjpbXSxcImVtYWlsXCI6XCJkZXZAdGVsbGl1cy5jb21cIixcImVmZmVjdGl2ZVJvbGVcIjpcInN1cGVyVXNlclwifSIsImV4cCI6MTY1NTg4NDgwNi4wLCJpYXQiOjE2NTUxMjg4MDYsImlzcyI6IlRlbGxpdXNNaWRkbGV3YXJlIiwianRpIjoiYzUxMTRmZmItOGZlYy00MzQ3LTljNjUtNGM1ZTViYWZkYTEzIiwicGVtIjp7fSwic3ViIjoie1widXNlcm5hbWVcIjpcInN1cGVyVXNlclwiLFwicm9sZVwiOlwic3VwZXJVc2VyXCIsXCJsYW5ndWFnZVwiOlwiZW5nbGlzaFwiLFwiaXNFbWJlZFwiOmZhbHNlLFwiaWRcIjpcIjY5ZjBmMDM0LTZhNzUtNDU4My1hZjZhLWQyNjNjNTkwNWZiN1wiLFwiZ3JvdXBzXCI6W10sXCJlbWFpbFwiOlwiZGV2QHRlbGxpdXMuY29tXCIsXCJlZmZlY3RpdmVSb2xlXCI6XCJzdXBlclVzZXJcIn0iLCJ0eXAiOiJhY2Nlc3MifQ.m_J1Qn8sgcyyk8mFiwlMUtriDeQ6eUkPrb9Fo756gbqVpUfsaXiNOctR4l8natfVKY1hcjLqP_zmm5CwJrE9Vw",
        'Content-Type': 'application/json',
      }
    }
    return window.fetch('https://dev2.app.tellius.com/datasources?sourceType=cassandra&includingShared=true', config).then(async (response) => {
      const responseData = await response.json()
      if (response.ok) {
        expect(responseData.totalCount).toBe(0);  
      } else {
        expect(responseData).toBe(6); 
        return Promise.reject(responseData)
      }
    });

});

test('Async POST call Example', () => {
  const loginObj = {"username":"superUser","password":"TEST_$"}  

  const loginConfig = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginObj),
    }
    //console.log("config", config);
    return window.fetch('https://dev2.app.tellius.com/api/login', loginConfig).then(async (response) => {
      const responseData = await response.json()
      if (response.ok) {
        console.log("responseData...", responseData)
        expect(responseData.token).toBeDefined();  
        expect(responseData.refreshToken).toBeDefined();  
      } else {
        expect(responseData).toBe(6); 
        return Promise.reject(responseData)
      }
    });

});