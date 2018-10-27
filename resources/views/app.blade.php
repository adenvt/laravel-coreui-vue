<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#36A2CD">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <link rel="manifest" href="{{ asset('manifest.json') }}">
    <link rel="shortcut icon" href="{{ asset('favicon.png') }}">

    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <link rel="stylesheet" href="{{ asset(mix('css/app.css')) }}">
</head>

<body>
    <div id="app">
        <noscript>
            <div class="app flex-row align-items-center">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-6">
                            <div class="clearfix">
                                <h1 class="float-left display-3 mr-4">
                                    <i class="fa fa-warning"></i>
                                </h1>
                                <h4 class="pt-3">Javascript Required</h4>
                                <p class="text-muted">
                                    Please enabling Javascript or try with other browser which have Javascript Support.<br>
                                    <a class="btn btn-primary mt-3" href="{{ url()->current() }}">
                                        Reload Page
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </noscript>
    </div>
    <script src="{{ asset(mix('js/manifest.js')) }}"></script>
    <script src="{{ asset(mix('js/vendor.js')) }}"></script>
    <script src="{{ asset(mix('js/app.js')) }}"></script>
</body>

</html>
