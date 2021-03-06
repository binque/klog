//= require admin/markdown_editor
//= require admin/attach
$(function(){
    AttachUploader.init({
        'post_params': {
            'attach[max_width]': 200
        }
    });

    AttachUploader.onInsert(function(code) {
        var value = $("#setting_sidebar_content").val();
        var insertPos = $("#setting_sidebar_content").data('inserPos') || $("#setting_sidebar_content").val().length;
        value = value.substr(0, insertPos) + '\r\n' + code + '\r\n' + value.substr(insertPos);
        $("#setting_sidebar_content").val(value);
    });

    $("#setting_sidebar_content").blur(function() {
        if (this.selectionEnd) {
            $(this).data('insertPos', this.selectionEnd);
        }
    });
});