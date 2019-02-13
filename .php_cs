<?php

$finder = PhpCsFixer\Finder::create()
    ->exclude([
        'vendor',
        'storage',
        'bootstrap/cache',
    ])
    ->in(__DIR__)
;

return PhpCsFixer\Config::create()
    ->setRules([
        '@PSR2'                  => true,
        'binary_operator_spaces' => [
            'default' => 'align_single_space',
        ],
    ])
    ->setFinder($finder)
;
