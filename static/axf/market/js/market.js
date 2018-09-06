var type_dowm = true;
var sort_dowm = true;

$(function () {
    $("#all_type").click(all_type_event);
    $("#c_control").click(all_type_event);

    $("#all_sort").click(all_sort_event);
    $("#s_control").click(all_sort_event);
//    加 按钮添加点击事件
    $(".addShopping").click(function () {
    //    拿到商品id
        var g_id = $(this).attr("g_id");
        var $current_btn = $(this);
        $.ajax({
            url:'/axf/cartapi',
            data:{
                g_id:g_id,
                op_type:"add"
            },
            method:"post",
            success:function (res) {
            //    修改商品的数量
                console.log(res);
                if(res.code==2){
                    window.open(res.data,target="_self");
                }else if(res.code==1){
                //    操作成功，需要更新商品数量
                    $current_btn.prev().html(res.data);
                }else{
                    alert(res.msg)
                }
            },
            error:function () {
                alert("请求失败");
            }
        })
    });
    $(".subShopping").click(function () {
    //    拿到商品id
        var g_id = $(this).attr("g_id");
        var $current_btn = $(this);
        var current_num = $current_btn.next().html();
        if(current_num == 0){
            return;
        }
        $.ajax({
            url:'/axf/cartapi',
            data:{
                g_id:g_id,
                op_type:"sub"
            },
            method:"post",
            success:function (res) {
            //    修改商品的数量
                console.log(res);
                if(res.code==2){
                    window.open(res.data,target="_self");
                }else if(res.code==1){
                //    操作成功，需要更新商品数量
                    $current_btn.next().html(res.data);
                }else{
                    alert(res.msg);
                }
            },
            error:function () {
                alert("请求失败");
            }
        })
    })
});

function all_type_event() {
    $("#c_control").toggle()
    var type_span = $("#all_type").find("span").find("span");
    if (type_dowm == true){
        //如果是向下的状态 那改变原有的类样式 修改状态值
        type_span.removeClass("glyphicon glyphicon-chevron-down").addClass("glyphicon glyphicon-chevron-up");
        type_dowm = false;
    } else {
        type_span.removeClass("glyphicon glyphicon-chevron-up").addClass("glyphicon glyphicon-chevron-down");
        type_dowm = true;
    }
}

function all_sort_event() {
    $("#s_control").toggle()
    var type_span = $("#all_sort").find("span").find("span");
    if (sort_dowm == true){
        //如果是向下的状态 那改变原有的类样式 修改状态值
        type_span.removeClass("glyphicon glyphicon-chevron-down").addClass("glyphicon glyphicon-chevron-up");
        sort_dowm = false;
    } else {
        type_span.removeClass("glyphicon glyphicon-chevron-up").addClass("glyphicon glyphicon-chevron-down");
        sort_dowm = true;
    }
}