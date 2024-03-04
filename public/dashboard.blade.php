<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta property="og:type" content="website">
    <meta property="og:image" content="{{$logo}}">
    <link rel="icon" href='{{$logo}}'>
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <title>{{$title}}</title>
    <script>
      window.settings = {
        googleAnalyticsMeasurementId: '{{ $theme_config['google_analytics_measurement_id'] }}',
        defaultPath: "/",
        fontFamily: '{{ $theme_config['font_family'] }}',
        miniDrawer: '{{ $theme_config['mini_drawer'] }}' === "true",
        container: '{{ $theme_config['container'] }}' === "true",
        themeDirection: '{{ $theme_config['theme_direction'] }}' === "ltr" ? "ltr" : "rtl",
        title: '{{ $title }}',
        title_split: " - ",
        background_url: '{{ $background_url }}',
        description: '{{ $description }}',
        logo: '{{ $logo }}',
        languages: '{{ $theme_config['languages'] }}'.split(","),
        emojiEndpoint: '{{ $theme_config['emoji_endpoint'] }}',
        startYear: Number('{{ $theme_config['start_year'] }}')
      };
    </script>
</head>

<body>
<div id="root"></div>
<script>
  window.global = window;
</script>
</body>

</html>
