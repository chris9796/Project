$(function() {
    $("#itemBoxWrap").sortable({
        
        start: function(event, ui) {
            ui.item.data('start_pos', ui.item.index());
        },
        stop: function(event, ui) {
            var spos = ui.item.data('start_pos');
            var epos = ui.item.index();
			      reorder();
        }
    });
    //$("#itemBoxWrap").disableSelection();
    
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
});
