jQuery(function($, undefined) {
    $('#terminal').terminal({
        hello: function(what) {
            this.echo('Hello, ' + what +
                      '. Wellcome to this terminal.');
        },
        $help: function() {
            this.echo('help, hello(arg), work, cool, fun, troll');
        }
    }, {
        greetings: 'Julien portfolio terminal | do $help ',
        height: 180,
        width: 380,
        prompt: 'user@portfolio> '
        
    });
});

$( function() {
    $( "#draggable" ).draggable();
  } );