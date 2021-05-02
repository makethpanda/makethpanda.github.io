jQuery(function($, undefined) {
    $('#terminal').terminal({
        $intro: function() {
            this.echo('Welcome to the terminal, and welcome to my portfolio.');
            this.echo('.');
            this.echo('.');
            this.echo('.');
            this.echo('type "$help" to get started !');
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