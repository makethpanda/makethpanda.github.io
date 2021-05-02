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
            this.echo('here are the commands you can use')
            this.echo('.')
            this.echo('help, hello(arg), emailme (more to come !)');
        },
        $hello: function(b) {
            this.echo('hello '+ b + ' ! How are you today ?');

        }
        $emailme: function() {
            this.echo('email me at this address:')
            this.echo('J.¤¤¤¤¤¤¤¤@gmail.com')
        }
    }, {
        greetings: 'Julien portfolio terminal | type $intro to start using ',
        height: 180,
        width: 380,
        prompt: 'user@portfolio> '
        
    });
});

$( function() {
    $( "#draggable" ).draggable();
  } );