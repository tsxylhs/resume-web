<template lang="pug">
  .w-100
    .banner
      .header-top
        .container
          .header-top-right
            p
              i.fa.fa-envelope(aria-hidden='true')
              a(href='mailto:info@example.com') info@example1.com
            p
              i.fa.fa-phone(aria-hidden='true')
              |  +1 234 567 8901
      .head
        .container
          .navbar-top
            // Brand and toggle get grouped for better mobile display
            .navbar-header
              button.navbar-toggle.collapsed(type='button', data-toggle='collapse', data-target='#bs-example-navbar-collapse-1')
                span.sr-only 切换导航
                span.icon-bar
                span.icon-bar
                span.icon-bar
              .navbar-brand.logo
                h1.animated.wow.pulse(data-wow-delay='.5s')
                  a(href='index.html') 加拿大伊莱顿精英高级中学
            // Collect the nav links, forms, and other content for toggling
            #bs-example-navbar-collapse-1.collapse.navbar-collapse
              ul.nav.navbar-nav.link-effect-4
                li.active
                  a(href='/#/', data-hover='Home') 主页
                li
                  a(href='/#/about', data-hover='About') 关于我们
                li
                  a(href='/#/gallery', data-hover='Gallery') 校园文化
                li.dropdown
                  a.dropdown-toggle(href='#', data-hover='Pages', data-toggle='dropdown')
                    | 导航
                    b.caret
                  ul.dropdown-menu
                    li
                      a(href='') 校园文化
                    li
                      a(href='') 课程介绍
                li
                  a(href='/#/contact', data-hover='Contact') 联系我们
            // /.navbar-collapse
          .clearfix
      .bannerinfo
        .container
          .col-md-5.bannergrid
            .top
              h5
              h2 教育是强大的武器
            .bottom
              .col-md-6.bannergrid1.clr
                i.fa.fa-book(aria-hidden='true')
                h4 学习
                .clearfix
                p 学习是获得新知识的行为
              .col-md-6.bannergrid1.clr1
                i.fa.fa-graduation-cap(aria-hidden='true')
                h4 教育
                .clearfix
                p 一次极有启发性的体验
              .clearfix
              .col-md-6.bannergrid1.clr2
                i.fa.fa-pencil(aria-hidden='true')
                h4 研究
                .clearfix
                p 阅读是一个复杂的认知过程
              .col-md-6.bannergrid1.clr3
                i.fa.fa-university(aria-hidden='true')
                h4 大学
                .clearfix
                p 高等教育机构
              .clearfix
              .col-md-6.bannergrid1.clr4
                i.fa.fa-bicycle(aria-hidden='true')
                h4 考试
                .clearfix
                p 测试学生的知识
              .col-md-6.bannergrid1.clr5
                i.fa.fa-cog(aria-hidden='true')
                h4 结果
                .clearfix
                p 要有丰富的经验
              .clearfix
            .clearfix
    // //banner
    // welcome
    .welcome
      .container
        .welcome-grids
          .col-md-6.welcome-w3right
            img.img-responsive(src='../../static/images/welcome.jpg', alt='')
            .wthree-model-video
              a(class='#', data-toggle='modal', data-target='#myModal1')
                span.glyphicon.glyphicon-play-circle(aria-hidden='true')
          .col-md-6.welcome-w3left
            h3 但是在某些情况下，所有的痛苦都在恋爱中？
            h4
              | 快乐是避免每一个痛苦的方法。
              | 但是在某些情况下
            p
              | 快乐是每一个痛苦的避免。
              | 但在某些情况下，和睦相处，或避免享乐
              | saepe.Nam空闲时间的义务，当我们选择力量时选择
              | 没有受到它的干​​扰，所以我们也许能够做到他最满意的
            .readmore-w3
              a.readmore(href='#', data-toggle='modal', data-target='#myModal1') View More
          .clearfix

    // book1
    .book.book1.jarallax
      .container
        h3 教育是最强大的武器，您可以用来
        h3 改变世界.
        p 教育的功能是教人们进行沉思和批判性思考。 智力加品格-这是真正的教育目标。 教育是一种启发性的经历
    // //book1
    // <div class="tlinks">Collect from <a href="http://www.cssmoban.com/" ></a></div>
    // Education
    .education
      h3.heading 我们的教育过程
      .container
        .col-md-4.eduleft
          .left1
            h3 学习
            p 学习技能
            span.glyphicon.glyphicon-adjust(aria-hidden='true')
          .left1
            h3 知识
            p 学历
            span.glyphicon.glyphicon-adjust(aria-hidden='true')
          .left1
            h3 教学
            p 实际理解
            span.glyphicon.glyphicon-adjust(aria-hidden='true')
          .left1
            h3 讨论区
            p 交换想法
            span.glyphicon.glyphicon-adjust(aria-hidden='true')
        .col-md-8.eduright
          .right1
            h3 促进学习
            p
              | 快乐是每一个痛苦的避免。
              | 但在某些情况下，和睦相处，或避免享乐
              | saepe.Nam空闲时间的义务，当我们选择力量时选择
              | 没有受到它的干​​扰，所以我们也许能够做到他最满意的
          .right1
            h3 知识的获取
            p 鞭挞或呵斥是应该谨慎地避免的。它只是弥缝了目前，使伤口结上一层皮膜，对于痛楚的核心仍然没有触到。只有出自内心的羞耻心和不愿见恶于人的畏惧心，才是一种真正的约束。
          .right1
            h3 教学科目
            p 鞭挞或呵斥是应该谨慎地避免的。它只是弥缝了目前，使伤口结上一层皮膜，对于痛楚的核心仍然没有触到。只有出自内心的羞耻心和不愿见恶于人的畏惧心，才是一种真正的约束。
          .right1
            h3 小组讨论
            p 鞭挞或呵斥是应该谨慎地避免的。它只是弥缝了目前，使伤口结上一层皮膜，对于痛楚的核心仍然没有触到。只有出自内心的羞耻心和不愿见恶于人的畏惧心，才是一种真正的约束。
        .clearfix
    // //Education
    // book
    .book.jarallax
      .container
        h3 我们努力为每个学生准备成人生活
        h3 美好成功的未来
        p 鞭挞或呵斥是应该谨慎地避免的。它只是弥缝了目前，使伤口结上一层皮膜，对于痛楚的核心仍然没有触到。只有出自内心的羞耻心和不愿见恶于人的畏惧心，才是一种真正的约束。
        .readmore-w3
          ul
            li
              a.readmore(href='#', data-toggle='modal', data-target='#myModal2') Get Started
            li
              a.readmore(href='#', data-toggle='modal', data-target='#myModal3') Register
    // //book
    // clients
    #clients.clients
      .container
        h3.heading 我们的学生说的是
        .wmuSlider.example1.animated.wow.slideInUp(data-wow-delay='.5s')
          .wmuSliderWrapper
            div(style='position: absolute; width: 100%; opacity: 0;')
              .banner-wrap
                .col-md-4.client-grids
                  p 我们有无产阶级道德，我们应该发展它，巩固它，并且以这种无产阶级道德教育未来的一代。
                  .col-md-5.c-img
                    img(src='../../static/images/c1.jpg', alt='')
                  .col-md-7.c-info
                    h4 测试
                    h5 测试1
                  .clearfix
                .col-md-4.client-grids
                  p 我们有无产阶级道德，我们应该发展它，巩固它，并且以这种无产阶级道德教育未来的一代。
                  .col-md-5.c-img
                    img(src='../../static/images/c2.jpg', alt='')
                  .col-md-7.c-info
                    h4 测试2
                    h5 测试3
                  .clearfix
                .col-md-4.client-grids
                  p 我们有无产阶级道德，我们应该发展它，巩固它，并且以这种无产阶级道德教育未来的一代。
                  .col-md-5.c-img
                    img(src='../../static/images/c3.jpg', alt='')
                  .col-md-7.c-info
                    h4 测试4
                    h5 测试4
                  .clearfix
                .clearfix
            //article(style='position: absolute; width: 100%; opacity: 0;')
              .banner-wrap
                .col-md-4.client-grids
                  p 我们有无产阶级道德，我们应该发展它，巩固它，并且以这种无产阶级道德教育未来的一代。
                  .col-md-5.c-img
                    img(src='../../static/images/c4.jpg', alt='')
                  .col-md-7.c-info
                    h4 测试五
                    h5 测试五
                  .clearfix
                .col-md-4.client-grids
                  p 我们有无产阶级道德，我们应该发展它，巩固它，并且以这种无产阶级道德教育未来的一代。
                  .col-md-5.c-img
                    img(src='../../static/images/c5.jpg', alt='')
                  .col-md-7.c-info
                    h4 测试六
                    h5 测试六
                  .clearfix
                .col-md-4.client-grids
                  p 我们有无产阶级道德，我们应该发展它，巩固它，并且以这种无产阶级道德教育未来的一代。
                  .col-md-5.c-img
                    img(src='../../static/images/c6.jpg', alt='')
                  .col-md-7.c-info
                    h4 测试七
                    h5 测试七
                  .clearfix
                .clearfix
    // //clients
    // contact
    .contact
      h3.heading 联系我们
      p 快乐是每一个痛苦的避免,快乐是每一个痛苦的避免,快乐是每一个痛苦的避免,快乐是每一个痛苦的避免
      .container
        .contact-grids
          .col-md-7.contact-grid.wow.fadeInUp.animated(data-wow-delay='.5s')
            form(action='#', method='post')
              input(type='text', placeholder='Name', name='name', required='')
              input(type='email', placeholder='Email', name='email', required='')
              .clearfix
              textarea(placeholder='Message..', name='message', required='')
              input(type='submit', value='Send Now')
          .col-md-5.contact-grid.wow.fadeInUp.animated(data-wow-delay='.5s')
            .call
              .col-xs-1.contact-grdl
                span.glyphicon.glyphicon-phone(aria-hidden='true')
              .col-xs-3.contact-grdr
                h3 联系我们 :
              .col-xs-8.contact-grdr
                ul
                  li  021-61125609
                  li  021-61125610
              .clearfix
            .call
              .col-xs-1.contact-grdl
                span.glyphicon.glyphicon-map-marker(aria-hidden='true')
              .col-xs-3.contact-grdr
                h3 地址 :
              .col-xs-8.contact-grdr
                ul
                  li 上海市金山区学府路 1300 号
                  li 上海市
              .clearfix
            .call
              .col-xs-1.contact-grdl
                span.glyphicon.glyphicon-envelope(aria-hidden='true')
              .col-xs-3.contact-grdr
                h3 邮箱 :
              .col-xs-8.contact-grdr
                ul
                  li
                    a(href='mailto:info@example.com') info@example.com
              .clearfix
          .clearfix
    // //contact
    // copyright
    .copyright
      .container
        .copyrighttop
          ul
            li
              h4 跟着我们:
            li
              a.facebook(href='#')
                i.fa.fa-facebook(aria-hidden='true')
            li
              a.facebook(href='#')
                i.fa.fa-twitter(aria-hidden='true')
            li
              a.facebook(href='#')
                i.fa.fa-google-plus(aria-hidden='true')
            li
              a.facebook(href='#')
                i.fa.fa-linkedin(aria-hidden='true')
        .copyrightbottom
          p
            | Copyright © 2017.Company name All rights reserved.More Templates
            a(href='http://www.cssmoban.com/', target='_blank', title='')
            |  - Collect from
            a(href='http://www.cssmoban.com/', title='', target='_blank')
        .clearfix
    // //copyright
    // model-video
    // Modal5
    #myModal1.modal.fade(tabindex='-1', role='dialog')
      .modal-dialog
        // Modal content
        .modal-content
          .modal-header
            button.close(type='button', data-dismiss='modal') ×
            iframe(src='https://player.vimeo.com/video/77456946?title=0&byline=0&portrait=0')
    // //Modal5
    // //model-video
    // popup for sign in form
    #myModal2.modal.video-modal.fade(tabindex='-1', role='dialog', aria-labelledby='myModal1')
      .modal-dialog(role='document')
        .modal-content
          #small-dialog1.mfp-hide.book-form
            button.close(type='button', data-dismiss='modal', aria-label='Close')
              span(aria-hidden='true') ×
            h3 登录
            form(action='#', method='post')
              input.email(type='text', name='Email', placeholder='Email', required='')
              input.password(type='password', name='Password', placeholder='Password', required='')
              ul
                li
                  input#brand1(type='checkbox', value='')
                  label(for='brand1')
                    span
                    | 记住我
              a(href='#') 忘记密码?
              br
              .clearfix
              input(type='submit', value='Get Started')
    // //popup for sign in form
    // popup for sign up form
    #myModal3.modal.video-modal.fade(tabindex='-1', role='dialog', aria-labelledby='myModal2')
      .modal-dialog(role='document')
        .modal-content
          #small-dialog2.mfp-hide.book-form
            button.close(type='button', data-dismiss='modal', aria-label='Close')
              span(aria-hidden='true') ×
            h3 Sign Up
            form(action='#', method='post')
              input(type='text', name='Name', placeholder='Your Name', required='')
              input.email(type='text', name='Email', placeholder='Email', required='')
              input.password(type='password', name='Password', placeholder='Password', required='')
              input.password(type='password', name='Password', placeholder='Confirm Password', required='')
              input(type='submit', value='Register Now')


