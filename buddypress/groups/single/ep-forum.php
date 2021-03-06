<?php
/**
 * BuddyPress - Group - Large centered content
 *
 * @package BuddyPress
 * @subpackage bp-legacy
 */
?>

<div class="layout-central-col project-forum is-wide">
  <div class="layout-wrapper">
    <div class="layout-content">
      <?php
      /**
       * Fires before the display of content for plugins using the BP_Group_Extension.
       *
       * @since 1.2.0
       */
      do_action( 'bp_before_group_plugin_template' ); ?>

      <?php
      /**
       * Fires and displays content for plugins using the BP_Group_Extension.
       *
       * @since 1.0.0
       */
      do_action( 'bp_template_content' ); ?>

      <?php
      /**
       * Fires after the display of content for plugins using the BP_Group_Extension.
       *
       * @since 1.2.0
       */
      do_action( 'bp_after_group_plugin_template' );
      ?>
    </div>
  </div>
</div>
