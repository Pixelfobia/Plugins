<?php

function up_custom_image_sizes($sizes) {
  return array_merge($sizes, [
    'teamMember' => __('Team Member', 'px-theme-plus'),
    'opengraph' => __('Open Graph', 'px-theme-plus')
  ]);
}