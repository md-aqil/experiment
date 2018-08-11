<?php
/**
 * Created by PhpStorm.
 * User: phuongth
 * Date: 12/17/2016
 * Time: 2:51 PM
 * @var $thumbnail
 * @var $post_link
 * @var $title
 * @var $disable_link
 */
?>

<div class="grid-post-item  half-g thumbnail" data-thumbnail-only="1">
    <div class="thumbnail-image" data-img="<?php echo esc_url($thumbnail); ?>">
        <?php if(!empty($thumbnail)): ?>

            <img src="<?php echo esc_attr($thumbnail); ?>" alt="<?php echo esc_html($title); ?>" >
           
        <?php endif; ?>

        <div class="overlay">
            <div class="overlay-contents">
                <?php if(!empty($title)): ?>
                    <div class="title">
                        <?php if($disable_link != 'true'): ?>
                            <a href="<?php echo esc_attr($post_link); ?>" title="<?php echo esc_html($title); ?>"><?php echo esc_html($title); ?></a>
                        <?php else: ?>
                            <?php echo esc_html($title); ?>
                        <?php endif; ?>
                    </div>
                <?php endif; ?>
                <?php if(!empty($excerpt)): ?>

                    <div class="excerpt"> <?php echo esc_html($excerpt); ?> </div>

                <?php endif; ?>
            </div>
          
        </div>
    </div>
</div>
