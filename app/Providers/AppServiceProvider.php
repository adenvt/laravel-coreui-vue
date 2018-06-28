<?php

namespace App\Providers;

// use GuzzleHttp\Client;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {

        // $this->app->singleton(Client::class, function ($app) {
        //     $headers = [
        //         'Content-Type' => 'application/json',
        //         'Accept'       => 'application/json',
        //     ];

        //     if (session()->has('auth') && isset(session('auth')->access_token)) {
        //         $headers['Authorization'] = 'Bearer ' . session('auth')->access_token;
        //     }

        //     return new Client([
        //         'base_uri' => config('services.api.url'),
        //         'headers'  => $headers,
        //         'auth'     => [
        //             config('services.api.username'),
        //             config('services.api.password'),
        //         ],
        //     ]);
        // });
    }
}
