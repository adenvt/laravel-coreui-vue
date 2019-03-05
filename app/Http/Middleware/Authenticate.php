<?php

namespace App\Http\Middleware;

use Closure;

class Authenticate
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (!session()->has('auth') && !isset(session('auth')->access_token)) {
            $data = [
                'status'  => 401,
                'success' => false,
                'message' => 'Token not provided',
            ];

            return response()->json($data, $data['status']);
        }

        return $next($request);
    }
}
