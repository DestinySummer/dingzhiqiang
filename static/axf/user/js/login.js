$(function () {
    $("form").submit(function () {
        var uname = $("#name_id").val();
        var pwd = $("#pwd_id").val();

        if(uname.length < 3){
            alert("用户过短");
            return false;
        }
        if(pwd.length < 3){
            alert("密码过短")
            return false;
        }
        var pwd_md5 = md5(pwd)
        $("#pwd_id").val(pwd_md5);
    })
});
