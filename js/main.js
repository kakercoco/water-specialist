function changeTab(val, e) {
	$(e).parent().children().removeClass('active')
	$(e).addClass('active')
	$('.new-produce-left ul').hide()
	var ul = '.ul-' + val
	$('.new-produce-left').children(ul).show()
}
function changeNav(val, e) {
	$(e).parent().find('li').removeClass('active')
	$(e).addClass('active')
	$('.new-produce').hide()
	selected = '.new-produce-' + val
	$(selected).show()
}
$('.hot-produce-left .right li').click(function(){
	$(this).parent().find('div').hide()
	$(this).next().show()
})
function changeCompany(val, e) {
	$(e).parent().find('li').removeClass('active')
	$(e).addClass('active')
	$('.brand-ul').hide()
	selected = '.brand-ul-' + val
	$(selected).show()
}
$('.show-more').click(function(){
	$(this).prev().css('height','auto')
	$(this).hide()
})
$('.company-detail-img-left li img').click(function(e){
	$('.company-detail-img-left>img').attr('src',e.target.src)
	$('.company-detail-img-left li').removeClass('active')
	$(this).parent().addClass('active')
})

 $('.infor-section-three-left .right li').click(function(){
	$(this).parent().find('div').hide()
	$(this).next().show()
})
 $('.case-introduce .content li img').click(function(e){
	$('.case-introduce .content>img').attr('src',e.target.src)
	$('.case-introduce li').removeClass('active')
	$(this).parent().addClass('active')
})
 $('.case-infor-left .produce .title span').click(function(){
 	$('.case-infor-left .produce .title span').removeClass('active')
 	$(this).addClass('active')
 })
 function changeCaseProduce(val, e){
 	$('.case-infor-left .produce .title span').removeClass('active')
 	$(e).addClass('active')
 	const ul = '.ul-' + val
 	$('.case-infor-left .produce ul').hide()
 	$('.case-infor-left .produce').find(ul).show()
 }
