$(document).ready(function(){
// ВАЛИДАЦИЯ ПОЛЕЙ //

var jVal = {
	'fullName' : function() {
	
		$('body').append('<div id="nameInfo" class="info"></div>');
		
		var nameInfo = $('#nameInfo');
		var ele = $('#fullname');
		var pos = ele.offset();
		
		nameInfo.css({
			top: pos.top-3,
			left: pos.left+ele.width()+15
		});
        
        var patt=/^[a-zA-Zа-яА-Я-]+ [a-zA-Zа-яА-Я-]+$/;
		if(!patt.test(ele.val())) {
            jVal.errors = true;
            nameInfo.removeClass('correct').addClass('error').html('&larr; вы используете запрещеные символы!').show();
            ele.removeClass('normal').addClass('wrong');				
		} else {
            nameInfo.removeClass('error').addClass('correct').html('&radic;').show();
            ele.removeClass('wrong').addClass('normal');
		}
	},
	
	'birthDate' : function (){
		
		$('body').append('<div id="birthInfo" class="info"></div>');

		var birthInfo = $('#birthInfo');
		var ele = $('#birthday');
		var pos = ele.offset();
		
		birthInfo.css({
			top: pos.top-3,
			left: pos.left+ele.width()+15
		});
		
		var patt = /^(19|20)\d\d-((0[1-9]|1[012])-(0[1-9]|[12]\d)|(0[13-9]|1[012])-30|(0[13578]|1[02])-31)$/i;
		$.trim(ele.val());
		if(!patt.test(ele.val())) {
			jVal.errors = true;
            birthInfo.removeClass('correct').addClass('error').html('&larr; введите дату в корректном формате!').show();
            ele.removeClass('normal').addClass('wrong');					
		} else {
            birthInfo.removeClass('error').addClass('correct').html('&radic;').show();
            ele.removeClass('wrong').addClass('normal');
		}	
	},
	
	'gender' : function (){
		
		$('body').append('<div id="genderInfo" class="info"></div>');
	
		var genderInfo = $('#genderInfo');
		var ele = $('#woman');
		var pos = ele.offset();
		
		genderInfo.css({
			top: pos.top-10,
			left: pos.left+ele.width()+60
		});
		
		if($('input[name="gender"]:checked').length === 0) {
			jVal.errors = true;
            genderInfo.removeClass('correct').addClass('error').html('&larr; Вы мужчина или женщина?').show();
            ele.removeClass('normal').addClass('wrong');		
		} else {
            genderInfo.removeClass('error').addClass('correct').html('&radic;').show();
            ele.removeClass('wrong').addClass('normal');
		}	
	},
	
	'vehicle' : function (){
	
		$('body').append('<div id="vehicleInfo" class="info"></div>');
	
            var vehicleInfo = $('#vehicleInfo');
            var ele = $('#ship');
            var pos = ele.offset();
		
		vehicleInfo.css({
			top: pos.top-10,
			left: pos.left+ele.width()+40
		});
		
		if($('input[name="vehicle"]:checked').length < 1) {
			jVal.errors = true;
            vehicleInfo.removeClass('correct').addClass('error').html('&larr; Увас должно быть как минимум одно сообщество!').show();
            ele.removeClass('normal').addClass('wrong');		
		} else {
            vehicleInfo.removeClass('error').addClass('correct').html('&radic;').show();
            ele.removeClass('wrong').addClass('normal');
		}	
	},
	
	'email' : function() {
	
		$('body').append('<div id="emailInfo" class="info"></div>');
	
		var emailInfo = $('#emailInfo');
		var ele = $('#email');
		var pos = ele.offset();
		
		emailInfo.css({
        top: pos.top-3,
        left: pos.left+ele.width()+15
		});
		
		var patt = /^([a-zA-Z0-9-_]+\.?)+@.+[.].{2,}$/i;
		$.trim(ele.val());
		if(!patt.test(ele.val())) {
			jVal.errors = true;
            emailInfo.removeClass('correct').addClass('error').html('&larr; Введите правильный email!').show();
            ele.removeClass('normal').addClass('wrong');					
		} else {
            emailInfo.removeClass('error').addClass('correct').html('&radic;').show();
            ele.removeClass('wrong').addClass('normal');
		}
	},
	'about' : function() {
	
		$('body').append('<div id="aboutInfo" class="info"></div>');
	
		var aboutInfo = $('#aboutInfo');
		var ele = $('#about');
		var pos = ele.offset();
		
		aboutInfo.css({
			top: pos.top-3,
			left: pos.left+ele.width()+15
		});
		
		if(ele.val().length < 3) {
			jVal.errors = true;
            aboutInfo.removeClass('correct').addClass('error').html('&larr; Поле о себе должно состоять не менее из 3 символов!').show();
            ele.removeClass('normal').addClass('wrong').css({'font-weight': 'normal'});		
		} else {
            aboutInfo.removeClass('error').addClass('correct').html('&radic;').show();
            ele.removeClass('wrong').addClass('normal');
		}
	},
	
	'sendIt' : function (){
		if(!jVal.errors) {
			$('#jform').submit();
		}
	}
};

// ОТПРАВКА ПРОВЕРЕННЫХ ПОЛЕЙ НА СЕРВЕР //

$('#send').click(function (){
	var obj = $.browser.webkit ? $('body') : $('html');
	obj.animate({ scrollTop: $('#jform').offset().top }, 750, function (){
        jVal.errors = false;
        jVal.fullName();
        jVal.birthDate();
        jVal.gender();
        jVal.vehicle();
        jVal.email();
        jVal.about();
        jVal.sendIt();
	});
	return false;
});

$('#fullname').change(jVal.fullName);
$('#birthday').change(jVal.birthDate);
$('input[name="gender"]').change(jVal.gender);
$('input[name="vehicle"]').change(jVal.vehicle);
$('#email').change(jVal.email);
$('#about').change(jVal.about);

// ====================================================== //
});