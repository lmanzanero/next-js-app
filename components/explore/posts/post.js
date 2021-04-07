import React from 'react'

export default function Post({ data }) {
  const { name, username, email,  address: { street, suite, city, geo: { lat, long }} } = data;
  console.log(name)
  //Todo: Should look like post feed similar to tiktok
  return (
    <div className="post-container">
      <div className="post-header">
        <div className="user-details">
          <img src="https://avatars.githubusercontent.com/u/20497361?s=460&u=fcce070b780d1229d7d97890113a85f00cf4a049&v=4"/>
          <p className="username">@{username}</p>
        </div>
        <div className="post-details">
          <div className="post-desc">
            {name}
          </div>
          <div className="post-tags">
            #{street} #{suite} #{city}
          </div>
        </div>
      </div>
      <div className="post-body">
          <div className="post-image">
            <img src="https://www.sgs.com/-/media/global/images/structural-website-images/home-page-images/focus-slot-images/reusable-focus-slot-images/consumer-goods-retail/main-feature-heavy-pollution-contaminants-on-a-beach-684px.jpg" />
            <div className="post-social">
              <div className="social-container">
                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00NzQuNjQ0LDc0LjI3QzQ0OS4zOTEsNDUuNjE2LDQxNC4zNTgsMjkuODM2LDM3NiwyOS44MzZjLTUzLjk0OCwwLTg4LjEwMywzMi4yMi0xMDcuMjU1LDU5LjI1DQoJCQljLTQuOTY5LDcuMDE0LTkuMTk2LDE0LjA0Ny0xMi43NDUsMjAuNjY1Yy0zLjU0OS02LjYxOC03Ljc3NS0xMy42NTEtMTIuNzQ1LTIwLjY2NWMtMTkuMTUyLTI3LjAzLTUzLjMwNy01OS4yNS0xMDcuMjU1LTU5LjI1DQoJCQljLTM4LjM1OCwwLTczLjM5MSwxNS43ODEtOTguNjQ1LDQ0LjQzNUMxMy4yNjcsMTAxLjYwNSwwLDEzOC4yMTMsMCwxNzcuMzUxYzAsNDIuNjAzLDE2LjYzMyw4Mi4yMjgsNTIuMzQ1LDEyNC43DQoJCQljMzEuOTE3LDM3Ljk2LDc3LjgzNCw3Ny4wODgsMTMxLjAwNSwxMjIuMzk3YzE5LjgxMywxNi44ODQsNDAuMzAyLDM0LjM0NCw2Mi4xMTUsNTMuNDI5bDAuNjU1LDAuNTc0DQoJCQljMi44MjgsMi40NzYsNi4zNTQsMy43MTMsOS44OCwzLjcxM3M3LjA1Mi0xLjIzOCw5Ljg4LTMuNzEzbDAuNjU1LTAuNTc0YzIxLjgxMy0xOS4wODUsNDIuMzAyLTM2LjU0NCw2Mi4xMTgtNTMuNDMxDQoJCQljNTMuMTY4LTQ1LjMwNiw5OS4wODUtODQuNDM0LDEzMS4wMDItMTIyLjM5NUM0OTUuMzY3LDI1OS41NzgsNTEyLDIxOS45NTQsNTEyLDE3Ny4zNTENCgkJCUM1MTIsMTM4LjIxMyw0OTguNzMzLDEwMS42MDUsNDc0LjY0NCw3NC4yN3ogTTMwOS4xOTMsNDAxLjYxNGMtMTcuMDgsMTQuNTU0LTM0LjY1OCwyOS41MzMtNTMuMTkzLDQ1LjY0Ng0KCQkJYy0xOC41MzQtMTYuMTExLTM2LjExMy0zMS4wOTEtNTMuMTk2LTQ1LjY0OEM5OC43NDUsMzEyLjkzOSwzMCwyNTQuMzU4LDMwLDE3Ny4zNTFjMC0zMS44MywxMC42MDUtNjEuMzk0LDI5Ljg2Mi04My4yNDUNCgkJCUM3OS4zNCw3Mi4wMDcsMTA2LjM3OSw1OS44MzYsMTM2LDU5LjgzNmM0MS4xMjksMCw2Ny43MTYsMjUuMzM4LDgyLjc3Niw0Ni41OTRjMTMuNTA5LDE5LjA2NCwyMC41NTgsMzguMjgyLDIyLjk2Miw0NS42NTkNCgkJCWMyLjAxMSw2LjE3NSw3Ljc2OCwxMC4zNTQsMTQuMjYyLDEwLjM1NGM2LjQ5NCwwLDEyLjI1MS00LjE3OSwxNC4yNjItMTAuMzU0YzIuNDA0LTcuMzc3LDkuNDUzLTI2LjU5NSwyMi45NjItNDUuNjYNCgkJCWMxNS4wNi0yMS4yNTUsNDEuNjQ3LTQ2LjU5Myw4Mi43NzYtNDYuNTkzYzI5LjYyMSwwLDU2LjY2LDEyLjE3MSw3Ni4xMzcsMzQuMjdDNDcxLjM5NSwxMTUuOTU3LDQ4MiwxNDUuNTIxLDQ4MiwxNzcuMzUxDQoJCQlDNDgyLDI1NC4zNTgsNDEzLjI1NSwzMTIuOTM5LDMwOS4xOTMsNDAxLjYxNHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" />
              </div>
              <div className="social-container">
                <img src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjY4MnB0IiB2aWV3Qm94PSItMjEgLTQ3IDY4Mi42NjY2OSA2ODIiIHdpZHRoPSI2ODJwdCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtNTUyLjAxMTcxOS0xLjMzMjAzMWgtNDY0LjAyMzQzOGMtNDguNTE1NjI1IDAtODcuOTg4MjgxIDM5LjQ2NDg0My04Ny45ODgyODEgODcuOTg4MjgxdjI4My45NzI2NTZjMCA0OC40MTQwNjMgMzkuMzAwNzgxIDg3LjgxNjQwNiA4Ny42NzU3ODEgODcuOTg4MjgydjEyOC44NjMyODFsMTg1LjE5MTQwNy0xMjguODYzMjgxaDI3OS4xNDQ1MzFjNDguNTE1NjI1IDAgODcuOTg4MjgxLTM5LjQ3MjY1NyA4Ny45ODgyODEtODcuOTg4Mjgydi0yODMuOTcyNjU2YzAtNDguNTIzNDM4LTM5LjQ3MjY1Ni04Ny45ODgyODEtODcuOTg4MjgxLTg3Ljk4ODI4MXptNTAuNDg4MjgxIDM3MS45NjA5MzdjMCAyNy44MzU5MzgtMjIuNjQ4NDM4IDUwLjQ4ODI4Mi01MC40ODgyODEgNTAuNDg4MjgyaC0yOTAuOTEwMTU3bC0xMzUuOTI1NzgxIDk0LjU4NTkzN3YtOTQuNTg1OTM3aC0zNy4xODc1Yy0yNy44Mzk4NDMgMC01MC40ODgyODEtMjIuNjUyMzQ0LTUwLjQ4ODI4MS01MC40ODgyODJ2LTI4My45NzI2NTZjMC0yNy44NDM3NSAyMi42NDg0MzgtNTAuNDg4MjgxIDUwLjQ4ODI4MS01MC40ODgyODFoNDY0LjAyMzQzOGMyNy44Mzk4NDMgMCA1MC40ODgyODEgMjIuNjQ0NTMxIDUwLjQ4ODI4MSA1MC40ODgyODF6bTAgMCIvPjxwYXRoIGQ9Im0xNzEuMjkyOTY5IDEzMS4xNzE4NzVoMjk3LjQxNDA2MnYzNy41aC0yOTcuNDE0MDYyem0wIDAiLz48cGF0aCBkPSJtMTcxLjI5Mjk2OSAyMTEuMTcxODc1aDI5Ny40MTQwNjJ2MzcuNWgtMjk3LjQxNDA2MnptMCAwIi8+PHBhdGggZD0ibTE3MS4yOTI5NjkgMjkxLjE3MTg3NWgyOTcuNDE0MDYydjM3LjVoLTI5Ny40MTQwNjJ6bTAgMCIvPjwvc3ZnPg==" />
              </div>
              <div className="social-container">
                <img src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIC0yMiA1MTIgNTExIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im01MTIgMjMzLjgyMDMxMi0yMTIuNzc3MzQ0LTIzMy4zMjAzMTJ2MTM5LjIwMzEyNWgtNDUuMjM4MjgxYy0xNDAuMjczNDM3IDAtMjUzLjk4NDM3NSAxMTMuNzEwOTM3LTI1My45ODQzNzUgMjUzLjk4NDM3NXY3My43Njk1MzFsMjAuMDkzNzUtMjIuMDE5NTMxYzY4LjMxNjQwNi03NC44NTE1NjIgMTY0Ljk4MDQ2OS0xMTcuNSAyNjYuMzI0MjE5LTExNy41aDEyLjgwNDY4N3YxMzkuMjAzMTI1em0wIDAiLz48L3N2Zz4=" />
              </div>
           </div>
          </div>
        </div>
    </div>
  )
}
