$('section .item-name').each(function() {
	var ths = $(this);
	ths.html(ths.html().replace(/(\S+)\s*$/,  '<br><span>$1</span><br>'));
});

$('select-brands').ready(function() {
    $('ul li').click(function () {
        $('ul li.active').removeClass('active');
        $(this).addClass('active');
    });
});

 
