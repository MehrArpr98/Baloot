
$(function () {
    /* ---- password eye function ---- */
    $('.fa-eye').on('click', function () {
        let input = $(this).prev();
        let type = input.attr('type');
        type == 'password' ? input.attr('type', 'text') : input.attr('type', 'password');
    });

    /* ---- number only inputs ---- */
    $('[name="phone"]').on('input', function () {
        this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    });
    
});
$('.section-tabs button').on('click', function () {
    $('.section-tabs .active').removeClass('active')
    $(this).parent().addClass('active');

    $('.provider').children().not('.title').hide();
    $($(this).attr('tab-data')).slideDown();
    $('.provider > .title span').text(this.innerText);
})
const profileData = {};
$('#edit-profile-form').find('input , textarea').each((index, item) => {
    profileData[$(item).attr('name')] = $(item).val();
});
$('#edit-profile-form').on('submit', function(e) {
    e.preventDefault();
    if ($(e.target).is(':invalid')) {
        return false
    }
	const apiUrl = '/User/Profile'
	const formData = {}
    $(e.target).find('input , textarea').each((index, item) => {
        formData[$(item).attr('name')] = $(item).val();
    });
    console.log(checkEqual(formData, profileData))
    if(checkEqual(formData, profileData)) {
        return false;
    }
    $(e.target).find('input , textarea').each((index, item) => {
        profileData[$(item).attr('name')] = $(item).val();
    });

    $.ajax({
        method: 'post',
        url: apiUrl,
        data: formData
    })
        .then(res => {
            if (res) {
                toast({ title: "موفق", content: "اطلاعات پروفایل با موفقیت تغییر کرد.", type: "success" })
            } else {
                toast({ title: "نا موفق", content: "مشکلی در ویرایش اطلاعات رخ داده!", type: "error" })
            }
        })
        .catch(err => {
            toast({ title: "نا موفق", content: "مشکلی در ویرایش اطلاعات رخ داده!", type: "error" })
        });
})
function checkEqual(obj1, obj2) {
    let isEqual= true;
    for(let key in obj1) {
        isEqual = isEqual && (obj1[key] == obj2[key]);
    }
    return isEqual;
}
$('#change-password-form').on('submit', function(e) {
    e.preventDefault();
    if ($(e.target).is(':invalid')) {
        return false
    }
	const apiUrl = '/User/ChangePassword'
	const formData = {}
    $(e.target).find('input , textarea').each((index, item) => {
        formData[$(item).attr('name')] = $(item).val();
    });
    $.ajax({
        method: 'post',
        url: apiUrl,
        data: formData
    })
        .then(res => {
            if (res) {
                toast({ title: "موفق", content: "رمز عبور با موفقیت تغییر کرد.", type: "success" })
                $(e.target).find('input , textarea').val('')
            } else {
                toast({ title: "نا موفق", content: "مشکلی تغییر رمز عبور رخ داده!", type: "error" })
            }
        })
        .catch(err => {
            toast({ title: "نا موفق", content: "مشکلی تغییر رمز عبور رخ داده!", type: "error" })
        });
})