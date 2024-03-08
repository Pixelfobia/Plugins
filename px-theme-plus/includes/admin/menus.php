<?php

function up_admin_menus() {
  add_menu_page(
    __('px-theme Plus', 'px-theme-plus'),
    __('px-theme Plus', 'px-theme-plus'),
    'edit_theme_options',
    'up-plugin-options',
    'up_plugins_options_page',
    plugins_url('cineclubnegro.svg', UP_PLUGIN_FILE)
  );

  add_submenu_page(
    'up-plugin-options',
    __('Alt px-theme Plus', 'px-theme-plus'),
    __('Alt px-theme Plus', 'px-theme-plus'),
    'edit_theme_options',
    'up-plugin-options-alt',
    'up_plugin_options_alt_page'
  );
}