$(function(){
  var reason = parseInt($("#reason-why").val());
  var type = parseInt($("#what-type").val());
  var interesting = parseInt($("#interesting").val());
  var backFront = parseInt($("#back-front").val());
  var important = parseInt($("#important").val());
  var result = (reason + type) + (interesting + backFront) + important;
  $("select#reason-why").select(function(event){
    event.preventDefault();
    alert("why!!");
    if (!reason || !type || !interesting || !backFront || !important){
      alert("Please finish all selections");
    }
    else if (reason > 1) {
      $(".css-design").show();
    }
  });
});
