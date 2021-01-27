FlowRouter.template('/about', 'about');

Template.about.onRendered(function() {
    $('html').css('height', '100%');
    $('body').css('height', '100%');
    $('#__blaze-root').css('height', '100%');
});

Template.about.onDestroyed(function() {
    $('html').css('height', '');
    $('body').css('height', '');
    $('#__blaze-root').css('height', '');
});