</template>

<script>
  import $ from 'jquery'
  import  '@/scripts/move-top.js'

  export default {
    name: 'Index',
    created () {
      $(document).ready(function() {
        /*
                  var defaults = {
                  containerID: 'toTop', // fading element id
                  containerHoverID: 'toTopHover', // fading element hover id
                  scrollSpeed: 1200,
                  easingType: 'linear'
                  };
              */
        (function($){$.fn.UItoTop=function(options){var defaults={text:'To Top',min:200,inDelay:600,outDelay:400,containerID:'toTop',containerHoverID:'toTopHover',scrollSpeed:1000,easingType:'linear'},settings=$.extend(defaults,options),containerIDhash='#'+settings.containerID,containerHoverIDHash='#'+settings.containerHoverID;$('body').append('<a href="#" id="'+settings.containerID+'">'+settings.text+'</a>');$(containerIDhash).hide().on('click.UItoTop',function(){$('html, body').animate({scrollTop:0},settings.scrollSpeed,settings.easingType);$('#'+settings.containerHoverID,this).stop().animate({'opacity':0},settings.inDelay,settings.easingType);return false;}).prepend('<span id="'+settings.containerHoverID+'"></span>').hover(function(){$(containerHoverIDHash,this).stop().animate({'opacity':1},600,'linear');},function(){$(containerHoverIDHash,this).stop().animate({'opacity':0},700,'linear');});$(window).scroll(function(){var sd=$(window).scrollTop();if(typeof document.body.style.maxHeight==="undefined"){$(containerIDhash).css({'position':'absolute','top':sd+$(window).height()-50});}
          if(sd>settings.min)
            $(containerIDhash).fadeIn(settings.inDelay);else
            $(containerIDhash).fadeOut(settings.Outdelay);});};})(jQuery);

        $().UItoTop({ easingType: 'easeOutQuart' });
      //
      });
      /* init Jarallax */
      // $('.jarallax').jarallax({
      //   speed: 0.5,
      //   imgWidth: 1366,
      //   imgHeight: 768
      // })
    }

  }
</script>

<style scoped>

</style>
