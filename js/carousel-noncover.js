// ==================== 宣告所有照片位置並放入陣列中 ==============================
var pic200 = [];
var pic800 = [];
var pic1200 = [];
var title = [];
var word = [];
    for(i=0;i<=15;i++){
        pic200[i] = "images/2m-"+(i+1)+".jpg";
        pic800[i] = "images/8m-"+(i+1)+".jpg";
        pic1200[i] = "images/12m-"+(i+1)+".jpg";
    }

// ====================== 亂數隨機功能 ================================
function Random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ==================== 載入所有照片的按鈕在中間選單區域 ==========================
btn_list="";
    for(i=1;i<=16;i++){
        btn_list = btn_list + "<div class='btn_list'><div class='bcover'>"+i+"</div></div>";
    }
    $("#mmenu_btn").html(btn_list);

// ==================== 載入所有小照片在下方圖片選單區域 ==========================
pic_list="";
    for(i=0;i<=15;i++){
        pic_list = pic_list + "<div class='pic_btn' style='background-image: url("+pic200[i]+")'><div class='pcover'></div></div>";
    }
    $("#btmenu_pic").html(pic_list);

// ==================== 隨機載入一張照片 ==============================
now_pic = Random(0,15);
$("#p1").css("backgroundImage","url('"+pic800[now_pic]+"')");
$(".btn_list:eq("+now_pic+")").css("backgroundColor","#F00");
$(".pic_btn:eq("+now_pic+")").css("box-shadow","5px 5px #F00");

// ==================== 按中間選單按鈕照片從右邊滑入 ================================
$(".btn_list").click(function(){
    if(a==0){
        x=$(this).index();
        a = 1;
        $(".btn_list:eq("+now_pic+")").css("backgroundColor","#0F0");
        $(".btn_list:eq("+x+")").css("backgroundColor","#F00");
        $(".pic_btn:eq("+now_pic+")").css("box-shadow","5px 5px #000");
        $(".pic_btn:eq("+x+")").css("box-shadow","5px 5px #F00");
        $("#p2").css({"backgroundImage":"url('"+pic800[x]+"')","display":"block","left":"880px"});
        $("#p2").animate({left:"0px"},2000);
        setTimeout(function(){
            $("#p1").css("backgroundImage","url('"+pic800[x]+"')");
            $("#p2").css("display","none");
            now_pic = x;
            a = 0;
        },2000);
    }
});

// ==================== 點擊下方圖片選單區域主顯示照片從左邊滑入 ==========================
$(".pic_btn").click(function(){
    if(a==0){
        x=$(this).index();
        a = 1;
        $(".btn_list:eq("+now_pic+")").css("backgroundColor","#0F0");
        $(".btn_list:eq("+x+")").css("backgroundColor","#F00");
        $(".pic_btn:eq("+now_pic+")").css("box-shadow","5px 5px #000");
        $(".pic_btn:eq("+x+")").css("box-shadow","5px 5px #F00");
        $("#p2").css({"backgroundImage":"url('"+pic800[x]+"')","display":"block","left":"-880px"});
        $("#p2").animate({left:"0px"},2000);
        setTimeout(function(){
            $("#p1").css("backgroundImage","url('"+pic800[x]+"')");
            $("#p2").css("display","none");
            now_pic = x;
            a = 0;
        },2000);
    }
});

// ==================== 按左邊粉紅色區域 ==============================
var a = 0; //避免重複按的變數
$("#l_btn").click(function(){
    if(a==0){
    a = 1;
    aa = now_pic + 1;
    if(aa >= 16){ aa = 0 ;}
        $("#p2").css({"backgroundImage":"url('"+pic800[aa]+"')","display":"block","left":"880px"});
        $(".btn_list:eq("+now_pic+")").css("backgroundColor","#0F0");
        $(".btn_list:eq("+aa+")").css("backgroundColor","#F00");
        $(".pic_btn:eq("+now_pic+")").css("box-shadow","5px 5px #000");
        $(".pic_btn:eq("+aa+")").css("box-shadow","5px 5px #F00");
        $("#p2").animate({left:"0px"},3000);
        setTimeout(function(){
        $("#p1").css("backgroundImage","url('"+pic800[aa]+"')");
        $("#p2").css("display","none");
        now_pic = aa;
        a = 0;
    },3000);
    }
});

// ==================== 按右邊粉紅色區域 ==============================
$("#r_btn").click(function(){
    if(a==0){
    a = 1;
    aa = now_pic - 1;
    if(aa <= 0){ aa = 15 ;}
        $("#p2").css({"backgroundImage":"url('"+pic800[aa]+"')","display":"block","left":"-800px"});
        $(".btn_list:eq("+now_pic+")").css("backgroundColor","#0F0");
        $(".btn_list:eq("+aa+")").css("backgroundColor","#F00");
        $(".pic_btn:eq("+now_pic+")").css("box-shadow","5px 5px #000");
        $(".pic_btn:eq("+aa+")").css("box-shadow","5px 5px #F0F");
        $("#p2").animate({left:"0px"},3000);
        setTimeout(function(){
        $("#p1").css("backgroundImage","url('"+pic800[aa]+"')");
        $("#p2").css("display","none");
        now_pic = aa;
        a = 0;
    },3000);
    }
});

// ==================== 自動按左邊粉紅色區域 =========================
function auto(){
    setInterval(() => {
        $('#l_btn').trigger("click");
    }, 7000);
}
auto();


// // ==================== 判斷滑鼠滑進滑出變化 =========================
// $(".btn_list").mouseover(function(){
//     x=$(this).index();
//     $(".btn_list:eq("+x+")").css("backgroundColor","#00F");
// });
// $(".btn_list").mouseout(function(){
//     x=$(this).index();
//     if( a==1){$(".btn_list:eq("+x+")").css("backgroundColor","#0F0");}
//     else if( a==1 && now_pic!=x){$(".btn_list:eq("+x+")").css("backgroundColor","#0F0");}
//     else if(a==1 && now_pic==x){$(".btn_list:eq("+x+")").css("backgroundColor","#F00");}
//     else if(a==0 && now_pic==x){$(".btn_list:eq("+x+")").css("backgroundColor","#F00");}
//     else if(a==0 && now_pic!=x){$(".btn_list:eq("+x+")").css("backgroundColor","#0F0");}
//     else{$(".btn_list:eq("+x+")").css("backgroundColor","#0F0");}
// });


// ==================== 判斷滑鼠滑進滑出圖片並改變Box-Shadow的顏色變化 =============
// $(".pic_btn").mouseover(function(){
//     p=$(this).index();
//     $(".pic_btn:eq("+p+")").css("box-shadow","5px 5px #00F");
// });
// $(".pic_btn").mouseout(function(){
//     p=$(this).index();
//     $(".pic_btn:eq("+p+")").css("box-shadow","5px 5px #000");
// });
