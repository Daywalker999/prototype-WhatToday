/**
 * Created by Robin on 11.08.2016.
 */

function Overview()
{

    var element = $("ul#overview");


    for(i = 0; i < 10 ; i++)
    {

        var f = new Food();

        var content = $('<div class="media">').append(
            $('<div class="media-left">')
                .append($('<img class="media-object" src="'+ f.img +'">'))

            )
            .append($('<div class="media-body">')
                .append( $(' <h4 class="media-heading">'+ f.name +'</h4>'))
            )
            
            ;

        element.append(  $('<li class="list-group-item"></li>').append(content));
    }

}

Overview = Overview || {


}


function Food ()
{
    this.img="public/img/pizza.jpg";
    this.name = "Pizza"
}