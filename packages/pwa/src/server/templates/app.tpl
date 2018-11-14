<!DOCTYPE html>
<html lang="en" <: helmet.htmlAttributes :>>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="google-site-verification" content="0L8RZ2nrOELypp4uek73-wI_MBwoVSahGmSKiPh6xpg" />

  <!-- publicPath prefetch/preconnect -->
  <: if publicPath .startsWith('https://') :>
    <link rel="dns-prefetch" href="<: publicPath :>">
    <link rel="preconnect" href="<: publicPath :>" crossorigin>
  <: fi :>

  <!-- Page Title -->
  <: helmet.title :>

  <: if stage === 'production' :>
    <!-- No open directory project, thanks -->
    <meta name="robots" content="noodp"/>
  <: else :>
    <!-- Robots nofollow for dev/staging -->
    <meta name="robots" content="nofollow, noindex, noodp"/>
  <: fi :>

  <!-- Viewport Settings -->
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta
    name="apple-mobile-web-app-status-bar-style"
    content="black"
  >
  <meta
    name="viewport"
    content="width=device-width, user-scalable=yes, initial-scale=1.0"
  >
  <meta name="theme-color" content="#1D2128">

  <!-- Helmet meta -->
  <: helmet.meta :>

  <!-- Helmet links -->
  <: helmet.link :>

  <!-- Helmet styles -->
  <: helmet.style :>

  <!-- Bundle scripts -->
  <: scripts :>

  <!-- Helmet scripts -->
  <: helmet.script :>
</head>
<body>
  <noscript>
    <div style="font-family: sans-serif; padding: 2rem; text-align: center;">
      Javascript must be enabled in order to view this website
    </div>
  </noscript>

  <div id="⚛️"><: page :></div>

  <!-- Initial Application State -->
  <: if initialState !== void 0 :>
    <script id="app.initialState" type="application/json">
      <: initialState :>
    </script>
  <: fi :>
</body>
</html>
