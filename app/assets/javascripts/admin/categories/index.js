$(function() {
    $("a.edit").click(function(e) {
        e.preventDefault();
        var url = $(this).attr('href');
        var td = $(this).closest('td');
        td.children().hide();
        $("#edit_cate_name").val($(this).siblings('span').text());
        $("#edit_form").attr("action", url).appendTo(td).show();
        $("#edit_cate_name").focus();
    });

    $("#edit_form").on('ajax:success', function(e, errors) {
        if (errors) {
            alert(errors[0]);
        } else {
            $(this).siblings('span').text($("#edit_cate_name").val());
            $('#cancel_edit').click();
        }
    });

    $('#cancel_edit').click(function() {
        var td = $(this).closest('td');
        var form = $(this).closest('form');
        form.appendTo('body').hide();
        td.children().show();
        td.find('a').removeAttr('style');
    });
});