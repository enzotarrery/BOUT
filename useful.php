<?php

/**
 * Formats a standard array to an association array (usually useful for Doctrine results).
 * 
 * @param array $array The array to format.
 * @param int|string $key The key index.
 * @param int|string $value The value index.
 * @param int|string|null $parent_key The parent index.
 * 
 * @return array The formatted array.
 */
function array_format(array $array, $key = 0, $value = 1, $parent_key = null): array
{
    $formatted_array = [];

    foreach ($array as $element) {
        if ($parent_key) {
            $formatted_array[$element[$parent_key]][$element[$key]] = $element[$value];
        } else {
            $formatted_array[$element[$key]] = $element[$value];
        }
    }

    return $formatted_array;
}
